import { gql } from '@apollo/client';
import { CategoryFragment } from '../graphql/fragments/Categories';

export const GET_CATEGORIES = gql`
    query {
        getCategories {
            ...CategoryFragment
        }
    }
    ${CategoryFragment}
`;
