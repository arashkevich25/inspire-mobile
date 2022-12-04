import { AppState } from 'reducers';
import { RatingState } from 'reducers/rating';

function ratingState(state: AppState): RatingState {
    return state.rating;
}

export function setRatingPending(state: AppState): boolean {
    return ratingState(state).setRatingPending;
}
