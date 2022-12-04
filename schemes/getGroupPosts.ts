import { gql } from '@apollo/client';
import { SimplifiedPostFragment } from '../graphql/fragments/Post';

export const GET_GROUP_POSTS = gql`
    query getGroupPosts($groupId: ID) {
        getGroupSimplifiedPosts(groupId: $groupId) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
`;
