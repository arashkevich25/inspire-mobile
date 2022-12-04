import { User } from '@inspire/types';
import { ComponentId } from 'navigation';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ButtonBorderedLink, Image, Text } from 'components';
import { GlobalStyles } from 'global-styles';
import { useFollowUnFollow, useIsRoot } from 'hooks';
import { redirectToProfile } from 'tools';
import { StylesValue } from 'tools/StylesValue';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from '../../styles';

interface UserListItemProps {
    user: User;
    isInternetReachableState: boolean;
}

export function UserListItem(props: UserListItemProps) {
    const [, rootDetails] = useIsRoot(props.user.id);
    const [isFriend, followUser, unFollowUser] = useFollowUnFollow(props.user.id, rootDetails);

    function openUser() {
        redirectToProfile(props.user.id, props.isInternetReachableState, ComponentId.AppHome, '');
    }

    function folllowUnFollow() {
        if (isFriend) {
            unFollowUser();
            return;
        }
        followUser();
    }
    return (
        <View style={[Styles.userListItemContainer, GlobalStyles.shadowBasic]}>
            <TouchableOpacity onPress={openUser} style={Styles.userDetailsContainer}>
                <Image borderRadius={50} width={50} height={50} uri={{ uri: props.user.avatar }} />
                <View style={Styles.userDetailsBlock}>
                    <Text numberOfLines={1} isBold={true} fontSize={Sizes.Small} style={Styles.userDetailsText}>
                        {props.user.name}
                    </Text>
                </View>
                <View style={Styles.userStatisticsContainer}>
                    {/** TODO to change api and enabled later */}
                    {/* <View style={Styles.userStatisticBox}>
                        <Image
                            width={20}
                            tintColor={StylesValue(ThemeVariables.WhiteAndBlack)}
                            style={Styles.userStatisticIcon}
                            uri={require('../../../../../../assets/user_tile/recommends.png')}
                        />
                        <Text fontSize={Sizes.XSmall} color="color1">
                            {props.user.recommendCount}
                        </Text>
                    </View> */}
                    <View style={Styles.userStatisticBox}>
                        <Image
                            width={20}
                            tintColor={StylesValue(ThemeVariables.WhiteAndBlack)}
                            style={Styles.userStatisticIcon}
                            uri={require('../../../../../../assets/user_tile/inspired.png')}
                        />
                        <Text fontSize={Sizes.XSmall} color="color1">
                            {props.user.postsCount}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={Styles.userFollowButtonBox}>
                {isFriend ? (
                    <View style={Styles.followFeedback}>
                        <Icon color={StylesValue(ThemeVariables.BlueAndWhite)} name="check-circle" size={18} />
                    </View>
                ) : (
                    <ButtonBorderedLink onPressHandle={folllowUnFollow} translateKey="profile.buttons.follow" />
                )}
            </View>
        </View>
    );
}
