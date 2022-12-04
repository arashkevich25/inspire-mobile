import { gql } from '@apollo/client';

export const GET_BLOCKED_BY_USERS = gql`
    query {
        blockedByUsers {
            id
        }
    }
`;
