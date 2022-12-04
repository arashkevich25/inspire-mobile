import { Category } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import {
    removeCategoryFilter,
    removeCategoryFilterAuthedUser,
    removeMapFilter,
    removeMapFilterAuthedUser,
    setCategoryFilter,
    setCategoryFilterAuthedUser,
    setMapFilter,
    setMapFilterAuthedUser,
} from 'actions';
import { AppState } from 'reducers';
import { categories, getCategoryFilter, getMapFilter, isAuthenticated } from 'selectors';

type UseFilterOutputs = [
    number,
    string,
    (categoryId: number) => void,
    () => void,
    (city: string) => void,
    () => void,
    (categoryId: number) => Category,
];

export function useFilters(): UseFilterOutputs {
    const dispatch = useDispatch();
    const authenticated = useSelector((state: AppState) => isAuthenticated(state));
    const selectedCategory = useSelector((state: AppState) => getCategoryFilter(state));
    const selectedMap = useSelector((state: AppState) => getMapFilter(state));
    const allCategories = useSelector((state: AppState) => categories(state));

    function getCategoryById(categoryId: number) {
        return allCategories.filter(category => category.id === categoryId)[0];
    }

    function setCategory(categoryId: number) {
        if (authenticated) {
            dispatch(setCategoryFilterAuthedUser(categoryId, selectedMap));
            return;
        }
        dispatch(setCategoryFilter(categoryId, selectedMap));
    }

    function setMap(city: string) {
        if (authenticated) {
            dispatch(setMapFilterAuthedUser(selectedCategory, city));
            return;
        }
        dispatch(setMapFilter(selectedCategory, city));
    }

    function removeCategory() {
        if (authenticated) {
            dispatch(removeCategoryFilterAuthedUser(selectedMap));
            return;
        }
        dispatch(removeCategoryFilter(selectedMap));
    }

    function removeMap() {
        if (authenticated) {
            dispatch(removeMapFilterAuthedUser(selectedCategory));
            return;
        }
        dispatch(removeMapFilter(selectedCategory));
    }

    return [selectedCategory, selectedMap, setCategory, removeCategory, setMap, removeMap, getCategoryById];
}
