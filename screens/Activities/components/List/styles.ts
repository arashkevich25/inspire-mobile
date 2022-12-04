import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: ThemeVariables.BackgroundColor1,
    },
    listContainer: { flex: 1, height: '100%' },
});
