import { gql } from '@apollo/client';

export const CategoryFragment = gql`
    fragment CategoryFragment on Category {
        id
        tkey
        pl
        en
    }
`;

export const CategoryRelationsFragment = gql`
    fragment CategoriesRelationsFragment on CategoriesRelations {
        id
        categories {
            ...CategoryFragment
        }
    }

    ${CategoryFragment}
`;
