import { AuthenticatedActionTypes, AuthenticatedUnion } from 'app-constants/actionTypes';

interface AuthenticatedState {
    authenticatedPending: boolean;
    setNewPasswordPending: boolean;
    isAuthenticated: boolean;
    userId: number;
    email: string;
}
const initialState: AuthenticatedState = {
    isAuthenticated: false,
    authenticatedPending: false,
    setNewPasswordPending: false,
    userId: 0,
    email: '',
};

export function authenticatedReducer(
    state: AuthenticatedState = initialState,
    action: AuthenticatedUnion,
): AuthenticatedState {
    switch (action.type) {
        case AuthenticatedActionTypes.Authenticated: {
            return {
                ...state,
                authenticatedPending: true,
            };
        }

        case AuthenticatedActionTypes.AuthenticatedSetNewPassword: {
            return {
                ...state,
                setNewPasswordPending: true,
            };
        }

        case AuthenticatedActionTypes.AuthenticatedSetNewPasswordSuccess:
        case AuthenticatedActionTypes.AuthenticatedSetNewPasswordFailed: {
            return {
                ...state,
                setNewPasswordPending: false,
            };
        }

        case AuthenticatedActionTypes.AuthenticatedSuccess: {
            return {
                ...state,
                isAuthenticated: true,
                authenticatedPending: false,
                userId: action.userId,
            };
        }

        case AuthenticatedActionTypes.AuthenticatedLogout:
        case AuthenticatedActionTypes.AuthenticatedFailed: {
            return {
                ...state,
                isAuthenticated: false,
                authenticatedPending: false,
            };
        }

        case AuthenticatedActionTypes.SetUserId: {
            return {
                ...state,
                userId: action.userId,
            };
        }

        default:
            return state;
    }
}
