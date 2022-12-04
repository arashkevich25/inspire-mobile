import { Category } from '@inspire/types';
import React, { useEffect, useRef } from 'react';

import { findNodeHandle, ScrollView, TouchableOpacity } from 'react-native';

import { categoryPhoneLocation } from 'tools/categoryPhoneLocation';
import { FilterButton } from './components/FilterButton/FilterButton';

interface FilterPanelProps {
    fetchedCategories: Category[];
    categoriesFetched: boolean;
    setFilter: (id: number) => void;
    selectedCategories: number;
    selectedMap: string;
}

export function Filters(props: FilterPanelProps) {
    const scrollViewRef = useRef<ScrollView>(null);
    const filterViewRef = useRef<TouchableOpacity>();

    useEffect(() => {
        if (scrollViewRef.current && props.selectedCategories && filterViewRef.current) {
            filterViewRef.current.measureLayout(
                // @ts-ignore
                findNodeHandle(scrollViewRef.current),
                // @ts-ignore
                (x: number, y: number) => scrollViewRef.current.scrollTo({ x: x - 120, y, animated: true }),
                null,
            );
        }
    }, [props.selectedCategories, props.selectedMap]);

    function renderButtons() {
        return [...props.fetchedCategories]
            .sort(
                (a, b) =>
                    a[categoryPhoneLocation(props.fetchedCategories)] -
                    b[categoryPhoneLocation(props.fetchedCategories)],
            )
            .map(filter => (
                <FilterButton
                    ref={props.selectedCategories === filter.id ? filterViewRef : null}
                    key={filter.id}
                    id={filter.id}
                    isActive={props.selectedCategories === filter.id}
                    pressHandle={props.setFilter}
                    title={filter.tkey}
                />
            ));
    }
    return (
        <ScrollView ref={scrollViewRef} horizontal={true} showsHorizontalScrollIndicator={false}>
            {props.categoriesFetched ? renderButtons() : null}
        </ScrollView>
    );
}
