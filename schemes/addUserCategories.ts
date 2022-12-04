import { gql } from '@apollo/client';

export const ADD_USER_CATEGORIES = (categories: number[]) => gql`
    mutation {
        createUserCategories(categories: [${categories.map(category => `${category}`)}]) {
            categories {
                id
            }
        }
    }
`;
