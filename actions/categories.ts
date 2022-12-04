import { Category } from '@inspire/types';
import { CategoriesActions } from 'app-constants/actionTypes';
import { Dispatch } from 'redux';

import { GET_CATEGORIES } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection, RollbarLogging } from 'tools';

export function getCategories(): any {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CategoriesActions.GetCategories,
        });

        graphqlQueryWithPolicyByNetworkConnection<{ getCategories: Category[] }>({
            query: GET_CATEGORIES,
        })
            .then(response => dispatch(getCategoriesSuccess(response.data.getCategories)))
            .catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'getCategories');
                dispatch(getCategoriesFailure());
            });
    };
}

function getCategoriesSuccess(categories: Category[]) {
    return {
        type: CategoriesActions.GetCategoriesSuccess,
        categories,
    };
}

function getCategoriesFailure() {
    return {
        type: CategoriesActions.GetCategoriesFailure,
    };
}

export function initCategories(categories: Category[]) {
    return {
        type: CategoriesActions.InitCategories,
        categories,
    };
}
