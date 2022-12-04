import { gql } from '@apollo/client';
import { SimplifiedPostFragment } from 'graphql/fragments/Post';

export const GET_PRODUCT_POSTS_BY_USER = gql`
    query getProductSimplifiedPostsByUser($userId: ID, $skip: Int) {
        getProductSimplifiedPostsByUser(userId: $userId, skip: $skip) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
`;
