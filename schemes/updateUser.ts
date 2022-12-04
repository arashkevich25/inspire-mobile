import { gql } from '@apollo/client';
import UserFragment from '../graphql/fragments/User';

export const UPDATE_USER_DETAILS = gql`
    mutation updateUserDetails(
        $id: Int
        $name: String
        $userUniqName: String
        $site: String
        $desc: String
        $avatar: String
        $fbUrl: String
        $instagramUrl: String
    ) {
        updateUserDetails(
            updateUserInput: {
                id: $id
                userUniqName: $userUniqName
                name: $name
                site: $site
                desc: $desc
                avatar: $avatar
                fbUrl: $fbUrl
                instagramUrl: $instagramUrl
            }
        ) {
            ...UserFragment
        }
    }
    ${UserFragment}
`;
