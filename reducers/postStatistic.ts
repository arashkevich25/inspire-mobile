import { PostStatisticActions, PostStatisticUnion } from 'app-constants/actionTypes';

export interface PostStatisticState {
    recommendPostInProgress: boolean;
    sentPostInProgress: boolean;
}

const initPostStatisticState: PostStatisticState = {
    recommendPostInProgress: false,
    sentPostInProgress: false,
};

export function postStatisticReducer(state = initPostStatisticState, action: PostStatisticUnion): PostStatisticState {
    switch (action.type) {
        case PostStatisticActions.DecreaseRecommendPost:
        case PostStatisticActions.IncreaseRecommendPost: {
            return {
                ...state,
                recommendPostInProgress: true,
            };
        }
        case PostStatisticActions.IncreaseRecommendPostSuccess:
        case PostStatisticActions.DecreaseRecommendPostSuccess:
        case PostStatisticActions.IncreaseRecommendPostFailed:
        case PostStatisticActions.DecreaseRecommendPostFailed: {
            return {
                ...state,
                recommendPostInProgress: false,
            };
        }

        default: {
            return state;
        }
    }
}
