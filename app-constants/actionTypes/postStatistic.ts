export enum PostStatisticActions {
    IncreaseRecommendPost = '[Post Statistic] increase recommend post',
    IncreaseRecommendPostSuccess = '[Post Statistic] increase recommend post success',
    IncreaseRecommendPostFailed = '[Post Statistic] increase recommend post failed',

    DecreaseRecommendPost = '[Post Statistic] decrease recommend post',
    DecreaseRecommendPostSuccess = '[Post Statistic] decrease recommend post success',
    DecreaseRecommendPostFailed = '[Post Statistic] decrease recommend post failed',

    IncreaseSentPost = '[Post Statistic] increase sent post',
    IncreaseSentPostSuccess = '[Post Statistic] increase sent post success',
    IncreaseSentPostFailed = '[Post Statistic] increase sent post failed',
}

interface IncreaseRecommendPost {
    type: typeof PostStatisticActions.IncreaseRecommendPost;
}

interface IncreaseRecommendPostSuccess {
    type: typeof PostStatisticActions.IncreaseRecommendPostSuccess;
}

interface IncreaseRecommendPostFailed {
    type: typeof PostStatisticActions.IncreaseRecommendPostFailed;
}

interface DecreaseRecommendPost {
    type: typeof PostStatisticActions.DecreaseRecommendPost;
}

interface DecreaseRecommendPostSuccess {
    type: typeof PostStatisticActions.DecreaseRecommendPostSuccess;
}

interface DecreaseRecommendPostFailed {
    type: typeof PostStatisticActions.DecreaseRecommendPostFailed;
}

interface IncreaseSentPost {
    type: typeof PostStatisticActions.IncreaseSentPost;
}

interface IncreaseSentPostSuccess {
    type: typeof PostStatisticActions.IncreaseSentPostSuccess;
}

interface IncreaseSentPostFailed {
    type: typeof PostStatisticActions.IncreaseSentPostFailed;
}

export type PostStatisticUnion =
    | IncreaseRecommendPost
    | IncreaseRecommendPostSuccess
    | IncreaseRecommendPostFailed
    | DecreaseRecommendPost
    | DecreaseRecommendPostSuccess
    | DecreaseRecommendPostFailed
    | IncreaseSentPost
    | IncreaseSentPostSuccess
    | IncreaseSentPostFailed;
