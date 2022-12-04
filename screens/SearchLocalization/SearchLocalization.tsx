import React, { useEffect, useState } from 'react';

import { Keyboard, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { HintPlug, LocalizationSearch } from 'components';

import { Styles } from './styles';

interface SearchLocalizationProps {
    handle: (loc: any) => void;
    currentLocationIsEnabled: boolean;
}

export function SearchLocalization(props: SearchLocalizationProps) {
    const [helpPlugVisible, setHelpPlugVisible] = useState(true);
    async function selectHandle(localization: string) {
        props.handle(localization);
        await Navigation.dismissAllModals();
    }

    useEffect(() => {
        const keyboardWillShow = Keyboard.addListener('keyboardDidShow', openAutocomplete);
        const keyboardWillHide = Keyboard.addListener('keyboardDidHide', closeAutocomplete);
        return function cleanup() {
            keyboardWillShow.remove();
            keyboardWillHide.remove();
        };
    }, []);

    function openAutocomplete() {
        setHelpPlugVisible(false);
    }

    function closeAutocomplete() {
        setHelpPlugVisible(true);
    }

    return (
        <View style={Styles.contentContainer}>
            <LocalizationSearch autoFocus={props.currentLocationIsEnabled} setLocalization={selectHandle} />
            {helpPlugVisible ? (
                <View style={{ height: '90%', alignItems: 'center' }}>
                    <HintPlug tkey="addPost.text.searchLocalizationHint" />
                </View>
            ) : null}
        </View>
    );
}
