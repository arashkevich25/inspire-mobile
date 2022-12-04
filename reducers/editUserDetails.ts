import { EditUserActionTypes, EditUserDetailsUnion } from 'app-constants/actionTypes';

export interface EditUserDetailsState {
    updateUserDetailsIsPending: boolean;
}

const initialState: EditUserDetailsState = {
    updateUserDetailsIsPending: false,
};

export function editUserDetailsReducer(
    state: EditUserDetailsState = initialState,
    action: EditUserDetailsUnion,
): EditUserDetailsState {
    switch (action.type) {
        case EditUserActionTypes.UpdateUserDetails: {
            return {
                ...state,
                updateUserDetailsIsPending: true,
            };
        }

        case EditUserActionTypes.UpdateUserDetailsFailure:
        case EditUserActionTypes.UpdateUserDetailsSuccess: {
            return {
                ...state,
                updateUserDetailsIsPending: false,
            };
        }

        default:
            return state;
    }
}
