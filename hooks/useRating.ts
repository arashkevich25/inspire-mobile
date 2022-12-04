import { useDispatch, useSelector } from 'react-redux';

import { setRating } from 'actions';
import { AppState } from 'reducers';
import { getUserId, setRatingPending } from 'selectors';

type UseRatingOutput = [boolean, (postId: string, rating: number, postUserId: number) => void];

export function useRating(): UseRatingOutput {
    const dispatch = useDispatch();
    const ratingIsPending = useSelector((state: AppState) => setRatingPending(state));
    const userId = useSelector((state: AppState) => getUserId(state));

    function updateRating(postId: string, rating: number, postUserId: number) {
        dispatch(setRating(userId, postId, rating, postUserId));
    }

    return [ratingIsPending, updateRating];
}
