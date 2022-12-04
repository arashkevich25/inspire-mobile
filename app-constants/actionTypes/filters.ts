import { PostCoordinates } from '@inspire/types';

export enum FiltersActions {
    SetCategoryFilter = '[Global] set category filter',
    RemoveCategoryFilter = '[Global] remove category filter',

    SetMapFilter = '[Global] set map filter',
    RemoveMapFilter = '[Global] remove map filter',

    PostsHasFetched = '[Global] filtered posts has fetched',

    FetchPostsCoordinates = '[Choose location / filter] fetch location posts count',
    FetchPostsCoordinatesSuccess = '[Choose location / filter] fetch location posts count success',
    FetchPostsCoordinatesFailed = '[Choose location / filter] fetch location posts count failed',
}

interface PostsHasFetched {
    type: typeof FiltersActions.PostsHasFetched;
}

interface SetCategoryFilter {
    type: typeof FiltersActions.SetCategoryFilter;
    selectedCategory: number;
}

interface RemoveCategoryFilter {
    type: typeof FiltersActions.RemoveCategoryFilter;
    removedCategory: number;
}

interface SetMapFilter {
    type: typeof FiltersActions.SetMapFilter;
    city: string;
}

interface RemoveMapFilter {
    type: typeof FiltersActions.RemoveMapFilter;
}

interface FetchPostsCoordinates {
    type: typeof FiltersActions.FetchPostsCoordinates;
}

interface FetchPostsCoordinatesSuccess {
    type: typeof FiltersActions.FetchPostsCoordinatesSuccess;
    postCoordinates: PostCoordinates[];
}

interface FetchPostsCoordinatesFailed {
    type: typeof FiltersActions.FetchPostsCoordinatesFailed;
    error: any;
}

export type FiltersUnion =
    | SetCategoryFilter
    | RemoveCategoryFilter
    | SetMapFilter
    | RemoveMapFilter
    | PostsHasFetched
    | FetchPostsCoordinates
    | FetchPostsCoordinatesSuccess
    | FetchPostsCoordinatesFailed;
