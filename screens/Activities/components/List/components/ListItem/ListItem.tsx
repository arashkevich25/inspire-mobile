import { Activity, HistoryEventsTypes } from '@inspire/types';
import React from 'react';

import { ItemText } from './components';
import { Base } from './components/Base';

interface ListItemProps {
    listItem: Activity;
    onClickItem: (activity: Activity) => void;
}

export function ListItem(props: ListItemProps) {
    function onClickHandle() {
        props.onClickItem(props.listItem);
    }

    switch (props.listItem.kind) {
        case HistoryEventsTypes.AddedUserToGroup:
            return (
                <Base
                    fallback={props.listItem.group!.name}
                    isRead={props.listItem.isRead}
                    onClickHandle={onClickHandle}
                    imageUrl={props.listItem.group?.avatar}>
                    <ItemText isRead={props.listItem.isRead} isBold={true}>
                        {props.listItem.user?.name}
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.addedUserToGroup"
                        />
                        <ItemText isRead={props.listItem.isRead} isBold={true}>
                            {props.listItem.group?.name}
                        </ItemText>
                    </ItemText>
                </Base>
            );
        case HistoryEventsTypes.AddPostToGroup:
            return (
                <Base
                    fallback={props.listItem.group!.name}
                    isRead={props.listItem.isRead}
                    onClickHandle={onClickHandle}
                    imageUrl={props.listItem.group?.avatar}>
                    <ItemText isRead={props.listItem.isRead} isBold={true}>
                        {props.listItem.user?.name}
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.addPostToGroup"
                        />
                    </ItemText>
                </Base>
            );
        case HistoryEventsTypes.PostRecommend:
            return (
                <Base
                    fallback={props.listItem.post!.name}
                    isRead={props.listItem.isRead}
                    onClickHandle={onClickHandle}
                    imageUrl={props.listItem.post?.photos[0].uri}>
                    <ItemText isRead={props.listItem.isRead} isBold={true}>
                        {props.listItem.user?.name}
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.recommendPost.partOne"
                        />
                        <ItemText isRead={props.listItem.isRead} isBold={true}>
                            {`${props.listItem.post?.name.trim()} `}
                        </ItemText>
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.recommendPost.partTwo"
                        />
                    </ItemText>
                </Base>
            );
        case HistoryEventsTypes.InspireByPost:
            return (
                <Base
                    fallback={props.listItem.post!.name}
                    isRead={props.listItem.isRead}
                    onClickHandle={onClickHandle}
                    imageUrl={props.listItem.post?.photos[0].uri}>
                    <ItemText isRead={props.listItem.isRead} isBold={true}>
                        {props.listItem.user?.name}
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.inspireByPost.partOne"
                        />
                        <ItemText isRead={props.listItem.isRead} isBold={true}>
                            {`${props.listItem.post?.name.trim()} `}
                        </ItemText>
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.inspireByPost.partTwo"
                        />
                    </ItemText>
                </Base>
            );
        case HistoryEventsTypes.NewFollower:
            return (
                <Base
                    fallback={props.listItem.user!.name}
                    isRead={props.listItem.isRead}
                    onClickHandle={onClickHandle}
                    imageUrl={props.listItem.user?.avatar}>
                    <ItemText isRead={props.listItem.isRead} isBold={false}>
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.newFollower.partOne"
                        />
                        <ItemText isRead={props.listItem.isRead} isBold={true}>
                            {props.listItem.user?.name}
                        </ItemText>
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.newFollower.partTwo"
                        />
                    </ItemText>
                </Base>
            );
        case HistoryEventsTypes.PostAddedComment:
            return (
                <Base
                    fallback={props.listItem.post!.name}
                    isRead={props.listItem.isRead}
                    onClickHandle={onClickHandle}
                    imageUrl={props.listItem.post?.photos[0].uri}>
                    <ItemText isRead={props.listItem.isRead} isBold={true}>
                        {props.listItem.user?.name}
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.postAddedComment"
                        />
                        <ItemText isRead={props.listItem.isRead} isBold={true}>
                            {props.listItem.post?.name.trim()}
                        </ItemText>
                    </ItemText>
                </Base>
            );

        case HistoryEventsTypes.JoinedToClub:
            return (
                <Base
                    fallback={props.listItem.club!.name}
                    isRead={props.listItem.isRead}
                    onClickHandle={onClickHandle}
                    imageUrl={props.listItem.club?.logo.uri}>
                    <ItemText isRead={props.listItem.isRead} isBold={true}>
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.joinedToCub.partOne"
                        />
                        <ItemText isRead={props.listItem.isRead} isBold={true}>
                            {props.listItem.club?.name}
                        </ItemText>
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.joinedToCub.partTwo"
                        />
                    </ItemText>
                </Base>
            );

        case HistoryEventsTypes.NewPersonAtClub:
            return (
                <Base
                    fallback={props.listItem.user!.name}
                    isRead={props.listItem.isRead}
                    onClickHandle={onClickHandle}
                    imageUrl={props.listItem.user?.avatar}>
                    <ItemText isRead={props.listItem.isRead} isBold={true}>
                        {props.listItem.user?.name}
                        <ItemText
                            isRead={props.listItem.isRead}
                            isBold={false}
                            translateKey="activities.descriptions.newClubMember"
                        />
                        {props.listItem.club?.name}
                    </ItemText>
                </Base>
            );
        default:
            return null;
    }
}
