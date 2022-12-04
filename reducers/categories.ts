import { Category } from '@inspire/types';
import { CategoriesActions, CategoriesUnion } from 'app-constants/actionTypes';

export interface CategoriesState {
    categories: Category[];
    categoriesIsFetching: boolean;
    categoriesHasFetched: boolean;
}

const initialState: CategoriesState = {
    categoriesIsFetching: false,
    categoriesHasFetched: false,
    categories: [],
};

export function categoriesReducer(state: CategoriesState = initialState, action: CategoriesUnion): CategoriesState {
    switch (action.type) {
        case CategoriesActions.GetCategories:
            return {
                ...state,
                categoriesIsFetching: true,
            };

        case CategoriesActions.InitCategories:
            return {
                ...state,
                categories: action.categories,
                categoriesHasFetched: true,
            };

        case CategoriesActions.GetCategoriesSuccess:
            return {
                ...state,
                categoriesIsFetching: false,
                categoriesHasFetched: true,
                categories: action.categories,
            };

        case CategoriesActions.GetCategoriesFailure:
            return {
                ...state,
                categoriesIsFetching: false,
                categoriesHasFetched: false,
            };

        default:
            return state;
    }
}
