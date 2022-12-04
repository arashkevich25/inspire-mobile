import { InitAppActions, InitAppUnion } from 'app-constants/actionTypes';

export interface InitAppState {
    initPending: boolean;
    initError: string;
    initSuccess: boolean;
}

const initialState: InitAppState = {
    initError: '',
    initPending: false,
    initSuccess: false,
};

export function initReducer(state: InitAppState = initialState, action: InitAppUnion): InitAppState {
    switch (action.type) {
        case InitAppActions.InitApp: {
            return {
                ...state,
                initPending: true,
            };
        }

        case InitAppActions.InitAppFailed: {
            return {
                ...state,
                initError: action.error,
                initPending: false,
                initSuccess: false,
            };
        }

        case InitAppActions.InitAppSuccess: {
            return {
                ...state,
                initSuccess: true,
                initPending: false,
            };
        }

        default:
            return state;
    }
}
