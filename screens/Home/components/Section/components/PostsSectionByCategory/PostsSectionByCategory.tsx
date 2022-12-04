import { FilteredPostsListByStaticFilter } from 'navigation';
import React from 'react';
import { MODAL_COMPONENT_ID } from '../../../../Home';
import { ButtonShowMore } from '../ButtonShowMore';
import { PostListItem } from '../PostListItem';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { HorizontalList, Text } from 'components';
import { useFilters, useNetworkState } from 'hooks';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';

import { Styles } from '../../styles';

interface PostsSectionByCategoryProps {
    item: HomeTemplateSectionStateItem;
}

export function PostsSectionByCategory(props: PostsSectionByCategoryProps) {
    const { body, data } = props.item as any;
    const { isInternetReachableState } = useNetworkState();
    const [, , setCategoryFilter] = useFilters();
    function renderItem(item: any): React.ReactElement | null {
        return <PostListItem isInternetReachableState={isInternetReachableState} key={item.index} post={item.item} />;
    }

    async function showMoreHandle() {
        setCategoryFilter(Number(props.item.body.filterId));
        await Navigation.showModal({
            stack: {
                id: MODAL_COMPONENT_ID,
                children: [
                    {
                        component: FilteredPostsListByStaticFilter(body.title[deviceLocation]),
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
