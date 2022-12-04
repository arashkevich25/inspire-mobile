import { PostDto } from '@inspire/types';
import { AddPostActions } from 'app-constants/actionTypes';
import { ImagePostSize } from 'app-constants/ImagePostSize';
import { StorageKeys } from 'app-constants/storageKeys';
import { Dispatch } from 'redux';
import { initUserDetails } from './userDetails';

import { openCamera, openCropper, openPicker } from 'react-native-image-crop-picker';

import { client } from 'configs/graphql';
import { ADD_NEW_POST } from 'schemes';
import { getQueuedPostsFromStorage, RollbarLogging } from 'tools';
import { getPhotoCameraPermission, getPhotoLibraryPermission } from 'tools/getPermissions';
import { s3Uploader } from 'tools/s3Uploader';
import { setItemToStorage } from 'tools/storage';

export function selectImage(uri: string): any {
    return (dispatch: Dispatch) => {
        dispatch({
            type: AddPostActions.SelectImage,
            selectedImage: uri,
        });
    };
}

export function unselectImage(uri: string) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: AddPostActions.UnselectImage,
            unselectedImage: uri,
        });
    };
}

export function selectCategory(id: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: AddPostActions.SelectCategory,
            selectedCategory: id,
        });
    };
}

export function selectGroup(selectedGroup: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: AddPostActions.SelectGroup,
            selectedGroup,
        });
    };
}

export function unselectGroup(unselectedGroup: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: AddPostActions.UnselectGroup,
            unselectedGroup,
        });
    };
}

export function setAddingTimeoutOccurring() {
    return {
        type: AddPostActions.AddingTimeoutOccurring,
    };
}

export function resetAddingTimeoutOccurring() {
    return {
        type: AddPostActions.AddingTimeoutReset,
    };
}

export function unselectCategory(id: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: AddPostActions.UnselectCategory,
            selectedCategory: id,
        });
    };
}

// TODO change any to interface after @inspire/types release
export function publishPostAction(postProperties: PostDto, timeoutCallback: () => void, userId: number) {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AddPostActions.UploadPost,
        });
        const photosUri = [];

        for (const photo of postProperties.photos) {
            const response = await s3Uploader(
                {
                    uri: photo,
                },
                postProperties.categoriesIds,
                timeoutCallback,
            ).catch(error => {
                RollbarLogging.reportErrorAtSpace(error, 'publishPostAction - forloop');
                timeoutCallback();
            });

            // @ts-ignore
            photosUri.push(response.postResponse.location);
        }

        client
            .mutate({
                mutation: ADD_NEW_POST(
                    postProperties.categoriesIds,
                    postProperties.name.trim().replace(/"/g, ''),
                    postProperties.desc.trim().replace(/"/g, ''),
                    postProperties.location,
                    photosUri,
                    postProperties.isPrivatePost,
                    postProperties.isWorldPost,
                    postProperties.isFollowersPost,
                    postProperties.groupsIds,
                    postProperties.url,
                    postProperties.kind,
                ),
            })
            .then(async () => {
                dispatch(removeFromQueue(postProperties));
                dispatch({
                    type: AddPostActions.UploadPostSuccess,
                });
                initUserDetails(userId)(dispatch);
                const allQueuedPosts = await getQueuedPostsFromStorage(String(userId));
                if (!allQueuedPosts[userId]) {
                    return;
                }
                allQueuedPosts[userId] = allQueuedPosts[userId].filter(
                    item => JSON.stringify(item) !== JSON.stringify(postProperties),
                );
                await setItemToStorage(
                    StorageKeys.QueuedPosts,
                    JSON.stringify({
                        ...allQueuedPosts,
                        [userId]: allQueuedPosts[userId],
                    }),
                );
            })
            .catch((error: any) => {
                RollbarLogging.reportErrorAtSpace(error, 'publishPostAction');
                timeoutCallback();
            });
    };
}

export function resetStore() {
    return {
        type: AddPostActions.ResetStore,
    };
}

export function addToQueue(post: PostDto) {
    return {
        type: AddPostActions.AddToQueue,
        post,
    };
}

export function removeFromQueue(post: PostDto) {
    return {
        type: AddPostActions.RemoveFromQueue,
        post,
    };
}

export function resetPostUploadPendingState() {
    return {
        type: AddPostActions.ResetUploadingPostState,
    };
}

export function selectImagesFromCamera() {
    return (dispatch: Dispatch) => {
        openCamera({
            width: ImagePostSize.Width,
            height: ImagePostSize.Height,
            cropping: true,
        })
            .then((image: any) => dispatch(selectImage(image.path)))
            .catch(getPhotoCameraPermission);
    };
}

export function selectImagesFromPicker() {
    return (dispatch: Dispatch) => {
        openPicker({
            width: ImagePostSize.Width,
            height: ImagePostSize.Height,
            maxFiles: 10,
            cropping: true,
            multiple: true,
        })
            .then((image: any) => {
                dispatch(cropImages(image));
            })
            .catch(getPhotoLibraryPermission);
    };
}

function cropImages(images: any[]): any {
    return async (dispatch: Dispatch) => {
        for (let i = 0; i < images.length; i++) {
            const croppedImage = await openCropper({
                width: ImagePostSize.Width,
                height: ImagePostSize.Height,
                path: images[i].path,
                mediaType: 'photo',
                writeTempFile: false,
            });

            dispatch(selectImage(croppedImage.path));
        }
    };
}
