import { UserIntroSetupSteps } from './UserIntroSetupSteps';

export type UserIntroSetupStep =
    | UserIntroSetupSteps.SetAvatar
    | UserIntroSetupSteps.SetCategories
    | UserIntroSetupSteps.SetNameAndDescription
    | UserIntroSetupSteps.SetSocialMedia
    | UserIntroSetupSteps.TurnOnLocalization
    | UserIntroSetupSteps.TurnOnMarketingData
    | UserIntroSetupSteps.Thankyou
    | UserIntroSetupSteps.TurnOnNotifications;
