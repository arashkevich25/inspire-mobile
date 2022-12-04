import { isIphone } from 'app-constants';

import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    contentContainer: {
        backgroundColor: ThemeVariables.BackgroundColor4,
        height: 30,
        marginTop: 0,
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 0,
        paddingTop: isIphone ? 5 : 3,
        paddingBottom: isIphone ? 5 : 3,
        paddingLeft: 10,
        paddingRight: 10,
    },
    selected: {
        borderWidth: 1,
        borderColor: ThemeVariables.HighlightColor1,
        backgroundColor: ThemeVariables.HighlightColor2,
        borderRadius: 8,
    },
    unselected: {
        borderWidth: 1,
        borderColor: ThemeVariables.BorderColor1,
        borderRadius: 8,
    },
});
