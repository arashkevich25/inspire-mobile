export const signUp = {
    heading: 'Załóż konto',
    fields: {
        phoneNumber: 'Numer telefonu',
        userName: 'Nazwa użytkownika (nick)',
        email: 'Email',
        password: 'Hasło',
        repeatPassword: 'Powtórz hasło',
        verificationCode: 'Kod weryfikujący',
        termsAndConditions: 'Regulamin i politykę prywatności',
    },
    text: {
        termsAndConditions: 'Przeczytałem i akceptuję',
        passwordNewAccount: 'Nowe konto',
        newAccountDescription:
            'Wygląda na to, że nie posiadasz jeszcze konta. Podaj hasło, aby założyć nowe konto lub wprowadź inny adres email',
        setPassword: 'Set new password',
        alternativeSignUp: 'zlbo załóż konto przez',
        hasAccount1: 'Masz już konto?',
        hasAccount2: 'Zaloguj się',
    },
    buttons: {
        sendCode: 'Wyślij kod weryfikujący',
        signUp: 'Załóż konto',
        setCredo: 'Ustaw',
    },
    errors: {
        401: 'Błędny login lub hasło',
        409: 'Użytkownik o podanym adresie email istnieje już w bazie',
        500: 'Login i/lub hasło są nieprawidłowe',
        emailIsNotCorrect: 'Wprowadź poprawny email',
        emailIsRequired: 'Podaj email',
        passwordIsRequired: 'Podaj hasło',
        nameIsRequired: 'Podaj nazwę użytkownika (nick)',
        termsAndConditionsIsRequired: 'Zgoda jest wymagana',
    },
};
