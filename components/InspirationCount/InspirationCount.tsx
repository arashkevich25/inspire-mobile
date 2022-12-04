import React from 'react';

import { View } from 'react-native';

import { Text } from 'components';
import { Sizes } from 'types';
import { UserAvatar } from './components';

import { Styles } from './styles';

interface InspirationCountProps {
    recommendCount: number;
    inspirationCount: number;
    usersAvatar: string[];
    authenticated: boolean;
}

export function InspirationCount(props: InspirationCountProps) {
    function renderAvatars() {
        return props.usersAvatar.map((item, index) => (
            <View key={index} style={[Styles[index], props.usersAvatar.length === 1 ? { top: 5 } : 0]}>
                <UserAvatar uri={item} />
            </View>
        ));
    }

    return (
        <View
            style={[
                Styles.contentContainer,
                !props.usersAvatar.length ? { marginRight: 0 } : null,
                props.usersAvatar.length === 1 ? { marginRight: 5 } : null,
                props.usersAvatar.length === 2 ? { marginRight: 10 } : null,
            ]}>
            <View style={[Styles.textsContainer, !props.usersAvatar.length ? { marginRight: 0 } : null]}>
                <View style={Styles.textsBox}>
                    <Text style={Styles.textBox}>
                        {' '}
                        <Text fontSize={Sizes.XSmall} isBold={true}>
                            {' '}
                            {props.inspirationCount}{' '}
                        </Text>
                        <Text fontSize={Sizes.XSmall} translateKey="showPostModal.inspirationCount" />
                    </Text>
                </View>
                {props.authenticated ? (
                    <View style={Styles.textsBox}>
                        <Text style={Styles.textBox}>
                            {' '}
                            <Text fontSize={Sizes.XSmall} isBold={true}>
                                {' '}
                                {props.recommendCount}{' '}
                            </Text>
                            <Text fontSize={Sizes.XSmall} translateKey="showPostModal.recommendCount" />
                        </Text>
                    </View>
                ) : null}
            </View>
            {props.usersAvatar.length ? <View style={Styles.avatarsContainer}>{renderAvatars()}</View> : null}
        </View>
    );
}
