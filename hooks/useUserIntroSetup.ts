import { FollowerRelation, User, UserKinds } from '@inspire/types';
import { isIphone, StorageKeys } from 'app-constants';
import { UserIntroSetup } from 'navigation';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigation } from 'react-native-navigation';
import { checkNotifications } from 'react-native-permissions';

import { initUserIntroSetupSteps, nextStepUserIntroSetup, prevStepUserIntroSetup } from 'actions';
import { useRootUserData, useUserCategories } from 'hooks';
import { AppState } from 'reducers';
import { getUserIntroSetupProgress, getUserIntroSetupStep, getUserIntroSetupSteps, userDetailsState } from 'selectors';
import { getItemFromStorage, setItemToStorage, setOnesignalUserId } from 'tools';
import { UserIntroSetupStep, UserIntroSetupSteps } from 'types';
import { userContactData } from '../selectors/profile';

type UseUserIntroSetupOutput = {
    rootUserDetails: Partial<User & { followerRelation: FollowerRelation[] }>;
    init: () => Promise<void>;
    steps: UserIntroSetupStep[];
    progress: number;
    currentStep: UserIntroSetupStep;
    isClubMember: boolean;
    nextStep: () => void;
    prevStep: () => void;
    openSelectCategories: () => void;
    hasInit: boolean;
};

export function useUserIntroSetup(): UseUserIntroSetupOutput {
    const [rootUserId] = useRootUserData();
    const { userCategories } = useUserCategories();
    const rootUserDetails = useSelector((state: AppState) => userDetailsState(state, rootUserId));
    const contactData = useSelector((state: AppState) => userContactData(state, rootUserId));
    const steps = useSelector((state: AppState) => getUserIntroSetupSteps(state));
    const progress = useSelector((state: AppState) => getUserIntroSetupProgress(state));
    const currentStep = useSelector((state: AppState) => getUserIntroSetupStep(state));
    const isClubMember = rootUserDetails.kind === UserKinds.ClubMember;
    const hasInit = useRef<boolean>(false);
    const dispatch = useDispatch();

    async function init() {
        if (steps.length || progress >= 100) {
            return;
        }
        const nextSteps = [];
        const { name, avatar, kind } = rootUserDetails;
        const { instagram, facebook, web, phone, email } = contactData;

        const notificationHasAsked = await getItemFromStorage(StorageKeys.NotificationPermissionHasAsked);
        const trackingStatusAsked = await getItemFromStorage(StorageKeys.TrackingStatus);
        const permissionNotification = await checkNotifications();

        if (notificationHasAsked !== 'true' && permissionNotification.status !== 'granted') {
            nextSteps.push(UserIntroSetupSteps.TurnOnNotifications);
        } else {
            setOnesignalUserId();
        }

        if (!trackingStatusAsked && isIphone) {
            nextSteps.push(UserIntroSetupSteps.TurnOnMarketingData);
        }

        if (!name) {
            nextSteps.push(UserIntroSetupSteps.SetNameAndDescription);
        }

        if (!avatar) {
            nextSteps.push(UserIntroSetupSteps.SetAvatar);
        }

        const socialMediaHasAsked = await getItemFromStorage(StorageKeys.SocialMediaHasAsked);
        if (
            ((kind === UserKinds.ClubMember && (!web || !facebook || !instagram || !phone || !email)) ||
                (kind === UserKinds.Basic && (!facebook || !instagram))) &&
            socialMediaHasAsked !== 'true'
        ) {
            nextSteps.push(UserIntroSetupSteps.SetSocialMedia);
            setItemToStorage(StorageKeys.SocialMediaHasAsked, 'true');
        }

        if (!userCategories.length) {
            nextSteps.push(UserIntroSetupSteps.SetCategories);
        }

        if (nextSteps.length > 3) {
            nextSteps.push(UserIntroSetupSteps.Thankyou);
        }

        dispatch(initUserIntroSetupSteps(nextSteps));
        hasInit.current = true;

        if (nextSteps.length) {
            isIphone
                ? await Navigation.showModal({ component: UserIntroSetup })
                : await Navigation.showOverlay({ component: UserIntroSetup });
        }
    }

    async function openSelectCategories() {
        dispatch(initUserIntroSetupSteps([UserIntroSetupSteps.SetCategories]));
        isIphone
            ? await Navigation.showModal({ component: UserIntroSetup })
            : await Navigation.showOverlay({ component: UserIntroSetup });
    }

    function nextStep() {
        dispatch(nextStepUserIntroSetup());
    }

    function prevStep() {
        dispatch(prevStepUserIntroSetup());
    }

    return {
        init,
        rootUserDetails,
        steps,
        progress,
        currentStep,
        isClubMember,
        nextStep,
        prevStep,
        openSelectCategories,
        hasInit: hasInit.current,
    };
}
