import { gql } from '@apollo/client';
import { CommentFragment } from '../graphql/fragments/Comment';

export const ADD_COMMENT = gql`
    mutation AddCommentWithCommentResponse($postId: String, $comment: String) {
        addCommentWithCommentResponse(addComment: { postId: $postId, comment: $comment }) {
            ...CommentFragment
        }
    }
    ${CommentFragment}
`;
