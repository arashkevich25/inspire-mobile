import { Category } from '@inspire/types';
import React, { memo } from 'react';

import { View } from 'react-native';

import { Pill, Text } from 'components';
import { categoryPhoneLocation } from 'tools/categoryPhoneLocation';
import { Sizes } from 'types';

import { Styles } from './styles';

interface SelectedCategoriesProps {
    categories: Category[];
    selectedCategories: number[];
    selectCategoryHandle: (categoryId: number) => void;
}

const comparisonFn = (prevProps: SelectedCategoriesProps, nextProps: SelectedCategoriesProps) => {
    return (
        prevProps.selectedCategories === nextProps.selectedCategories && prevProps.categories === nextProps.categories
    );
};

function Component(props: SelectedCategoriesProps) {
    const renderPills = () =>
        [...props.categories]
            .sort((a, b) => a[categoryPhoneLocation(props.categories)] - b[categoryPhoneLocation(props.categories)])
            .map((category, index) => (
                <Pill<number>
                    key={index}
                    argsHandle={category.id}
                    selectHandle={props.selectCategoryHandle}
                    isSelected={props.selectedCategories.includes(category.id)}
                    categoryTKey={category.tkey}
                />
            ));

    return (
        <View style={Styles.contentContainer}>
            <View>
                <Text fontSize={Sizes.Medium} translateKey="addPost.titles.chooseCategory" />
            </View>
            <View style={Styles.pillContainer}>{renderPills()}</View>
        </View>
    );
}

export const SelectedCategories = memo(Component, comparisonFn);
