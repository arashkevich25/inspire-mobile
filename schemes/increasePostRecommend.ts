import { gql } from '@apollo/client';
import { PostStatisticFragment } from '../graphql/fragments/Post';

export const INCREASE_POST_RECOMMEND = gql`
    mutation increasePostRecommend($postId: String) {
        increasePostRecommend(postId: $postId) {
            ...PostStatisticFragment
        }
    }
    ${PostStatisticFragment}
`;
