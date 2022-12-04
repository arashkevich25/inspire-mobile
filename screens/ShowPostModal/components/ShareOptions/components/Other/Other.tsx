import React from 'react';

import { Platform, TouchableOpacity, View } from 'react-native';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text } from 'components';
import { generatePostUrl, StylesValue } from 'tools';
import { Sizes, ThemeVariables } from 'types';

import { Styles } from '../../styles';

interface OtherProps {
    title: string;
    message: string;
    postId: string;
}

export function Other(props: OtherProps) {
    async function shareHandle() {
        const { link } = await generatePostUrl(props.postId);
        const options: any = Platform.select({
            ios: {
                activityItemSources: [
                    {
                        placeholderItem: { type: 'text', content: props.title },
                        item: {
                            default: {
                                type: 'text',
                                content: `${props.title} \n\n ${props.message} \n\n ${link}`,
                            },
                            message: link,
                        },
                        linkMetadata: {
                            title: props.title,
                        },
                    },
                ],
            },
            default: {
                title: props.title,
                subject: props.title,
                message: `${props.title} \n\n ${props.message} \n\n ${link}`,
            },
        });
        await Share.open(options);
    }

    return (
        <TouchableOpacity style={Styles.itemBox} onPress={shareHandle}>
            <View style={[Styles.borderedBox, Styles.textMargin]}>
                <Icon name="ellipsis-h" size={20} color={StylesValue(ThemeVariables.Black)} />
            </View>
            <Text fontSize={Sizes.Small}>More</Text>
        </TouchableOpacity>
    );
}
