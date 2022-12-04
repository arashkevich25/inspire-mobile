import { gql } from '@apollo/client';
import { DetailsPostFragment, PostStatisticFragment } from '../graphql/fragments/Post';

export const GET_POST_BY_ID = gql`
    query getDetailsPostById($id: String, $userId: Int) {
        getDetailsPostById(id: $id, userId: $userId) {
            ...DetailsPostFragment
        }
        postStatistic(postId: $id) {
            ...PostStatisticFragment
        }
    }
    ${DetailsPostFragment}
    ${PostStatisticFragment}
`;
