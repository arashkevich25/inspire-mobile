import { gql } from '@apollo/client';
import { DetailsPostFragment } from '../graphql/fragments/Post';

export const GET_POST_BY_ID_UNAUTH_USER = gql`
    query getDetailsPostById($id: String, $userId: Int) {
        getDetailsPostById(id: $id, userId: $userId) {
            ...DetailsPostFragment
        }
    }
    ${DetailsPostFragment}
`;
