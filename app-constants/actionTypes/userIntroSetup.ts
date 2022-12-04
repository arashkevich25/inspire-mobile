import { UserIntroSetupStep } from 'types';

export enum UserIntroSetupTypes {
    InitSteps = '[User Intro Setup] init steps',
    NextStep = '[User Intro Setup] next step',
    PrevStep = '[User Intro Setup] prev step',
    UpdateProgress = '[User Intro Setup] update progress',
}

interface InitSteps {
    type: typeof UserIntroSetupTypes.InitSteps;
    steps: UserIntroSetupStep[];
}

interface NextStep {
    type: typeof UserIntroSetupTypes.NextStep;
}

interface PrevStep {
    type: typeof UserIntroSetupTypes.PrevStep;
}

export type UserIntroSetupUnion = InitSteps | NextStep | PrevStep;
