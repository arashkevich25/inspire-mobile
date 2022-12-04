import { gql } from '@apollo/client';
import { CommentFragment } from '../graphql/fragments/Comment';

export const GET_COMMENTS_BY_POST_ID = gql`
    query GetCommentsByPostId($postId: String, $skip: Int) {
        getCommentsByPostId(postId: $postId, skip: $skip) {
            ...CommentFragment
        }
    }
    ${CommentFragment}
`;
