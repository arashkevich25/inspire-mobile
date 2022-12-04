import { FontSize, TextColor } from './';

import * as ReactNative from 'react-native';

export interface TextProps extends ReactNative.TextProps {
    color?: TextColor;
    fontSize?: FontSize;
}
