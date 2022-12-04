import { gql } from '@apollo/client';
import { SimplifiedPostFragment } from '../graphql/fragments/Post';

export const INSPIRED_POSTS = gql`
    query getInspiredSimplifiedPosts($categoryId: Int, $skip: Int, $city: String) {
        getInspiredSimplifiedPosts(categoryId: $categoryId, skip: $skip, city: $city) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
`;
