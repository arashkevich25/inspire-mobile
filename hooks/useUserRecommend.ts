import { useDispatch, useSelector } from 'react-redux';

import { disrecommendUser, recommendUser } from 'actions';
import { AppState } from 'reducers';
import { recommendOrDisrecommendPending } from 'selectors';

interface UseUserRecommendOutput {
    recommendUserHandle: () => void;
    disrecommendUserHandle: () => void;
    recommendDisrecommendIsPending: boolean;
}

export function useUserRecommend(userId: number): UseUserRecommendOutput {
    const dispatch = useDispatch();
    const recommendDisrecommend = useSelector((state: AppState) => recommendOrDisrecommendPending(state));

    function recommendUserHandle() {
        dispatch(recommendUser(userId));
    }

    function disrecommendUserHandle() {
        dispatch(disrecommendUser(userId));
    }

    return {
        recommendUserHandle,
        disrecommendUserHandle,
        recommendDisrecommendIsPending: recommendDisrecommend,
    };
}
