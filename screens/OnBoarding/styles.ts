import EStyleSheet from 'react-native-extended-stylesheet';

import { ThemeVariables } from 'types';

export const Styles = EStyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    tintColor: {
        tintColor: ThemeVariables.HighlightColor1,
    },
    smallImage: {
        width: 50,
        height: 200,
    },
});
