import { User } from '@inspire/types';
import { EditUserActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { updateUserDetails } from 'actions/userDetails';
import { client } from 'configs/graphql';
import { UPDATE_USER_CONTACT_DATA, UPDATE_USER_DETAILS } from 'schemes';

export function updateEditedUserDetails(details: User, contactData: any) {
    return async (dispatch: Dispatch) => {
        client
            .mutate({
                mutation: UPDATE_USER_DETAILS,
                variables: {
                    id: details.id,
                    name: details.name,
                    desc: details.desc,
                    avatar: details.avatar,
                    userUniqName: details.userUniqName,
                },
            })
            .then(response => {
                dispatch(
                    updateUserDetails(response.data.updateUserDetails, response.data.updateUserDetails.id, contactData),
                );
                dispatch({
                    type: EditUserActionTypes.UpdateUserDetailsSuccess,
                });
            });
    };
}

export function updateUserContactData(contactData: any, details: User, userId: number) {
    delete contactData.__typename;
    return async (dispatch: Dispatch) => {
        client
            .mutate({
                mutation: UPDATE_USER_CONTACT_DATA,
                variables: { contactData },
            })
            .then(response => {
                dispatch(updateUserDetails(details, userId, response.data.updateUserContactData));
                dispatch({
                    type: EditUserActionTypes.UpdateUserDetailsSuccess,
                });
            });
    };
}
