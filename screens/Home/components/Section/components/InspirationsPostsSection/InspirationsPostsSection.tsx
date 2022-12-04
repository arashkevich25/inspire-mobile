import { ComponentId } from 'navigation';
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

interface InspirationsPostsSectionProps {
    item: HomeTemplateSectionStateItem;
}

export function InspirationsPostsSection(props: InspirationsPostsSectionProps) {
    const { body, data } = props.item as any;
    const { isInternetReachableState } = useNetworkState();

    function renderItem(item: any): React.ReactElement | null {
        return <PostListItem isInternetReachableState={isInternetReachableState} key={item.index} post={item.item} />;
    }

    async function showMoreHandle() {
        Navigation.mergeOptions(ComponentId.AppHome, {
            bottomTabs: {
                currentTabIndex: 3,
            },
        });
    }

    return (
        <View style={Styles.sectionContainer}>
            <View style={Styles.titleActionsBar}>
                <Text style={Styles.sectionTitle}>{body.title[deviceLocation]}</Text>
                <ButtonShowMore showMoreHandle={showMoreHandle} text={body.buttons.showMore[deviceLocation]} />
            </View>
            <HorizontalList sectionName="inspiration" data={data} renderItem={renderItem} />
        </View>
    );
}
