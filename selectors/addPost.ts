import { AppState } from 'reducers';
import { AddPostState } from 'reducers/addPost';

function addPostState(state: AppState): AddPostState {
    return state.addPost;
}

export function getSelectedPhotos(state: AppState): string[] {
    return addPostState(state).selectedImages;
}

export function getSelectedCategories(state: AppState): number[] {
    return addPostState(state).selectedCategories;
}

export function selectedGroups(state: AppState): number[] {
    return addPostState(state).selectedGroups;
}

export function uploadQueue(state: AppState) {
    return addPostState(state).uploadQueue;
}

export function addingTimeout(state: AppState) {
    return addPostState(state).addingTimeout;
}

export function uploadPending(state: AppState) {
    return addPostState(state).uploadPending;
}
