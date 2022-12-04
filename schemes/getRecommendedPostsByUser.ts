import { gql } from '@apollo/client';
import { SimplifiedPostFragment } from 'graphql/fragments/Post';

export const GET_RECOMMENDED_POSTS_BY_USER = gql`
    query getRecommendedPostsByUser($userId: ID, $skip: Int) {
        getRecommendedPostsByUser(userId: $userId, skip: $skip) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
`;
