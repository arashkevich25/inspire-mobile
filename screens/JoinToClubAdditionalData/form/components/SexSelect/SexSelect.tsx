import { SexSelectOptions } from '@inspire/types';
import React, { useState } from 'react';

import { Picker } from '@react-native-community/picker';

import { Menu } from 'components/BottomMenu';
import { StylesValue } from 'tools';
import I18n from 'tools/translate';
import { ThemeVariables } from 'types';

import { Styles } from './styles';

interface SexSelectProps {
    selectedValue: SexSelectOptions;
    setSex: (item: SexSelectOptions) => void;
}

export function SexSelect(props: SexSelectProps) {
    const [selectedSex, setSex] = useState(props.selectedValue);
    function selectValue(value: SexSelectOptions) {
        props.setSex(value);
        setSex(value);
    }

    if (!selectedSex) {
        setSex(SexSelectOptions.Female);
        props.setSex(SexSelectOptions.Female);
    }

    return (
        <Menu>
            <Picker style={Styles.contentContainer} selectedValue={selectedSex} onValueChange={selectValue}>
                <Picker.Item
                    color={StylesValue(ThemeVariables.TextColor1)}
                    label={I18n.t('clubDetails.selectOptions.sex.female')}
                    value={SexSelectOptions.Female}
                />
                <Picker.Item
                    color={StylesValue(ThemeVariables.TextColor1)}
                    label={I18n.t('clubDetails.selectOptions.sex.male')}
                    value={SexSelectOptions.Male}
                />
                <Picker.Item
                    color={StylesValue(ThemeVariables.TextColor1)}
                    label={I18n.t('clubDetails.selectOptions.sex.another')}
                    value={SexSelectOptions.Another}
                />
                <Picker.Item
                    color={StylesValue(ThemeVariables.TextColor1)}
                    label={I18n.t('clubDetails.selectOptions.sex.dontSay')}
                    value={SexSelectOptions.DontSay}
                />
            </Picker>
        </Menu>
    );
}
