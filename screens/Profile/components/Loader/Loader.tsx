import React from 'react';

import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder/lib/SkeletonPlaceholder';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

export function Loader() {
    return (
        <View>
            <SkeletonPlaceholder
                backgroundColor={StylesValue(ThemeVariables.BackgroundColor2)}
                highlightColor={StylesValue(ThemeVariables.BackgroundColor4)}>
                <View style={Styles.contentContainer}>
                    <View style={Styles.userDetailsBox}>
                        <View style={Styles.userAvatar} />
                        <View style={Styles.nameBox}>
                            <View style={Styles.nameBoxLine1} />
                            <View style={Styles.nameBoxLine2} />
                            <View style={Styles.nameBoxLine3} />
                        </View>
                    </View>
                    <View style={Styles.testBox}>
                        <View style={Styles.textTile} />
                        <View style={Styles.textTile} />
                        <View style={Styles.textTile} />
                        <View style={Styles.textTile} />
                    </View>
                    <View style={Styles.tabsBox}>
                        <View style={Styles.tab} />
                    </View>
                    <View style={Styles.postsDivider} />
                    <View style={Styles.postsBox}>
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                        <View style={Styles.postTile} />
                    </View>
                </View>
            </SkeletonPlaceholder>
        </View>
    );
}
