import { User } from '@inspire/types';
import { isIphone } from 'app-constants';
import React from 'react';

import { Animated, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { FloatBackButton, FollowUnfollowSmallButton, Text } from 'components';
import { Sizes } from 'types';
import { ActivitiesIndicator, RootUserMenu, UserMenu } from './components';

import { Styles } from './styles';

interface HeaderProps {
    scroll: Animated.Value;
    details: Partial<User>;
    rootDetails: User;
    isRoot: boolean;
    componentId: any;
}

export function Header({ scroll, details, isRoot, rootDetails, componentId }: HeaderProps) {
    const opacityName = scroll.interpolate({
        inputRange: [0, 160, 210],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp',
    });

    const opacityUserMenu = scroll.interpolate({
        inputRange: [0, 160, 210],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp',
    });

    const translateX = scroll.interpolate({
        inputRange: [0, 160, 210],
        outputRange: [-1000, 0, 0],
        extrapolate: 'clamp',
    });

    const translateXMenu = scroll.interpolate({
        inputRange: [0, 160, 210],
        outputRange: [0, 0, -1000],
        extrapolate: 'clamp',
    });

    async function backToParentView() {
        await Navigation.pop(componentId);
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.detailsBox}>
                <Animated.View style={[Styles.detailsNameAnimatedBox, { opacity: opacityName }]}>
                    <Text isBold={true} numberOfLines={1} fontSize={Sizes.Large} style={Styles.detailsNameText}>
                        {details.name}
                    </Text>
                </Animated.View>
                {isRoot ? (
                    <Animated.View
                        style={[
                            Styles.rootUserMenuBox,
                            {
                                opacity: opacityUserMenu,
                            },
                        ]}>
                        <RootUserMenu rootUserId={rootDetails.id} scroll={scroll} />
                    </Animated.View>
                ) : (
                    <Animated.View
                        style={[
                            Styles.backButtonBox,
                            {
                                opacity: opacityUserMenu,
                            },
                        ]}>
                        {isIphone ? <FloatBackButton backHandle={backToParentView} /> : null}
                    </Animated.View>
                )}
            </View>
            {isRoot ? (
                <ActivitiesIndicator />
            ) : (
                <View style={Styles.menuAndButtonContainer}>
                    <Animated.View
                        style={[
                            Styles.userMenuBox,
                            {
                                opacity: opacityUserMenu,
                                transform: [{ translateX: translateXMenu }],
                            },
                        ]}>
                        <UserMenu userId={details.id as number} />
                    </Animated.View>
                    <Animated.View
                        style={[
                            Styles.followUnfollowBox,
                            {
                                opacity: opacityName,
                                transform: [{ translateX: translateX }],
                            },
                        ]}>
                        <FollowUnfollowSmallButton rootDetails={rootDetails} user={details} />
                    </Animated.View>
                </View>
            )}
        </View>
    );
}
