import { Category } from '@inspire/types';
import { isIphone } from 'app-constants';
import { useDispatch, useSelector } from 'react-redux';

import { Navigation } from 'react-native-navigation';

import { resetStore, selectCategory, selectImage, unselectCategory, unselectImage } from 'actions';
import { AndroidChoosePostGroups, IosChoosePostGroups } from 'navigation/components';
import { AppState } from 'reducers';
import { categories, getSelectedCategories, getSelectedPhotos, selectedGroups } from 'selectors';

type Function<T> = (arg: T) => void;

interface AddPostsStateOutput {
    selectedCategories: number[];
    selectedPhotos: string[];
    allCategories: Category[];
    groupsForPost: number[];
    selectCategoryHandle: Function<number>;
    unselectCategoryHandle: Function<number>;
    unselectPhoto: Function<string>;
    resetAddPostStore: () => void;
    selectGroups: () => void;
    selectUnselectCategorySwitches: Function<number>;
    selectPhoto: (uri: string) => void;
}

export function useAddPostState(): AddPostsStateOutput {
    const dispatch = useDispatch();
    const selectedCategories = useSelector((state: AppState) => getSelectedCategories(state));
    const selectedPhotos = useSelector((state: AppState) => getSelectedPhotos(state));
    const allCategories = useSelector((state: AppState) => categories(state));
    const groupsForPost = useSelector((state: AppState) => selectedGroups(state));

    function selectCategoryHandle(id: number) {
        dispatch(selectCategory(id));
    }

    function unselectCategoryHandle(id: number) {
        dispatch(unselectCategory(id));
    }

    function unselectPhoto(uri: string) {
        dispatch(unselectImage(uri));
    }

    function selectPhoto(uri: string) {
        dispatch(selectImage(uri));
    }

    function resetAddPostStore() {
        dispatch(resetStore());
    }

    async function selectGroups() {
        await Navigation.showModal({
            stack: {
                children: [
                    {
                        component: isIphone ? IosChoosePostGroups : AndroidChoosePostGroups,
                    },
                ],
            },
        });
    }

    function selectUnselectCategorySwitches(categoryId: number) {
        if (selectedCategories.includes(categoryId)) {
            unselectCategoryHandle(categoryId);
            return;
        }

        if (selectedCategories.length >= 5) {
            return;
        }

        selectCategoryHandle(categoryId);
    }

    return {
        selectedCategories,
        selectedPhotos,
        allCategories,
        groupsForPost,
        selectCategoryHandle,
        unselectCategoryHandle,
        unselectPhoto,
        resetAddPostStore,
        selectGroups,
        selectUnselectCategorySwitches,
        selectPhoto,
    };
}
