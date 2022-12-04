import { gql } from '@apollo/client';

export const CommentFragment = gql`
    fragment CommentFragment on Comment {
        id
        parentId
        comment
        user {
            id
            name
            avatar
        }
        createdAt
        media {
            uri
        }
    }
`;
