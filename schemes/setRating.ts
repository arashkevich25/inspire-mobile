import { gql } from '@apollo/client';

export const SET_RATING = gql`
    mutation SetRatingBasicPostResponse($postId: String, $rating: Float) {
        setRatingBasicPostResponse(setRating: { postId: $postId, rating: $rating }) {
            id
            rating
            userRating
            ratingCount
            isRateByUser
        }
    }
`;
