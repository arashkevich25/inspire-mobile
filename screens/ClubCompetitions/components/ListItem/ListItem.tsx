import { Competition } from '@inspire/types';
import React from 'react';

import { View } from 'react-native';

import { Button, Image, Text } from 'components';
import { ButtonTypes } from 'components/Button/types/ButtonTypes';
import { Sizes } from 'types';

import { Styles } from './styles';

interface ListItemProps {
    competition: Competition;
    openDetails: (competitionDetails: number) => void;
}

export function ListItem(props: ListItemProps) {
    function onPressHandle() {
        props.openDetails(props.competition.id);
    }
    const logo = props.competition.media[0];

    return (
        <View style={Styles.contentContainer}>
            {logo ? (
                <View style={Styles.logoBox}>
                    <Image width={150} uri={{ uri: logo.uri }} />
                </View>
            ) : null}
            <View style={Styles.descriptionBox}>
                <View>
                    <Text style={Styles.nameText}>{props.competition.name}</Text>
                </View>
                <View>
                    <Text
                        color="gray"
                        fontSize={Sizes.Small}
                        numberOfLines={3}
                        selectable={false}
                        isItalic={true}
                        style={Styles.descriptionText}>
                        {props.competition.description}
                    </Text>
                </View>
                <View style={Styles.buttonBox}>
                    <Button
                        color="blue"
                        size="small"
                        type={ButtonTypes.Link}
                        onPress={onPressHandle}
                        translateKey="buttons.more"
                    />
                </View>
            </View>
            <View style={Styles.divideLine} />
        </View>
    );
}
