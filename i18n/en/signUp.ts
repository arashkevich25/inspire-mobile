export const signUp = {
    heading: 'Sign Up',
    fields: {
        phoneNumber: 'Phone number',
        userName: 'Name',
        email: 'Email',
        password: 'Password',
        verificationCode: 'Verification code',
        repeatPassword: 'Repeat password',
        termsAndConditions: 'Regulations and privacy policy',
    },
    text: {
        termsAndConditions: 'I have read and accepted',
        passwordNewAccount: 'New account',
        newAccountDescription:
            "It looks like you don't have an account with !NSPiRE yet. Please enter your password to create a new account or enter another email address",
        setPassword: 'Set new password',
        alternativeSignUp: 'or sign up by',
        hasAccount1: 'Dou have account?',
        hasAccount2: 'Log in',
    },
    buttons: {
        sendCode: 'Send verification code',
        signUp: 'Sign Up',
        setCredo: 'Set password',
    },
    errors: {
        401: 'Login or password is incorrect',
        409: 'User is already registered',
        500: 'Login or password is incorrect',
        emailIsNotCorrect: 'Email is not correct',
        emailIsRequired: 'Email is required',
        passwordIsRequired: 'Password is required',
        nameIsRequired: 'Name is required',
        termsAndConditionsIsRequired: 'Your acceptance is required',
    },
};
