import { gql } from '@apollo/client';
import { UserGroupRelationFragment } from '../graphql/fragments/Group';

export const GET_GROUPS_BY_USER = gql`
    query {
        getGroups {
            ...UserGroupRelationFragment
        }
    }
    ${UserGroupRelationFragment}
`;
