import { Category } from '@inspire/types';
import React from 'react';

import { ScrollView } from 'react-native';

import { CategoryTile } from './components';

import { Styles } from './styles';

interface CategoriesGridProps {
    categories: Category[];
    selectHandle: (category: Category) => void;
    selectedCategories: number[];
}

export function CategoriesGrid(props: CategoriesGridProps) {
    const imagesPaths = [
        require('./../../../../../../assets/categories/1.png'),
        require('./../../../../../../assets/categories/2.png'),
        require('./../../../../../../assets/categories/3.png'),
        require('./../../../../../../assets/categories/4.png'),
        require('./../../../../../../assets/categories/5.png'),
        require('./../../../../../../assets/categories/6.png'),
        require('./../../../../../../assets/categories/7.png'),
        require('./../../../../../../assets/categories/8.png'),
        require('./../../../../../../assets/categories/9.png'),
        require('./../../../../../../assets/categories/10.png'),
        require('./../../../../../../assets/categories/11.png'),
        require('./../../../../../../assets/categories/12.png'),
        require('./../../../../../../assets/categories/13.png'),
        require('./../../../../../../assets/categories/14.png'),
        require('./../../../../../../assets/categories/15.png'),
        require('./../../../../../../assets/categories/16.png'),
        require('./../../../../../../assets/categories/17.png'),
        require('./../../../../../../assets/categories/18.png'),
        require('./../../../../../../assets/categories/19.png'),
        require('./../../../../../../assets/categories/20.png'),
        require('./../../../../../../assets/categories/21.png'),
        require('./../../../../../../assets/categories/22.png'),
        require('./../../../../../../assets/categories/23.png'),
        require('./../../../../../../assets/categories/24.png'),
        require('./../../../../../../assets/categories/25.png'),
        require('./../../../../../../assets/categories/26.png'),
        require('./../../../../../../assets/categories/27.png'),
        require('./../../../../../../assets/categories/28.png'),
        require('./../../../../../../assets/categories/29.png'),
    ];
    return (
        <ScrollView contentContainerStyle={Styles.contentContainer} showsVerticalScrollIndicator={false}>
            {props.categories.map((category, index) => (
                <CategoryTile
                    key={index}
                    selectHandle={props.selectHandle}
                    category={category}
                    imagesPath={imagesPaths[index]}
                    selectedCategories={props.selectedCategories}
                    isSelected={props.selectedCategories.includes(category.id)}
                />
            ))}
        </ScrollView>
    );
}
