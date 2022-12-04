export enum EditUserActionTypes {
    UpdateUserDetails = '[User details] update user details',
    UpdateUserDetailsSuccess = '[User details] update user details success',
    UpdateUserDetailsFailure = '[User details] update user details failure',
}

export interface UpdateUserDetails {
    type: EditUserActionTypes.UpdateUserDetails;
}

export interface UpdateUserDetailsSuccess {
    type: EditUserActionTypes.UpdateUserDetailsSuccess;
}

export interface UpdateUserDetailsFailed {
    type: EditUserActionTypes.UpdateUserDetailsFailure;
}

export type EditUserDetailsUnion = UpdateUserDetails | UpdateUserDetailsSuccess | UpdateUserDetailsFailed;
