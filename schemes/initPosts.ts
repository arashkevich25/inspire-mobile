import { gql } from '@apollo/client';
import { BasicPostFragment, SimplifiedPostFragment, TilePostFragment } from '../graphql/fragments/Post';

export const INIT_POSTS = gql`
    query InitApp($categoryId: Int, $city: String) {
        getWorldWallSimplifiedPosts(categoryId: $categoryId, skip: 0, city: $city) {
            ...TilePostFragment
        }
        getWallBasicPosts(categoryId: $categoryId, skip: 0, city: $city) {
            ...BasicPostFragment
        }
        getInspiredSimplifiedPosts(categoryId: $categoryId, skip: 0, city: $city) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
    ${BasicPostFragment}
    ${TilePostFragment}
`;

export const INIT_POSTS_AUTHED_USER = gql`
    query InitApp($categoryId: Int, $city: String) {
        getWorldWallSimplifiedPostsAuthedUser(categoryId: $categoryId, skip: 0, city: $city) {
            ...TilePostFragment
        }
        getWallBasicPosts(categoryId: $categoryId, skip: 0, city: $city) {
            ...BasicPostFragment
        }
        getInspiredSimplifiedPosts(categoryId: $categoryId, skip: 0, city: $city) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
    ${BasicPostFragment}
    ${TilePostFragment}
`;
