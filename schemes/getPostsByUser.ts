import { gql } from '@apollo/client';
import { TilePostFragment } from '../graphql/fragments/Post';

export const GET_POSTS_BY_USER = gql`
    query getSimplifiedPostsByUser($userId: ID, $skip: Int) {
        getSimplifiedPostsByUser(userId: $userId, skip: $skip) {
            ...TilePostFragment
        }
    }
    ${TilePostFragment}
`;
