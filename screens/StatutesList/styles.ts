import { isIphone } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

export const Styles = EStyleSheet.create({
    contentContainer: { height: '100%', marginTop: isIphone ? 0 : 20 },
    listBox: { paddingTop: isIphone ? 20 : 0 },
    buttonBox: { alignItems: 'center', marginBottom: 40 },
});
