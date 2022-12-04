import { useDispatch, useSelector } from 'react-redux';

import { decreasePostRecommend, increasePostRecommend } from 'actions';
import { AppState } from 'reducers';
import { recommendPostInProgress } from 'selectors';

interface UsePostRecommendOutput {
    increasePostRecommend: (postId: string) => void;
    decreasePostRecommend: (postId: string) => void;
    increaseOrDecreasePostRecommend: (postId: string, hasRecommendByUser: boolean) => void;
    postRecommendInProgress: boolean;
}

export function usePostRecommend(): UsePostRecommendOutput {
    const dispatch = useDispatch();
    const postRecommendInProgress = useSelector((state: AppState) => recommendPostInProgress(state));

    function increasePostRecommendHandle(postId: string) {
        dispatch(increasePostRecommend(postId));
    }

    function decreasePostRecommendHandle(postId: string) {
        dispatch(decreasePostRecommend(postId));
    }

    function increaseOrDecreasePostRecommend(postId: string, hasRecommendByUser: boolean) {
        if (postRecommendInProgress) {
            return;
        }

        if (hasRecommendByUser) {
            decreasePostRecommendHandle(postId);
            return;
        }
        increasePostRecommendHandle(postId);
    }

    return {
        postRecommendInProgress,
        increasePostRecommend: increasePostRecommendHandle,
        decreasePostRecommend: decreasePostRecommendHandle,
        increaseOrDecreasePostRecommend,
    };
}
