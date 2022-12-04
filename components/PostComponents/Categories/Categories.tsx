import { Category } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import { Text } from 'components/Text';
import { Sizes } from 'types';

import { Styles } from './styles';

interface CategoriesProps {
    categories: Category[];
}

export function Categories(props: CategoriesProps) {
    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.categoryBox}>
                <Text color="color1" fontSize={Sizes.XSmall} translateKey={props.categories[0].tkey} />
                {props.categories.length >= 2 ? (
                    <>
                        <Text>,</Text>
                        <Text
                            style={Styles.text}
                            color="color1"
                            fontSize={Sizes.XSmall}
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            translateKey={props.categories[1].tkey}
                        />
                    </>
                ) : null}
            </View>
            <View style={Styles.categoryCounter}>
                {props.categories.length - 2 > 0 ? (
                    <Text style={Styles.textAlign}>{`+${props.categories.length - 2}`}</Text>
                ) : null}
            </View>
        </View>
    );
}
