import { Category } from '@inspire/types';
import { NoConnectionStatus } from 'navigation';
import React from 'react';
import { ComponentId } from '../../../../../../navigation/constants/componentId';

import { TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Image, Text } from 'components';
import I18n from 'tools/translate';
import { Sizes, ThemeVariables } from 'types';
import { StylesValue } from '../../../../../../tools/StylesValue';

import { Styles } from './styles';

interface TileProps {
    category: Category;
    imageUri: any;
    isInternetReachableState: boolean;
    setCategoryFilter: any;
    setCategoryCallback: any;
}

export function Tile(props: TileProps) {
    function showFilteredPosts() {
        if (!props.isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            Navigation.push(ComponentId.AppHome, { component: NoConnectionStatus('') });
            return;
        }
        props.setCategoryFilter(props.category.id);
        if (props.setCategoryCallback) {
            props.setCategoryCallback(I18n.t(props.category.tkey));
        }
    }
    return (
        <TouchableOpacity onPress={showFilteredPosts} style={Styles.contentContainer}>
            <Image
                width={24}
                tintColor={StylesValue(ThemeVariables.BlueAndWhite)}
                style={Styles.image}
                uri={props.imageUri}
            />
            <Text style={Styles.text} fontSize={Sizes.XSmall} translateKey={props.category.tkey} />
        </TouchableOpacity>
    );
}
