import { gql } from '@apollo/client';

export const SEARCH_TAGS = gql`
    query searchTags($query: String, $skip: Int) {
        searchTags(query: $query, skip: $skip) {
            id
            tag
            postsCount
        }
    }
`;
