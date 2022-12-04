import { User } from '@inspire/types';
import React from 'react';
import { RecommendButton } from '../RecommendButton';

import { TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { Styles } from 'components/Button/styles';
import { useBlockedUsers, useFollowUnFollow } from 'hooks';
import { EditProfileButton } from '../Foreground/components';

import { styles } from '../../styles';

interface ClubMemberActionPanelProps {
    isRoot: boolean;
    openDrawer: () => void;
    openDetails: () => void;
    rootDetails: User;
    details: User;
}

export function ClubMemberActionPanel(props: ClubMemberActionPanelProps) {
    const [isFriend, followUser, unFollowUser] = useFollowUnFollow(
        props.details.id as number,
        props.rootDetails,
        false,
    );
    const { isBlockedByUsers } = useBlockedUsers(props.details.id as number);
    return (
        <View style={styles.clubMemberActionBar}>
            {props.isRoot ? (
                <EditProfileButton openUserDetails={props.openDetails} />
            ) : (
                <>
                    <RecommendButton
                        userId={props.details.id}
                        isRecommendedByUser={props.details.isRecommendedByUser}
                    />
                    <TouchableOpacity
                        onPress={isFriend ? unFollowUser : followUser}
                        style={[
                            styles.buttonBox,
                            isBlockedByUsers() ? Styles.blocked : {},
                            isFriend ? styles.activeButtonBox : null,
                        ]}>
                        <Text
                            color={isFriend ? 'blue' : 'color1'}
                            translateKey={isFriend ? 'profile.buttons.following' : 'profile.buttons.follow'}
                        />
                    </TouchableOpacity>
                </>
            )}
            <TouchableOpacity style={styles.buttonBox} onPress={props.openDrawer}>
                <Text color="color1" translateKey="buttons.more" />
            </TouchableOpacity>
        </View>
    );
}
