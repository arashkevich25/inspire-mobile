import { Category } from '@inspire/types';
import React, { useRef, useState } from 'react';
import { CLOSED_SECTION_HEIGHT, OPENED_SECTION_HEIGHT } from './consts/sectionHeights';

import { Animated, TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { categoryPhoneLocation } from 'tools/categoryPhoneLocation';
import I18n from 'tools/translate';
import { Sizes } from 'types';
import { Tile } from './components';

import { Styles } from './styles';

interface TilesCategoriesProps {
    categories: Category[];
    setCategoryCallback: any;
    setCategoryFilter: any;
    isInternetReachableState: boolean;
}

export function TilesCategories(props: TilesCategoriesProps) {
    const [isOpen, setIsOpen] = useState(false);
    const currentHeight = useRef(new Animated.Value(CLOSED_SECTION_HEIGHT)).current;

    function onPressHandle() {
        setIsOpen(!isOpen);
        if (isOpen) {
            Animated.timing(currentHeight, {
                toValue: CLOSED_SECTION_HEIGHT,
                duration: 800,
            }).start();
            return;
        }
        Animated.timing(currentHeight, {
            toValue: OPENED_SECTION_HEIGHT(props.categories.length),
            duration: 800,
        }).start();
    }

    const imagesPaths = [
        null,
        require('./../../../../assets/categories/1.png'),
        require('./../../../../assets/categories/2.png'),
        require('./../../../../assets/categories/3.png'),
        require('./../../../../assets/categories/4.png'),
        require('./../../../../assets/categories/5.png'),
        require('./../../../../assets/categories/6.png'),
        require('./../../../../assets/categories/7.png'),
        require('./../../../../assets/categories/8.png'),
        require('./../../../../assets/categories/9.png'),
        require('./../../../../assets/categories/10.png'),
        require('./../../../../assets/categories/11.png'),
        require('./../../../../assets/categories/12.png'),
        require('./../../../../assets/categories/13.png'),
        require('./../../../../assets/categories/14.png'),
        require('./../../../../assets/categories/15.png'),
        require('./../../../../assets/categories/16.png'),
        require('./../../../../assets/categories/17.png'),
        require('./../../../../assets/categories/18.png'),
        require('./../../../../assets/categories/19.png'),
        require('./../../../../assets/categories/20.png'),
        require('./../../../../assets/categories/21.png'),
        require('./../../../../assets/categories/22.png'),
        require('./../../../../assets/categories/23.png'),
        require('./../../../../assets/categories/24.png'),
        require('./../../../../assets/categories/25.png'),
        require('./../../../../assets/categories/26.png'),
        require('./../../../../assets/categories/27.png'),
        require('./../../../../assets/categories/28.png'),
        require('./../../../../assets/categories/29.png'),
    ];
    return (
        <Animated.View style={[Styles.contentContainer, { maxHeight: currentHeight }]}>
            <View style={Styles.titleBox}>
                <View>
                    <Text fontSize={Sizes.Large} isBold={true} translateKey="home.title.allCategories" />
                </View>
                <TouchableOpacity onPress={onPressHandle}>
                    <Text fontSize={Sizes.Small} color="blueAndWhite">
                        {isOpen
                            ? I18n.t('home.buttons.hideAllCategories')
                            : I18n.t('home.buttons.showAllCategories', { count: props.categories.length })}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.categoriesBox}>
                {[...props.categories]
                    .sort(
                        (a, b) =>
                            a[categoryPhoneLocation(props.categories)] - b[categoryPhoneLocation(props.categories)],
                    )
                    .map(category => (
                        <Tile
                            isInternetReachableState={props.isInternetReachableState}
                            setCategoryFilter={props.setCategoryFilter}
                            setCategoryCallback={props.setCategoryCallback}
                            key={category.tkey}
                            category={category}
                            imageUri={imagesPaths[category.id]}
                        />
                    ))}
            </View>
        </Animated.View>
    );
}
