/* eslint-disable */
import { gql } from '@apollo/client';
import UserFragment from '../graphql/fragments/User';

export const RECOMMEND_USER = gql`
    mutation RecommendUser($userId: Int) {
        recommendUser(userId: $userId) {
            ...UserFragment
        }
    }
    ${UserFragment}
`;
