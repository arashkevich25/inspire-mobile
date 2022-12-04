import { gql } from '@apollo/client';
import { TilePostFragment } from '../graphql/fragments/Post';

export const GET_WORLD_WALL_POSTS_AUTHED_USER = gql`
    query getWorldWallSimplifiedPosts($categoryId: Int, $skip: Int, $city: String) {
        getWorldWallSimplifiedPostsAuthedUser(categoryId: $categoryId, skip: $skip, city: $city) {
            ...TilePostFragment
        }
    }
    ${TilePostFragment}
`;
