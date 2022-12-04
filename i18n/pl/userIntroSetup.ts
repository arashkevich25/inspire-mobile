export const userIntroSetup = {
    headers: {
        setAvatar: 'Ustaw zdjęcie profilowe',
        setSocialMedia: 'Dodaj media społecznościowe',
        setNameAndDescription: 'Wybierz nazwę użytkownika i opis',
        turnOnMarketingData: 'Pozwól na śledzenie Twojej aktywności w Internecie',
        thankyou: 'Dziękujemy!',
    },
    descriptions: {
        setAvatar:
            'Wyraź siebie poprzez zdjęcie profilowe! Dzięki temu Ty i Twoje polecenia będą bardziej wiarygodne! Możesz pominąć ten krok lub dodać zdjęcie później.',
        setSocialMedia: 'Pozwól innym użytkownikom odnaleźć Cię w mediach społecznościowych.',
        setNameAndDescription:
            'Wprowadź swój nick oraz napisz kilka słów o sobie i swoich zainteresowaniach. Pozwól innym użytkownikom lepiej Cię poznać!',
        turnOnMarketingData:
            'Jeśli wybierzesz opcję Poproś aplikację o nieśledzenie, deweloper aplikacji nie będzie mógł uzyskać dostępu do systemowego identyfikatora reklamowego (IDFA), który jest często używany do śledzenia. Aplikacja nie może też śledzić Twojej aktywności przy użyciu innych informacji identyfikujących Ciebie lub Twoje urządzenie, na przykład adresu e-mail.',
        thankyou: 'Tworzymy twoje konto...',
    },
    buttons: {
        addPhoto: 'Dodaj zdjęcie',
        later: 'Może później',
        save: 'Zapisz',
        remove: 'Usuń',
        next: 'Dalej',
        prev: 'Wróć',
    },
    text: {
        stepProgress: '{{currentScreen}} z {{countScreens}}',
        progress: 'Konto uzupełnione w {{progressCount}}%',
    },
    fields: {
        nameLabel: 'Nazwa użytkownika',
        name: 'Jan Kowalski',
        descLabel1: 'Opis ',
        descLabel2: '(opcjonalnie)',
        desc: 'Moja pasja to fotografia 📷 ',
        fbUrl: 'https://facebook.com/yournick',
        instagramUrl: 'https://instagram.com/yournick',
        site: 'https://yoursite.com',
        linkedin: 'https://linkedin.com/yournick',
        phone: '+48 000 000 000',
        email: 'contact@yourcompany.com',
    },
    errors: {
        descTooLong: 'Maksymalna ilość znakow 100',
        nameIsRequired: 'Nazwa jest wymagana',
        descIsRequired: 'Opis jest wymagany',
        urlIsInvalid: 'Podany url jest niepoprawny, https://przyklad.pl',
        emailIsInvalid: 'Podany email jest niepoprawny',
    },
};
