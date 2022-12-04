import { gql } from '@apollo/client';
import UserFragment from '../graphql/fragments/User';

export const GET_SUBSCRIBERS_DATA = (userId: number) => gql`
    query {
        getFollowers(userId: ${userId}) {
            ...UserFragment
        }
    }
    ${UserFragment}
`;
