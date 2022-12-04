import React from 'react';

import { Linking } from 'react-native';
import ParsedText from 'react-native-parsed-text';

import { Styles } from './styles';

interface TextParserProps {
    children: JSX.Element | string;
    renderHash?: (matchingString: string, matches: string[]) => string;
    pressHash?: (tag: string) => void;
    testID?: string;
}

export function TextParser(props: TextParserProps) {
    function openUrl(url: string) {
        if (!url.includes('http')) {
            url = 'http://' + url;
        }
        Linking.openURL(url);
    }

    function openPhone(phone: string) {
        Linking.openURL(`tel:${phone}`);
    }

    function openEmail(email: string) {
        Linking.openURL(`mailto:${email}`);
    }

    function openUser(uniqUserName: string) {
        console.log('uniqUserName', uniqUserName);
    }

    function openHash(hash: string) {
        if (props.pressHash) {
            props.pressHash(hash);
        }
    }

    return (
        <ParsedText
            testID={props.testID}
            parse={[
                { type: 'url', style: Styles.activeColor, onPress: openUrl },
                { type: 'phone', style: Styles.activeColor, onPress: openPhone },
                { type: 'email', style: Styles.activeColor, onPress: openEmail },
                {
                    pattern: /@(\w+)/,
                    style: Styles.activeColor,
                    onPress: openUser,
                },
                {
                    pattern: /#[\wа-яёА-ЯЁąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+[\w-]*/,
                    style: Styles.activeColor,
                    onPress: openHash,
                    renderText: props.renderHash,
                },
            ]}
            childrenProps={{ allowFontScaling: false }}>
            {props.children}
        </ParsedText>
    );
}
