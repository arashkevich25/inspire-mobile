import { Category } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import { CategoryPill } from './components/CategoryPill';

import { Styles } from './styles';

interface CategoriesProps {
    categories: Category[];
}

export function Categories(props: CategoriesProps) {
    return (
        <View style={Styles.contentContainer}>
            <View style={Styles.contentBox}>
                {props.categories.map(cat => (
                    <CategoryPill key={cat.tkey} tkey={cat.tkey} />
                ))}
            </View>
        </View>
    );
}
