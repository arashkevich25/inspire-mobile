import React from 'react';
import { PostListItem } from '../PostListItem';

import { View } from 'react-native';

import { HorizontalList, Text } from 'components';
import { useNetworkState } from 'hooks';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';

import { Styles } from '../../styles';

interface PostsSectionWithoutShowMoreProps {
    item: HomeTemplateSectionStateItem;
}

export function PostsSectionWithoutShowMore(props: PostsSectionWithoutShowMoreProps) {
    const { body, data } = props.item as any;
    const { isInternetReachableState } = useNetworkState();

    function renderItem(item: any): React.ReactElement | null {
        return <PostListItem isInternetReachableState={isInternetReachableState} key={item.index} post={item.item} />;
    }

    return (
        <View style={Styles.sectionContainer}>
            <View style={Styles.title}>
                <Text numberOfLines={1} style={Styles.sectionTitle}>
                    {body.title[deviceLocation]}
                </Text>
            </View>
            <HorizontalList sectionName={props.item.body.filterId} data={data} renderItem={renderItem} />
        </View>
    );
}
