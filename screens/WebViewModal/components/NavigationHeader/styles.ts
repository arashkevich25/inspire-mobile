import EStyleSheet from 'react-native-extended-stylesheet';

import { winWidth } from 'tools';

export const Styles = EStyleSheet.create({
    contentContainer: { width: '100%', alignContent: 'center' },
    text: { textAlign: 'center' },
    textContainer: { width: '100%', alignItems: 'center' },
    textBox: { width: winWidth / 2 },
});
