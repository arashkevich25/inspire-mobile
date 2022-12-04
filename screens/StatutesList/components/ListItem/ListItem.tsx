import { StatuteWithApproveStatus } from '@inspire/types';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Image, Text } from 'components';
import { StylesValue } from 'tools/StylesValue';
import { ThemeVariables } from 'types';
import { Sizes } from 'types/Sizes';

import { Styles } from './styles';

interface ListItemProps {
    statute: StatuteWithApproveStatus;
    openDetails: (statuteId: number) => void;
}

export function ListItem(props: ListItemProps) {
    function openDetailsHandle() {
        props.openDetails(props.statute.id);
    }
    return (
        <TouchableOpacity onPress={openDetailsHandle} style={Styles.contentContainer}>
            <View style={Styles.contentBox}>
                <View>
                    <Image
                        tintColor={props.statute.approvedByMe ? 'gray' : StylesValue(ThemeVariables.Color1)}
                        width={50}
                        height={50}
                        uri={require('./assets/statute.png')}
                    />
                </View>
                <View style={Styles.textBox}>
                    <Text
                        numberOfLines={1}
                        color={props.statute.approvedByMe ? 'gray' : 'color1'}
                        fontSize={Sizes.Large}
                        isBold={true}>
                        {props.statute.title}
                    </Text>
                    <Text
                        color="gray"
                        fontSize={Sizes.Small}
                        isItalic={true}
                        translateKey={
                            props.statute.approvedByMe ? 'statute.text.wasApproved' : 'statute.text.pressToApprove'
                        }
                    />
                </View>
            </View>
            {props.statute.approvedByMe ? (
                <View style={Styles.imageBox}>
                    <Image tintColor="green" width={25} height={25} uri={require('./assets/approval.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    );
}
