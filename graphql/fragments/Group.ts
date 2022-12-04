import { gql } from '@apollo/client';

export const PostGroupsFragment = gql`
    fragment PostGroupsFragment on Group {
        id
        name
        avatar
    }
`;

export const PostGroupRelationFragment = gql`
    fragment PostGroupRelationFragment on PostGroupRelation {
        id
        groups {
            ...PostGroupsFragment
        }
    }
    ${PostGroupsFragment}
`;

export const UserGroupRelationFragment = gql`
    fragment UserGroupRelationFragment on UserGroupRelation {
        id
        users {
            id
            name
            avatar
            followerRelation {
                id
                follower {
                    id
                    name
                    avatar
                }
            }
        }
        group {
            ...PostGroupsFragment
        }
    }
    ${PostGroupsFragment}
`;
