/* eslint-disable */
import { gql } from '@apollo/client';
import UserFragment from '../graphql/fragments/User';

export const DISRECOMMEND_USER = gql`
    mutation DisrecommendUser($userId: Int) {
        disrecommendUser(userId: $userId) {
            ...UserFragment
        }
    }
    ${UserFragment}
`;
