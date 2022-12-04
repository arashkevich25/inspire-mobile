export const userIntroSetup = {
    headers: {
        setAvatar: 'Choose a profile photo',
        setSocialMedia: 'Set social media',
        setNameAndDescription: 'Choose user name and description',
        turnOnMarketingData: 'Allow !NSPiRE to track your activity across other companies apps and websites',
        thankyou: 'Thank you!',
    },
    descriptions: {
        setAvatar:
            'Express yourself by a profile picture and boost your credibility! You can skip this step now or add a photo later.',
        setSocialMedia: 'Let other users find you on social media.',
        setNameAndDescription:
            'Enter your name and write something about yourself, your passions, interests and activities to let other users know you better.',
        turnOnMarketingData:
            'If you see a request to track your activity, you can tap Allow or Ask App Not to Track. You can still use the full capabilities of the app, regardless of whether you allow the app to track your activity.',
        thankyou: 'We are preparing your account...',
    },
    text: {},
    fields: {
        nameLabel: 'User name',
        name: 'Jan Kowalski',
        descLabel1: 'Description ',
        descLabel2: '(Optional)',
        desc: 'Photography is my passion 📷 🥲 🥴',
        fbUrl: 'https://facebook.com/yournick',
        instagramUrl: 'https://instagram.com/yournick',
        site: 'https://yoursite.com',
        linkedin: 'https://linkedin.com/yournick',
        phone: '+48 000 000 000',
        email: 'contact@yourcompany.com',
    },
    buttons: {
        addPhoto: 'Add photo',
        later: 'Later',
        next: 'Next',
        prev: 'Previous',
        save: 'Save',
        remove: 'Remove',
    },
    errors: {
        descTooLong: 'Description should be till 100 words',
        nameIsRequired: 'Name is required',
        descIsRequired: 'Profile description is required',
        urlIsInvalid: 'The url is invalid, e.g. https://example.com',
        emailIsInvalid: 'The email provided is invalid',
    },
};
