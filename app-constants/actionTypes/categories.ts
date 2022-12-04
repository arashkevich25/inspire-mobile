import { Category } from '@inspire/types';

export enum CategoriesActions {
    GetCategories = '[Categories] get categories',
    GetCategoriesSuccess = '[Categories] get categories success',
    GetCategoriesFailure = '[Categories] get categories failure',
    InitCategories = '[Categories] init categories',
}

interface GetCategories {
    type: typeof CategoriesActions.GetCategories;
}

interface InitCategories {
    type: typeof CategoriesActions.InitCategories;
    categories: Category[];
}

interface GetCategoriesSuccess {
    type: typeof CategoriesActions.GetCategoriesSuccess;
    categories: Category[];
}

interface GetCategoriesFailure {
    type: typeof CategoriesActions.GetCategoriesFailure;
}

export type CategoriesUnion = GetCategories | GetCategoriesSuccess | GetCategoriesFailure | InitCategories;
