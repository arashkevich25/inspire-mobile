import EStyleSheet from 'react-native-extended-stylesheet';

import { winHeight } from 'tools';

export const Styles = EStyleSheet.create({
    contentContainer: { position: 'absolute', left: 0, right: 0, top: winHeight - 120, zIndex: 11 },
    text: { textAlign: 'center' },
});
