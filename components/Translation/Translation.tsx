import React from 'react';

import { Text } from 'components/Text';
import I18n from 'tools/translate';

interface TranslationProps {
    translateKey: string;
}

interface TranslationState {}

export class Translation extends React.PureComponent<TranslationProps, TranslationState> {
    public render(): React.ReactElement<TranslationProps> {
        const { translateKey } = this.props;
        return <Text color="color1">{I18n.t(translateKey)}</Text>;
    }
}
