import { PostDto } from '@inspire/types';
import { AddPostActions, AddPostActionTypes } from 'app-constants/actionTypes';

export interface AddPostState {
    selectedImages: string[];
    selectedCategories: number[];
    selectedGroups: number[];
    uploadQueue: PostDto[];
    uploadPending: boolean;
    uploadSuccess: boolean;
    bottomChoosePhotoSheetIsOpen: boolean;
    addingTimeout: boolean;
}

const initialState: AddPostState = {
    selectedImages: [],
    selectedCategories: [],
    selectedGroups: [],
    uploadQueue: [],
    uploadPending: false,
    uploadSuccess: false,
    addingTimeout: false,
    bottomChoosePhotoSheetIsOpen: false,
};

export function addPostReducer(state: AddPostState = initialState, action: AddPostActionTypes): AddPostState {
    switch (action.type) {
        case AddPostActions.SelectImage:
            const selectedImages = [action.selectedImage, ...state.selectedImages];
            return {
                ...state,
                selectedImages,
            };

        case AddPostActions.ResetUploadingPostState: {
            return {
                ...state,
                uploadPending: false,
            };
        }

        case AddPostActions.AddingTimeoutOccurring:
            return {
                ...state,
                addingTimeout: true,
                uploadPending: false,
            };

        case AddPostActions.AddingTimeoutReset:
            return {
                ...state,
                addingTimeout: false,
            };

        case AddPostActions.UnselectImage:
            const unselectedImages = state.selectedImages.filter(image => image !== action.unselectedImage);
            return {
                ...state,
                selectedImages: unselectedImages,
            };

        case AddPostActions.UnselectCategory:
            const unselectedCategories = state.selectedCategories.filter(
                category => category !== action.selectedCategory,
            );
            return {
                ...state,
                selectedCategories: unselectedCategories,
            };

        case AddPostActions.SelectCategory:
            const selectedCategories = [action.selectedCategory, ...state.selectedCategories];
            return {
                ...state,
                selectedCategories,
            };

        case AddPostActions.ResetStore:
            return {
                ...state,
                selectedImages: [],
                selectedCategories: [],
                selectedGroups: [],
            };

        case AddPostActions.SelectGroup: {
            const selectedGroups = [action.selectedGroup, ...state.selectedGroups];
            return {
                ...state,
                selectedGroups,
            };
        }

        case AddPostActions.UnselectGroup: {
            const unselectedGroups = state.selectedGroups.filter(group => group !== action.unselectedGroup);
            return {
                ...state,
                selectedGroups: unselectedGroups,
            };
        }

        case AddPostActions.AddToQueue: {
            return {
                ...state,
                uploadQueue: [...state.uploadQueue, action.post],
            };
        }

        case AddPostActions.RemoveFromQueue: {
            const preparedPosts = state.uploadQueue.filter(
                post => JSON.stringify(post) !== JSON.stringify(action.post),
            );
            return {
                ...state,
                uploadQueue: preparedPosts,
                uploadPending: false,
                uploadSuccess: false,
            };
        }

        case AddPostActions.UploadPost: {
            return {
                ...state,
                uploadPending: true,
                uploadSuccess: false,
            };
        }

        case AddPostActions.UploadPostSuccess: {
            return {
                ...state,
                uploadPending: false,
                uploadSuccess: true,
            };
        }

        case AddPostActions.UploadPostFailed: {
            return {
                ...state,
                uploadSuccess: false,
                uploadPending: false,
            };
        }

        default:
            return state;
    }
}
