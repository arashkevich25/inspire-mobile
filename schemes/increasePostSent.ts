import { gql } from '@apollo/client';

export const INCREASE_POST_SENT = gql`
    mutation increasePostSent($postId: String) {
        increasePostSent(postId: $postId) {
            sent
        }
    }
`;
