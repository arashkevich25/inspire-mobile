import { StatutesList } from 'navigation';
import React from 'react';

import { Navigation } from 'react-native-navigation';

import { Button, ButtonTypes } from 'components';
import I18n from 'tools/translate';
import { NavProps } from 'types';

interface JoinButtonProps extends NavProps {
    competitionId: number;
    joinHandle: () => void;
}
let MODAL_ID: string;
export function JoinButton(props: JoinButtonProps) {
    async function joinToCompetitionHandle() {
        MODAL_ID = await Navigation.showModal({
            component: StatutesList(
                joinPressHandle,
                I18n.t('competitionDetails.buttons.begin'),
                0,
                props.competitionId,
            ),
        });
    }

    async function joinPressHandle() {
        props.joinHandle();
        await Navigation.dismissModal(MODAL_ID);
    }

    return (
        <Button
            type={ButtonTypes.Filled}
            onPress={joinToCompetitionHandle}
            translateKey="competitionDetails.buttons.completeIn"
        />
    );
}
