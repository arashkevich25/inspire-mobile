import { BasicPost } from '@inspire/types';
import { CreateTimeModel } from 'app-constants/createTime';
import { ComponentId } from 'navigation';
import React from 'react';

import { TouchableOpacity } from 'react-native';

import { MediumPostTile } from 'components';
import { createdAtCalc, redirectToFullPostView } from 'tools';

interface MediumPostListItemProps {
    post: BasicPost;
    isInternetReachableState: boolean;
}

export function MediumPostListItem(props: MediumPostListItemProps) {
    const [createdAtString, , hours, , createdAtDate] = createdAtCalc(new Date(props.post.createdAt));

    function openPost() {
        redirectToFullPostView(props.post.id, props.isInternetReachableState, ComponentId.AppHome, '');
    }

    return (
        <TouchableOpacity activeOpacity={1} onPress={openPost}>
            <MediumPostTile
                name={props.post.name}
                photo={props.post.photo}
                userAvatar={props.post.user.avatar}
                userName={props.post.user.name}
                additionalText={hours > CreateTimeModel.maxHours ? createdAtDate : createdAtString}
            />
        </TouchableOpacity>
    );
}
