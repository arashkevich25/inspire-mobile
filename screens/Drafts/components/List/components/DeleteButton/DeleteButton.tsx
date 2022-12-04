import { Draft } from '@inspire/types';
import React from 'react';

import { Alert, TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { useDrafts } from 'hooks';
import I18n from 'tools/translate';

import { Styles } from './styles';

interface DeleteButtonProps {
    item: Draft;
    refreshData: () => void;
}

export function DeleteButton(props: DeleteButtonProps) {
    const { removeDraft } = useDrafts();

    function removeHandle() {
        Alert.alert(I18n.t('drafts.dialog.title'), I18n.t('drafts.dialog.description'), [
            {
                text: I18n.t('drafts.dialog.buttons.cancel'),
                style: 'cancel',
            },
            {
                text: I18n.t('drafts.dialog.buttons.remove'),
                onPress: async () => {
                    await removeDraft(props.item.id);
                    props.refreshData();
                },
            },
        ]);
    }

    return (
        <View style={Styles.contentContainer}>
            <TouchableOpacity onPress={removeHandle} style={Styles.deleteButton}>
                <View style={Styles.buttonBox}>
                    <Text translateKey="drafts.buttons.deleteHiddenButton" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
