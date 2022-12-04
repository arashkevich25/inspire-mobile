import { DetailsPost } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import { ButtonBorderedLink } from 'components';
import { Sizes } from 'types';
import { UserAndTime } from './components';

import { Styles } from './styles';

interface UserAndStatsBarProps {
    post: DetailsPost;
    openProfileHandle: () => void;
    followUnfollowHandle: () => void;
    isFriend: boolean;
    isRoot: boolean;
    authenticated: boolean;
    createdAt: string;
}

export function UserAndStatsBar({
    post,
    openProfileHandle,
    isFriend,
    followUnfollowHandle,
    isRoot,
    authenticated,
    createdAt,
}: UserAndStatsBarProps) {
    return (
        <View style={Styles.contentContainer}>
            <UserAndTime openProfileHandle={openProfileHandle} user={post.user} time={createdAt} />
            {isRoot || !authenticated || isFriend ? null : (
                <View style={Styles.followButtonBox}>
                    <ButtonBorderedLink
                        onPressHandle={followUnfollowHandle}
                        size={Sizes.Small}
                        translateKey="showPostModal.startFollow"
                    />
                </View>
            )}
        </View>
    );
}
