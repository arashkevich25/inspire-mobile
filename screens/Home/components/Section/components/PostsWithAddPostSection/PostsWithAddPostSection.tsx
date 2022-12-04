import { ComponentId, FilteredPostsList } from 'navigation';
import React from 'react';
import { ButtonShowMore } from '../ButtonShowMore';
import { PostListItem } from '../PostListItem';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Button, ButtonTypes, HorizontalList, Text } from 'components';
import { useAddPostState, useTagsGlobalSearch } from 'hooks';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface PostsWithAddPostSectionProps {
    item: HomeTemplateSectionStateItem;
    isInternetReachableState: boolean;
}

export function PostsWithAddPostSection(props: PostsWithAddPostSectionProps) {
    const { body, data } = props.item as any;
    const { resetAddPostStore } = useAddPostState();
    const { reset } = useTagsGlobalSearch();

    function renderItem(item: any): React.ReactElement | null {
        return (
            // eslint-disable-next-line react/prop-types
            <PostListItem isInternetReachableState={props.isInternetReachableState} key={item.index} post={item.item} />
        );
    }

    function addPost() {
        resetAddPostStore();
        reset();
        Navigation.mergeOptions(ComponentId.AppHome, {
            bottomTabs: {
                currentTabIndex: 2,
            },
        });
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
            {body.helpText[deviceLocation] ? (
                <Text style={Styles.helpText}>{body.helpText[deviceLocation]}</Text>
            ) : null}
            {body.buttons.addPost[deviceLocation] ? (
                <View style={Styles.buttonContainer}>
                    <Button size={Sizes.Medium} type={ButtonTypes.Filled} onPress={addPost}>
                        {body.buttons.addPost[deviceLocation]}
                    </Button>
                </View>
            ) : null}
        </View>
    );
}
