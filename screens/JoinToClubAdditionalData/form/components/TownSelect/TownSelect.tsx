import React, { useEffect, useState } from 'react';

import { Picker } from '@react-native-community/picker';
import { ActivityIndicator, Keyboard, View } from 'react-native';

import { Menu } from 'components/BottomMenu';
import { SearchInput } from 'components/SearchInput';
import { useGeolocation } from 'hooks';
import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface TownSelectProps {
    setTown: (id: number, townName: string) => void;
    selectedValue: number;
}

export function TownSelect(props: TownSelectProps) {
    const [selectedTown, setSelectedTown] = useState(props.selectedValue);
    const { towns, searchTown, hasSearched, setHasSearched } = useGeolocation();
    const [searchBarHeight, setSearchBarHeight] = useState(40);
    const [searchQuery, setSearchQuery] = useState('');

    function searchByQuery(value: string) {
        setSearchQuery(value);
        searchTown(value);
    }

    function selectValue(value: number, itemIndex: number) {
        props.setTown(value, towns[itemIndex].name);
        setSelectedTown(value);
        setHasSearched(false);
    }

    if (towns.length === 1 && selectedTown !== towns[0].id) {
        props.setTown(towns[0].id, towns[0].name);
        setSelectedTown(towns[0].id);
    }

    if (hasSearched && towns.length > 1 && selectedTown !== towns[0].id) {
        props.setTown(towns[0].id, towns[0].name);
        setSelectedTown(towns[0].id);
    }

    function searchAll() {
        searchTown('');
        setSearchQuery('');
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event: any) => {
            setSearchBarHeight(event.endCoordinates.height - 130);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setSearchBarHeight(40);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    if (!selectedTown && towns.length) {
        props.setTown(towns[0].id, towns[0].name);
        setSelectedTown(towns[0].id);
    }

    return (
        <Menu>
            <>
                <View style={{ height: searchBarHeight }}>
                    <SearchInput
                        value={searchQuery}
                        changeValue={searchByQuery}
                        placeholder={I18n.t('clubDetails.fields.searchPlaceholder')}
                        clearHandle={searchAll}
                    />
                </View>
                {towns.length ? (
                    <Picker style={[Styles.basicHeight]} selectedValue={selectedTown} onValueChange={selectValue}>
                        {towns.map(town => (
                            <Picker.Item
                                key={town.id}
                                color={StylesValue(ThemeVariables.TextColor1)}
                                label={town.name}
                                value={town.id}
                            />
                        ))}
                    </Picker>
                ) : (
                    <View style={[Styles.basicHeight, Styles.indicatorBox]}>
                        <ActivityIndicator size="small" color={StylesValue(ThemeVariables.TextColor1)} />
                    </View>
                )}
            </>
        </Menu>
    );
}
