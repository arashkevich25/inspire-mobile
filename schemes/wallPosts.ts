import { gql } from '@apollo/client';
import { BasicPostFragment } from '../graphql/fragments/Post';

export const WALL_POSTS = gql`
    query getWallBasicPosts($categoryId: Int, $skip: Int, $city: String) {
        getWallBasicPosts(categoryId: $categoryId, skip: $skip, city: $city) {
            ...BasicPostFragment
        }
    }
    ${BasicPostFragment}
`;
