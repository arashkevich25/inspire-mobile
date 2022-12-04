import { isIphone } from 'app-constants';
import { ComponentId } from 'navigation/constants/componentId';
import React from 'react';

import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Navigation } from 'react-native-navigation';

import { useUserIntroSetup } from 'hooks';
import { StylesValue } from 'tools';
import { ThemeVariables, UserIntroSetupSteps } from 'types';
import {
    SetSocialMedia,
    SetUserCategories,
    Thankyou,
    TurnOnLocation,
    TurnOnMarketingData,
    TurnOnNotifications,
    UserAvatar,
    UserNameAndDescription,
} from './components';

import { Styles } from './styles';

export function UserIntroSetup() {
    const { currentStep, isClubMember, progress, steps, nextStep, prevStep } = useUserIntroSetup();

    function nextStepHandle() {
        if (currentStep === steps[steps.length - 1]) {
            isIphone
                ? Navigation.dismissModal(ComponentId.AppUserIntroSetup)
                : Navigation.dismissOverlay(ComponentId.AppUserIntroSetup);
            return;
        }
        nextStep();
    }

    function renderStep() {
        switch (currentStep) {
            case UserIntroSetupSteps.SetAvatar: {
                return (
                    <UserAvatar
                        nextStep={nextStepHandle}
                        progress={progress}
                        step={currentStep}
                        steps={steps}
                        prevStep={prevStep}
                        isClubMember={isClubMember}
                    />
                );
            }

            case UserIntroSetupSteps.SetNameAndDescription: {
                return (
                    <UserNameAndDescription
                        nextStep={nextStepHandle}
                        step={currentStep}
                        steps={steps}
                        progress={progress}
                        prevStep={prevStep}
                    />
                );
            }

            case UserIntroSetupSteps.SetCategories: {
                return (
                    <SetUserCategories
                        prevStep={prevStep}
                        step={currentStep}
                        steps={steps}
                        nextStep={nextStepHandle}
                        progress={progress}
                    />
                );
            }

            case UserIntroSetupSteps.SetSocialMedia: {
                return (
                    <SetSocialMedia
                        step={currentStep}
                        steps={steps}
                        isClubMember={isClubMember}
                        nextStep={nextStepHandle}
                        progress={progress}
                        prevStep={prevStep}
                    />
                );
            }

            case UserIntroSetupSteps.TurnOnLocalization: {
                return (
                    <TurnOnLocation
                        prevStep={prevStep}
                        step={currentStep}
                        steps={steps}
                        nextStep={nextStepHandle}
                        progress={progress}
                    />
                );
            }

            case UserIntroSetupSteps.TurnOnNotifications: {
                return (
                    <TurnOnNotifications
                        prevStep={prevStep}
                        step={currentStep}
                        steps={steps}
                        nextStep={nextStepHandle}
                        progress={progress}
                    />
                );
            }

            case UserIntroSetupSteps.TurnOnMarketingData: {
                return (
                    <TurnOnMarketingData
                        prevStep={prevStep}
                        step={currentStep}
                        steps={steps}
                        nextStep={nextStepHandle}
                        progress={progress}
                    />
                );
            }

            case UserIntroSetupSteps.Thankyou: {
                return <Thankyou closeHandle={nextStepHandle} />;
            }

            default:
                return <View />;
        }
    }

    return (
        <LinearGradient
            colors={[StylesValue(ThemeVariables.BlackAndWhite), StylesValue(ThemeVariables.LightBlueAndBlack)]}
            style={Styles.gradientBox}>
            {renderStep()}
        </LinearGradient>
    );
}
