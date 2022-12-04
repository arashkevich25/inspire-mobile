import { AppState } from 'reducers';
import { EditUserDetailsState } from 'reducers/editUserDetails';

function getEditUserDetailsState(state: AppState): EditUserDetailsState {
    return state.editUserDetails;
}

export function getUpdateUserDetailsStatus(state: AppState): boolean {
    return getEditUserDetailsState(state).updateUserDetailsIsPending;
}
