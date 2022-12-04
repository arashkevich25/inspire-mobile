export enum AuthenticatedActionTypes {
    Authenticated = '[Authenticated] authenticated to application',
    AuthenticatedSuccess = '[Authenticated] authenticated to application success',
    AuthenticatedFailed = '[Authenticated] authenticated to application failed',
    AuthenticatedLogout = '[Authenticated] log out',
    AuthenticatedSetNewPassword = '[Authenticated] set new password',
    AuthenticatedSetNewPasswordSuccess = '[Authenticated] set new password success',
    AuthenticatedSetNewPasswordFailed = '[Authenticated] set new password failed',
    SetUserId = '[Authenticated] set user id',
    CheckUser = '[Authenticated] check user',
    CheckUserSuccess = '[Authenticated] check user success',
}

export interface Authenticated {
    type: typeof AuthenticatedActionTypes.Authenticated;
}

export interface AuthenticatedSetNewPassword {
    type: typeof AuthenticatedActionTypes.AuthenticatedSetNewPassword;
}

export interface AuthenticatedSetNewPasswordSuccess {
    type: typeof AuthenticatedActionTypes.AuthenticatedSetNewPasswordSuccess;
}

export interface AuthenticatedSetNewPasswordFailed {
    type: typeof AuthenticatedActionTypes.AuthenticatedSetNewPasswordFailed;
}

export interface AuthenticatedSuccess {
    type: typeof AuthenticatedActionTypes.AuthenticatedSuccess;
    userId: number;
}

export interface AuthenticatedFailed {
    type: typeof AuthenticatedActionTypes.AuthenticatedFailed;
}

export interface AuthenticatedLogout {
    type: typeof AuthenticatedActionTypes.AuthenticatedLogout;
}

export interface SetUserId {
    type: typeof AuthenticatedActionTypes.SetUserId;
    userId: number;
}

export type AuthenticatedUnion =
    | Authenticated
    | AuthenticatedSuccess
    | AuthenticatedFailed
    | AuthenticatedLogout
    | AuthenticatedSetNewPasswordFailed
    | AuthenticatedSetNewPassword
    | AuthenticatedSetNewPasswordSuccess
    | SetUserId;
