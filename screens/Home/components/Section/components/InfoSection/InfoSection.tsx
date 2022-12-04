import { TextPage } from 'navigation';
import React from 'react';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Button, ButtonTypes, Text } from 'components';
import { HomeTemplateSectionStateItem } from 'reducers/homeTemplate';
import { deviceLocation } from 'tools';
import { Sizes } from 'types';

import { Styles } from '../../styles';

interface InfoSectionProps {
    item: HomeTemplateSectionStateItem;
}

export function InfoSection(props: InfoSectionProps) {
    const { body, data } = props.item as any;

    async function showMoreHandle() {
        await Navigation.showModal({
            stack: {
                children: [
                    {
                        component: TextPage(body.title[deviceLocation], data[deviceLocation], true),
                    },
                ],
            },
        });
    }

    return (
        <View style={Styles.sectionContainer}>
            <Text style={Styles.sectionTitle}>{body.title[deviceLocation]}</Text>
            <View style={Styles.textBox}>
                <Text style={Styles.text} numberOfLines={3}>
                    {body.helpText[deviceLocation]}
                </Text>
                <Button color="blue" size={Sizes.Small} onPress={showMoreHandle} type={ButtonTypes.Link}>
                    {body.buttons.readMore[deviceLocation]}
                </Button>
            </View>
        </View>
    );
}
