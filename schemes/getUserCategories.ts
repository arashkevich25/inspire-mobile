import { gql } from '@apollo/client';

export const GET_USER_CATEGORIES = gql`
    query {
        getUserCategories {
            categories {
                id
            }
        }
    }
`;
