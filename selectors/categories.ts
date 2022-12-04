import { Category } from '@inspire/types';

import { AppState } from 'reducers';
import { CategoriesState } from 'reducers/categories';

function categoriesState(state: AppState): CategoriesState {
    return state.categories;
}

export function categories(state: AppState): Category[] {
    return categoriesState(state).categories;
}

export function categoryById(state: AppState, categoryId: number): Category {
    return categoriesState(state).categories.filter(category => category.id === categoryId)[0];
}

export function categoriesIsFetching(state: AppState): boolean {
    return categoriesState(state).categoriesIsFetching;
}

export function categoriesHasFetched(state: AppState): boolean {
    return categoriesState(state).categoriesHasFetched;
}
