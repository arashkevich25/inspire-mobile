import { Category } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import {
    removeAllUserCategories,
    removeUserCategory,
    setAllUserCategories,
    setUserCategory,
    updateUserCategories,
} from 'actions';
import { AppState } from 'reducers';
import { categories, getUserCategories, getUserId, updateUserCategoriesIsPending } from 'selectors';

interface UseUserCategoriesOutputs {
    userCategories: Category[];
    setCategory: (category: Category) => void;
    removeCategory: (category: Category) => void;
    allCategories: Category[];
    updateUserCategoriesHandle: (categories?: Category[]) => void;
    updateIsPending: boolean;
    setAllCategories: (categories: Category[]) => void;
    removeAllCategories: () => void;
}

export function useUserCategories(): UseUserCategoriesOutputs {
    const userId = useSelector((state: AppState) => getUserId(state));
    const dispatch = useDispatch();
    const userCategories = useSelector((state: AppState) => getUserCategories(state, userId));
    const allCategories = useSelector((state: AppState) => categories(state));
    const updateIsPending = useSelector((state: AppState) => updateUserCategoriesIsPending(state));

    function setCategory(category: Category) {
        dispatch(setUserCategory(category, userId));
    }

    function setAllCategories(categories: Category[]) {
        dispatch(setAllUserCategories(categories, userId));
    }

    function removeCategory(category: Category) {
        dispatch(removeUserCategory(category, userId));
    }

    function removeAllCategories() {
        dispatch(removeAllUserCategories(userId));
    }

    function updateUserCategoriesHandle(categories: Category[] = userCategories) {
        dispatch(updateUserCategories(categories));
    }

    return {
        userCategories,
        setCategory,
        removeCategory,
        allCategories,
        updateUserCategoriesHandle,
        updateIsPending,
        setAllCategories,
        removeAllCategories,
    };
}
