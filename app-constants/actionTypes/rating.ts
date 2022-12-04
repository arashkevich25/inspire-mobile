export enum RatingActions {
    SetRating = '[Global] set rating',
    SetRatingSuccess = '[Global] set rating success',
    SetRatingFailed = '[Global] set rating failed',
}

interface SetRating {
    type: typeof RatingActions.SetRating;
}

interface SetRatingSuccess {
    type: typeof RatingActions.SetRatingSuccess;
}

interface SetRatingFailed {
    type: typeof RatingActions.SetRatingFailed;
}

export type RatingUnion = SetRating | SetRatingSuccess | SetRatingFailed;
