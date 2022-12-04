import { gql } from '@apollo/client';
import UserFragment from '../graphql/fragments/User';

export const GET_FOLLOWING_DATA = (userId: number) => gql`
    query {
        getFollowing(userId: ${userId}) {
            ...UserFragment
        }
    }
    ${UserFragment}
`;
