import { gql } from '@apollo/client';

export const UPDATE_USER_CONTACT_DATA = gql`
    mutation UpdateUserContactData($contactData: UpdateContactDataInput) {
        updateUserContactData(contactData: $contactData) {
            facebook
            instagram
            linkedin
            web
            phone
            email
        }
    }
`;
