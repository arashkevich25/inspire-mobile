import { gql } from '@apollo/client';
import { TilePostFragment } from '../graphql/fragments/Post';

export const GET_WORLD_WALL_POSTS = gql`
    query getWorldWallSimplifiedPosts($categoryId: Int, $skip: Int, $city: String) {
        getWorldWallSimplifiedPosts(categoryId: $categoryId, skip: $skip, city: $city) {
            ...TilePostFragment
        }
    }
    ${TilePostFragment}
`;
