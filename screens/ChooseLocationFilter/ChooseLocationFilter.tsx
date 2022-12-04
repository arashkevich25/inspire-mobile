import React from 'react';

import { SafeAreaView } from 'react-native';

import { Maps } from './components/Maps';

import { Styles } from './styles';

interface ChooseLocationFilterProps {
    clbk: (town: string) => void;
}

export function ChooseLocationFilter(props: ChooseLocationFilterProps) {
    return (
        <SafeAreaView style={Styles.contentContainer}>
            <Maps clbk={props.clbk} />
        </SafeAreaView>
    );
}
