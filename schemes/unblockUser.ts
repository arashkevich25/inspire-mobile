import { gql } from '@apollo/client';

export const UNBLOCK_USER = (userId: number) => gql`
    mutation {
        unblockUser(userId: ${userId}) {
            id
        }
    }
`;
