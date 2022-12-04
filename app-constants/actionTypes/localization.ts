import { PostCoordinates } from '@inspire/types';

export enum LocalizationActions {
    SetLocalization = '[Localization] set localization',

    FetchPostsCoordinates = '[Localization] fetch location posts count',
    FetchPostsCoordinatesSuccess = '[Localization] fetch location posts count success',
    FetchPostsCoordinatesFailed = '[Localization] fetch location posts count failed',
}

interface SetLocalizationAction {
    type: typeof LocalizationActions.SetLocalization;
    localization: string;
}

interface FetchPostsCoordinates {
    type: typeof LocalizationActions.FetchPostsCoordinates;
}

interface FetchPostsCoordinatesSuccess {
    type: typeof LocalizationActions.FetchPostsCoordinatesSuccess;
    postCoordinates: PostCoordinates[];
}

interface FetchPostsCoordinatesFailed {
    type: typeof LocalizationActions.FetchPostsCoordinatesFailed;
}

export type LocalizationUnion =
    | SetLocalizationAction
    | FetchPostsCoordinates
    | FetchPostsCoordinatesSuccess
    | FetchPostsCoordinatesFailed;
