import { gql } from '@apollo/client';
import { SimplifiedPostFragment } from '../graphql/fragments/Post';

export const SEARCH_POSTS = gql`
    query searchPosts($query: String, $skip: Int) {
        searchSimplifiedPosts(query: $query, skip: $skip) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
`;
