import { gql } from '@apollo/client';

export const GET_TOWNS = gql`
    query GetTowns($query: String) {
        getTowns(query: $query) {
            id
            name
        }
    }
`;
