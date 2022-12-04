import { User, UserContactData } from '@inspire/types';
import React from 'react';

import { Animated, TouchableOpacity, View } from 'react-native';

import { Avatar, Text } from 'components';
import { NavProps, Sizes } from 'types';
import { profile } from '../../../../../e2e/selectors';
import {
    Description,
    EditProfileButton,
    FacebookButton,
    FollowUnFollowButton,
    InstagramButton,
    Statistics,
    WebPage,
} from './components';

import { styles } from './styles';

interface ForegroundProps extends NavProps {
    scroll: Animated.Value;
    details: User;
    rootDetails: User;
    isRoot: boolean;
    subscribers: User[];
    followers: User[];
    contactData: UserContactData;
    openDetails: () => void;
}
export function Foreground(props: ForegroundProps) {
    const titleOpacity = props.scroll.interpolate({
        inputRange: [0, 106, 154],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.contentContainer}>
            <Animated.View style={{ opacity: titleOpacity }}>
                <View style={styles.userDetailsContainer}>
                    <TouchableOpacity style={styles.avatarBox} disabled={!props.isRoot} onPress={props.openDetails}>
                        <Avatar size="large" uri={props.details.avatar} fallback={props.details.name} />
                    </TouchableOpacity>
                    <View style={styles.userDetails}>
                        <Text numberOfLines={1} testID={profile.text.userName} isBold={true} fontSize={Sizes.Large}>
                            {props.details.name}
                        </Text>
                        <Text color="gray" numberOfLines={1} isItalic={true} fontSize={Sizes.Small}>
                            @{props.details.userUniqName}
                        </Text>
                        {props.details.desc ? <Description desc={props.details.desc} /> : null}
                        {props.contactData.web ? <WebPage link={props.contactData.web} /> : null}
                    </View>
                </View>
                <Statistics
                    postCount={props.details.postsCount}
                    inspiredCount={props.details.inspiredCount}
                    followers={props.followers}
                    subscribers={props.subscribers}
                    componentId={props.componentId}
                />
            </Animated.View>
            <View style={styles.buttonBox}>
                {!props.isRoot ? (
                    <FollowUnFollowButton rootDetails={props.rootDetails} followerId={props.details.id as number} />
                ) : (
                    <EditProfileButton openUserDetails={props.openDetails} />
                )}
                {props.contactData.facebook ? (
                    <View style={styles.socialIconBox}>
                        <FacebookButton fbLink={props.contactData.facebook} />
                    </View>
                ) : null}
                {props.contactData.instagram ? (
                    <View style={styles.socialIconBox}>
                        <InstagramButton instagramUrl={props.contactData.instagram} />
                    </View>
                ) : null}
            </View>
        </View>
    );
}
