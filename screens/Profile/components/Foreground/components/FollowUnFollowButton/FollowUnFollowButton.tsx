import { User } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import { ButtonBorderedLink, ButtonFilled, Text } from 'components';
import { useBlockedUsers, useFollowUnFollow } from 'hooks';
import { Sizes } from 'types';

import { styles } from '../../../../styles';
import { Styles } from './styles';

interface FollowUnFollowButtonProps {
    rootDetails: User;
    followerId: number;
}

export function FollowUnFollowButton(props: FollowUnFollowButtonProps) {
    const { rootUserIsBlocked } = useBlockedUsers(props.followerId);
    const [isFriend, followUser, unFollowUser, followUnfollowPending] = useFollowUnFollow(
        props.followerId,
        props.rootDetails,
        false,
    );

    if (rootUserIsBlocked()) {
        return (
            <View style={Styles.blockedUserBox}>
                <Text translateKey="profile.buttons.userIsBlocked" fontSize={Sizes.Medium} color="gray" />
            </View>
        );
    }

    return (
        <View style={styles.basicProfileActivePanel}>
            {isFriend ? (
                <ButtonBorderedLink translateKey="profile.buttons.unfollow" onPressHandle={unFollowUser} />
            ) : (
                <ButtonFilled
                    translateKey="profile.buttons.follow"
                    onPressHandle={followUser}
                    fontSize={Sizes.Small}
                    isLoading={followUnfollowPending}
                    isDisabled={followUnfollowPending}
                />
            )}
        </View>
    );
}
