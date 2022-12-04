export enum ResetPasswordActions {
    ResetPassword = '[Auth] reset password',
    ResetPasswordSuccess = '[Auth] reset password success',
    ResetPasswordFailed = '[Auth] reset password failed',
}

interface ResetPassword {
    type: typeof ResetPasswordActions.ResetPassword;
}

interface ResetPasswordSuccess {
    type: typeof ResetPasswordActions.ResetPasswordSuccess;
}

interface ResetPasswordFailed {
    type: typeof ResetPasswordActions.ResetPasswordFailed;
}

export type ResetPasswordUnion = ResetPassword | ResetPasswordSuccess | ResetPasswordFailed;
