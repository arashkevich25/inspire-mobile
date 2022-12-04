import { gql } from '@apollo/client';
import UserFragment from '../graphql/fragments/User';

export const SEARCH_ACCOUNTS = gql`
    query searchAccounts($query: String) {
        searchAccounts(query: $query) {
            ...UserFragment
        }
    }
    ${UserFragment}
`;
