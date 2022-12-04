import { gql } from '@apollo/client';

export const REMOVE_POST_BY_ID = (postId: string) => gql`
    mutation {
        removePost(postId: "${postId}")
    }
`;
