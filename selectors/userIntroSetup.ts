import { AppState } from 'reducers';
import { UserIntroSetupStep } from 'types';

function userIntroSetupState(state: AppState) {
    return state.userIntroSetup;
}

export function getUserIntroSetupProgress(state: AppState): number {
    return userIntroSetupState(state).progress;
}

export function getUserIntroSetupSteps(state: AppState): UserIntroSetupStep[] {
    return userIntroSetupState(state).steps;
}

export function getUserIntroSetupStep(state: AppState): UserIntroSetupStep {
    return userIntroSetupState(state).step;
}
