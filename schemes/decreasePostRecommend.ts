import { gql } from '@apollo/client';
import { PostStatisticFragment } from '../graphql/fragments/Post';

export const DECREASE_POST_RECOMMEND = gql`
    mutation decreasePostRecommend($postId: String) {
        decreasePostRecommend(postId: $postId) {
            ...PostStatisticFragment
        }
    }
    ${PostStatisticFragment}
`;
