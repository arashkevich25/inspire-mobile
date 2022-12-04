import { Category, UserCategories } from '@inspire/types';
import { ProfileActionTypes } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { client } from 'configs/graphql';
import { RollbarLogging } from 'tools';
import { ADD_USER_CATEGORIES } from '../schemes/addUserCategories';

export function setUserCategory(category: Category, userId: number) {
    return {
        type: ProfileActionTypes.SetUserCategory,
        category,
        userId,
    };
}

export function setAllUserCategories(categories: Category[], userId: number) {
    return {
        type: ProfileActionTypes.SetAllUserCategories,
        categories,
        userId,
    };
}

export function removeAllUserCategories(userId: number) {
    return {
        type: ProfileActionTypes.RemoveAllUserCategories,
        userId,
    };
}

export function removeUserCategory(category: Category, userId: number) {
    return {
        type: ProfileActionTypes.RemoveUserCategory,
        category,
        userId,
    };
}

export function updateUserCategories(categories: Category[]) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ProfileActionTypes.UpdateUserCategories,
        });

        client
            .mutate<{ createUserCategories: UserCategories }>({
                mutation: ADD_USER_CATEGORIES(categories.map(category => category.id)),
            })
            .then(() => {
                dispatch(updateUserCategoriesSuccess());
            })
            .catch((error: any) => {
                RollbarLogging.reportErrorAtSpace(error, 'updateUserCategories');
                console.error('Error', error);
                dispatch(updateUserCategoriesFailure());
            });
    };
}

function updateUserCategoriesSuccess() {
    return {
        type: ProfileActionTypes.UpdateUserCategoriesSuccess,
    };
}

function updateUserCategoriesFailure() {
    return {
        type: ProfileActionTypes.UpdateUserCategoriesFailure,
    };
}
