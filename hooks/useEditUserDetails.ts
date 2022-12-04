import { User, UserContactData } from '@inspire/types';
import { EditUserActionTypes } from 'app-constants/actionTypes';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateEditedUserDetails } from 'actions';
import { AppState } from 'reducers';
import { getNewAvatar, getUpdateUserDetailsStatus, getUserId, userDetailsState } from 'selectors';
import { s3Uploader } from 'tools/s3Uploader';
import { updateUserContactData } from '../actions/editUserDetails';
import { userContactData } from '../selectors/profile';

type UseEditUserDetailsOutput = {
    selectedAvatar: string | null;
    updateUserDetailsIsPending: boolean;
    submitNewDetails: (value?: Partial<User>) => void;
    submitContactData: (value: UserContactData) => void;
    profileData: Partial<User>;
    userId: number;
    contactData: UserContactData;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function useEditUserDetails(clbk = () => {}): UseEditUserDetailsOutput {
    const userId = useSelector((state: AppState) => getUserId(state));
    const profileData = useSelector((state: AppState) => userDetailsState(state, userId));
    const selectedAvatar = useSelector((state: AppState) => getNewAvatar(state));
    const contactData = useSelector((state: AppState) => userContactData(state, userId));
    const updateUserDetailsIsPending = useSelector((state: AppState) => getUpdateUserDetailsStatus(state));
    const dispatch = useDispatch();

    useMemo(async () => {
        if (selectedAvatar) {
            const { postResponse } = await s3Uploader(
                {
                    uri: selectedAvatar,
                },
                [991],
                // TODO to remove
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                () => {},
            );
            dispatch(updateEditedUserDetails({ ...profileData, avatar: postResponse.location }, contactData));
            return;
        }
    }, [selectedAvatar]);

    async function submitNewDetails(value: Partial<User> = {}) {
        dispatch({
            type: EditUserActionTypes.UpdateUserDetails,
        });
        dispatch(updateEditedUserDetails({ ...profileData, ...value }, contactData));
        clbk();
    }

    function submitContactData(value: UserContactData) {
        dispatch({
            type: EditUserActionTypes.UpdateUserDetails,
        });
        dispatch(updateUserContactData({ ...contactData, ...value }, profileData, userId));
        clbk();
    }

    return {
        selectedAvatar,
        updateUserDetailsIsPending,
        submitNewDetails,
        profileData,
        userId,
        submitContactData,
        contactData,
    };
}
