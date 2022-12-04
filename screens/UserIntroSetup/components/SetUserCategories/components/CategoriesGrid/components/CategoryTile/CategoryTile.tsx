import { Category } from '@inspire/types';
import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Image, Text } from 'components';
import { GlobalStyles } from 'global-styles';
import { StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from '../../styles';

interface CategoryTileProps {
    category: Category;
    selectedCategories: number[];
    isSelected: boolean;
    imagesPath: any;
    selectHandle: (cat: Category) => void;
}

export function CategoryTile(props: CategoryTileProps) {
    function selectHandle() {
        props.selectHandle(props.category);
    }

    return (
        <TouchableOpacity
            onPress={selectHandle}
            style={[Styles.tileBox, GlobalStyles.shadowBasic, props.isSelected ? Styles.tileBoxActive : null]}>
            <Image
                style={Styles.icon}
                tintColor={
                    props.selectedCategories.includes(props.category.id)
                        ? StylesValue(ThemeVariables.HighlightColor1)
                        : StylesValue(ThemeVariables.BorderColor2)
                }
                uri={props.imagesPath}
            />
            <Text
                color={props.isSelected ? 'blue' : 'color1'}
                fontSize={Sizes.XSmall}
                style={Styles.text}
                translateKey={props.category.tkey}
            />
        </TouchableOpacity>
    );
}
