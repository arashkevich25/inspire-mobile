import { UserIntroSetupTypes, UserIntroSetupUnion } from 'app-constants/actionTypes';

import { UserIntroSetupStep, UserIntroSetupSteps } from 'types';

export interface UserIntroSetupState {
    step: UserIntroSetupStep;
    steps: UserIntroSetupStep[];
}

const initialState: UserIntroSetupState = {
    step: UserIntroSetupSteps.SetCategories,
    steps: [],
};
export function userIntroSetupReducer(state: UserIntroSetupState = initialState, action: UserIntroSetupUnion) {
    switch (action.type) {
        case UserIntroSetupTypes.InitSteps: {
            return {
                ...state,
                steps: action.steps,
                step: action.steps[0],
            };
        }

        case UserIntroSetupTypes.NextStep: {
            return {
                ...state,
                step: state.steps[state.steps.lastIndexOf(state.step) + 1],
            };
        }

        case UserIntroSetupTypes.PrevStep: {
            return {
                ...state,
                step: state.steps[state.steps.lastIndexOf(state.step) - 1],
            };
        }

        default:
            return state;
    }
}
