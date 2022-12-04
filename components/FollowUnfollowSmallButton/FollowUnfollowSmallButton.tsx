import { User } from '@inspire/types';
import React from 'react';

import { ButtonTypes } from 'components';
import { Button } from 'components/Button/Button';
import { useBlockedUsers, useFollowUnFollow } from 'hooks';

interface FollowUnfollowSmallButtonProps {
    user: Partial<User>;
    rootDetails: User;
}

export function FollowUnfollowSmallButton(props: FollowUnfollowSmallButtonProps) {
    const { isBlockedByUsers } = useBlockedUsers(props.user.id as number);
    const [isFriend, followUser, unFollowUser] = useFollowUnFollow(props.user!.id as number, props.rootDetails);

    return (
        <Button
            size="wide"
            color={isFriend ? 'blue' : 'color1'}
            isBlocked={isBlockedByUsers()}
            type={ButtonTypes.Link}
            onPress={isFriend ? unFollowUser : followUser}
            translateKey={isFriend ? 'profile.buttons.following' : 'profile.buttons.follow'}
        />
    );
}
