import { AppState } from 'reducers';
import { ResetPasswordState } from 'reducers/resetPassword';

function resetPasswordState(state: AppState): ResetPasswordState {
    return state.resetPassword;
}

export function resetPasswordPending(state: AppState): boolean {
    return resetPasswordState(state).resetPasswordPending;
}
