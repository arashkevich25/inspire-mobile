import { ComponentId, WorldWall } from 'navigation';
import React from 'react';
import { ButtonShowMore } from '../ButtonShowMore';
import { MediumPostListItem } from '../MediumPostListItem';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { HorizontalList, Text } from 'components';
import { useNetworkState } from 'hooks';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface PostsSectionLastAddedProps {
    item: HomeTemplateSectionStateItem;
}

export function PostsSectionLastAdded(props: PostsSectionLastAddedProps) {
    const { body, data } = props.item as any;
    const { isInternetReachableState } = useNetworkState();

    function renderItem(item: any): React.ReactElement | null {
        return (
            <MediumPostListItem isInternetReachableState={isInternetReachableState} key={item.index} post={item.item} />
        );
    }

    async function showMoreHandle() {
        await Navigation.push(ComponentId.AppHome, { component: WorldWall });
    }

    return (
        <View style={Styles.sectionContainer}>
            <View style={Styles.titleActionsBar}>
                <Text fontSize={Sizes.Small} style={Styles.sectionTitle}>
                    {body.title[deviceLocation]}
                </Text>
                <ButtonShowMore showMoreHandle={showMoreHandle} text={body.buttons.showMore[deviceLocation]} />
            </View>
            <HorizontalList sectionName={props.item.body.filterId} data={data} renderItem={renderItem} />
        </View>
    );
}
