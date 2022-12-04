import { gql } from '@apollo/client';

export const BLOCK_USER = (userId: number) => gql`
    mutation {
        blockUser(userId: ${userId}) {
            id
        }
    }
`;
