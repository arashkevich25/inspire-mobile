import { ClubMemberState } from '@inspire/types';
import { SSETypes } from '@inspire/types/build/main/lib/enums/sse-types.enum';
import { ClubActions, ProfileActionTypes } from 'app-constants/actionTypes';

import EventSource from 'react-native-sse';
import Toast from 'react-native-toast-message';

import { initUserDetails } from 'actions';
import { SocietyConfig } from 'configs/config';
import I18n from 'tools/translate';

const eventSource = new EventSource(SocietyConfig.sse);
export function sseListener(dispatch: any, rootUserId: number) {
    eventSource.addEventListener('message', (event: any) => {
        const parsed: any = JSON.parse(event.data);

        if (rootUserId !== parsed.id) {
            return;
        }

        switch (parsed.type) {
            case SSETypes.UpdateUserAwards: {
                dispatch({
                    type: ProfileActionTypes.UpdateUserCompletedCompetition,
                    completedCompetition: parsed.body,
                    userId: parsed.id,
                });
                break;
            }
            case SSETypes.UpdateClubDetails: {
                if (parsed.body.clubMemberState === ClubMemberState.ClubMember) {
                    Toast.show({
                        text1: I18n.t('notifications.joinedToClubTitle'),
                        text2: I18n.t('notifications.joinedToClubBody', { name: parsed.body.name }),
                        type: 'success',
                    });
                }
                dispatch({
                    type: ClubActions.GetClubSuccess,
                    club: parsed.body,
                    clubId: parsed.body.id,
                });
                dispatch(initUserDetails(rootUserId));
                break;
            }
            default:
                break;
        }
    });
}
