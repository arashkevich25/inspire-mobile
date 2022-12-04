import { RatingActions, RatingUnion } from 'app-constants/actionTypes';

export interface RatingState {
    setRatingPending: boolean;
}

const initialState: RatingState = {
    setRatingPending: false,
};

export function ratingReducer(state: RatingState = initialState, action: RatingUnion): RatingState {
    switch (action.type) {
        case RatingActions.SetRating: {
            return {
                ...state,
                setRatingPending: true,
            };
        }

        case RatingActions.SetRatingSuccess: {
            return {
                ...state,
                setRatingPending: false,
            };
        }

        case RatingActions.SetRatingFailed: {
            return {
                ...state,
                setRatingPending: false,
            };
        }

        default:
            return state;
    }
}
