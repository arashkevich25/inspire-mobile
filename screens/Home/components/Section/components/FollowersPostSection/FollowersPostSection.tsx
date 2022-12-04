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

interface FollowersPostSectionProps {
    item: HomeTemplateSectionStateItem;
}

export function FollowersPostSection(props: FollowersPostSectionProps) {
    const { body, data } = props.item as any;
    const { isInternetReachableState } = useNetworkState();

    function renderItem(item: any): React.ReactElement | null {
        return <PostListItem isInternetReachableState={isInternetReachableState} key={item.index} post={item.item} />;
    }

    async function showMoreHandle() {
        Navigation.mergeOptions(ComponentId.AppHome, {
            bottomTabs: {
                currentTabIndex: 1,
            },
        });
    }

    return (
        <View style={Styles.sectionContainer}>
            <View style={Styles.titleActionsBar}>
                <Text numberOfLines={1} style={Styles.sectionTitle}>
                    {body.title[deviceLocation]}
                </Text>
                <ButtonShowMore showMoreHandle={showMoreHandle} text={body.buttons.showMore[deviceLocation]} />
            </View>
            <HorizontalList sectionName="followers" data={data} renderItem={renderItem} />
        </View>
    );
}
