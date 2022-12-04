import { gql } from '@apollo/client';
import UserFragment from '../graphql/fragments/User';

export const GET_FRIENDS_DATA = gql`
    query getFriends($userId: ID) {
        getFriends(userId: $userId) {
            ...UserFragment
        }
    }
    ${UserFragment}
`;
