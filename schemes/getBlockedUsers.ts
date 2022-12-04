import { gql } from '@apollo/client';

export const GET_BLOCKED_USERS = gql`
    query {
        blockedUsers {
            id
        }
    }
`;
