import { ResetPasswordActions, ResetPasswordUnion } from 'app-constants/actionTypes';

export interface ResetPasswordState {
    resetPasswordPending: boolean;
}

const initialState: ResetPasswordState = {
    resetPasswordPending: false,
};

export function resetPasswordReducer(
    state: ResetPasswordState = initialState,
    action: ResetPasswordUnion,
): ResetPasswordState {
    switch (action.type) {
        case ResetPasswordActions.ResetPassword: {
            return {
                ...state,
                resetPasswordPending: true,
            };
        }

        case ResetPasswordActions.ResetPasswordSuccess: {
            return {
                ...state,
                resetPasswordPending: false,
            };
        }

        case ResetPasswordActions.ResetPasswordFailed: {
            return {
                ...state,
                resetPasswordPending: false,
            };
        }

        default:
            return state;
    }
}
