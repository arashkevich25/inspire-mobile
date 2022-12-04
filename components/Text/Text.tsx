import React from 'react';
import { TextProps } from './types';

import { Text as DefaultText } from 'react-native';

import I18n from 'tools/translate';
import { Sizes } from 'types';

import { Styles } from './styles';

interface TextComponentProps extends TextProps {
    children?: React.ReactNode;
    translateKey?: string;
    translateVariables?: any;
    isBold?: boolean;
    isItalic?: boolean;
}

export function Text(props: TextComponentProps) {
    const { children, fontSize, color, translateKey, isBold, ...restProps } = props;

    if (translateKey) {
        return (
            <DefaultText
                selectable={true}
                allowFontScaling={false}
                {...restProps}
                style={[
                    Styles.contentContainer,
                    isBold ? Styles.bold : null,
                    props.isItalic ? Styles.italic : null,
                    Styles[color || 'color1'],
                    Styles[fontSize || Sizes.Small],
                    restProps.style,
                ]}>
                {I18n.t(translateKey, props.translateVariables)}
            </DefaultText>
        );
    }

    return (
        <DefaultText
            selectable={true}
            allowFontScaling={false}
            {...restProps}
            style={[
                Styles.contentContainer,
                isBold ? Styles.bold : null,
                props.isItalic ? Styles.italic : null,
                Styles[props.color || 'color1'],
                Styles[props.fontSize || Sizes.Small],
                restProps.style,
            ]}>
            {children}
        </DefaultText>
    );
}
