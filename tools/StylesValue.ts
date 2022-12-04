import { ThemeOptions } from 'app-constants/ThemeOptions';

import EStyleSheet from 'react-native-extended-stylesheet';

import { darkTheme, lightTheme } from 'configs/themes';
import { ActiveTheme } from 'models';
import { ThemeVariables } from 'types';

export const StylesValue = (key: ThemeVariables) => {
    EStyleSheet.build(ActiveTheme.theme === ThemeOptions.Light ? lightTheme : darkTheme);
    return EStyleSheet.value(key);
};
