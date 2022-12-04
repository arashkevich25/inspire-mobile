import { FilteredPostsList } from 'navigation';
import React from 'react';
import { ButtonShowMore } from '../ButtonShowMore';
import { PostListItem } from '../PostListItem';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { HorizontalList, Text } from 'components';
import { useNetworkState } from 'hooks';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';

import { Styles } from '../../styles';

interface PostsSectionProps {
    item: HomeTemplateSectionStateItem;
}

export function PostsSection(props: PostsSectionProps) {
    const { body, data } = props.item as any;
    const { isInternetReachableState } = useNetworkState();

    function renderItem(item: any): React.ReactElement | null {
        return <PostListItem isInternetReachableState={isInternetReachableState} key={item.index} post={item.item} />;
    }

    async function showMoreHandle() {
        await Navigation.showModal({
            stack: {
                children: [
                    {
                        component: FilteredPostsList(body.filterId, body.title[deviceLocation]),
                    },
                ],
            },
        });
    }

    return (
        <View style={Styles.sectionContainer}>
            <View style={Styles.titleActionsBar}>
                <Text style={Styles.sectionTitle}>{body.title[deviceLocation]}</Text>
                <ButtonShowMore showMoreHandle={showMoreHandle} text={body.buttons.showMore[deviceLocation]} />
            </View>
            <HorizontalList sectionName={props.item.body.filterId} data={data} renderItem={renderItem} />
        </View>
    );
}
