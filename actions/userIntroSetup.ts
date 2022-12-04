import { UserIntroSetupTypes } from 'app-constants/actionTypes';

import { UserIntroSetupStep } from 'types';

export function initUserIntroSetupSteps(steps: UserIntroSetupStep[]) {
    return {
        type: UserIntroSetupTypes.InitSteps,
        steps,
    };
}

export function nextStepUserIntroSetup() {
    return {
        type: UserIntroSetupTypes.NextStep,
    };
}

export function prevStepUserIntroSetup() {
    return {
        type: UserIntroSetupTypes.PrevStep,
    };
}
