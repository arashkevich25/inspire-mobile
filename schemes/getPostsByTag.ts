import { gql } from '@apollo/client';
import { SimplifiedPostFragment } from '../graphql/fragments/Post';

export const GET_POSTS_BY_TAG = gql`
    query GetPostsSimplifiedByTags($tags: [String], $skip: Int) {
        getPostsSimplifiedByTags(tags: $tags, skip: $skip) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
`;
