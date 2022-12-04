import { PostDto } from '@inspire/types';

export enum AddPostActions {
    SelectImage = '[Add post] select image',
    UnselectImage = '[Add post] unselect image',
    SelectCategory = '[Add post] select category',
    UnselectCategory = '[Add post] unselect category',
    ResetStore = '[Add post] reset store',

    AddToQueue = '[Add post] add to queue',
    RemoveFromQueue = '[Add post] remove form queue',
    AddingTimeoutOccurring = '[Add post] timeout occuring',
    AddingTimeoutReset = '[Add post] timeout reset',

    SelectGroup = '[Add post] select group',
    UnselectGroup = '[Add post] unselect group',

    UploadPost = '[Add post] upload post',
    UploadPostSuccess = '[Add post] upload post success',
    UploadPostFailed = '[Add post] upload post failed',
    ResetUploadingPostState = '[Add post] reset uploading posts state',
}

interface ResetUploadingPostState {
    type: typeof AddPostActions.ResetUploadingPostState;
}

interface UploadPost {
    type: typeof AddPostActions.UploadPost;
}

interface AddingTimeoutOccurring {
    type: typeof AddPostActions.AddingTimeoutOccurring;
}

interface AddingTimeoutReset {
    type: typeof AddPostActions.AddingTimeoutReset;
}

interface UploadPostSuccess {
    type: typeof AddPostActions.UploadPostSuccess;
}

interface UploadPostFailed {
    type: typeof AddPostActions.UploadPostFailed;
}

interface AddPostToQueue {
    type: typeof AddPostActions.AddToQueue;
    post: PostDto;
}

interface RemovePostFromQueue {
    type: typeof AddPostActions.RemoveFromQueue;
    post: PostDto;
}

interface ResetStore {
    type: typeof AddPostActions.ResetStore;
}

interface SelectImageAddPostAction {
    type: typeof AddPostActions.SelectImage;
    selectedImage: string;
}

interface UnselectImageAddPostAction {
    type: typeof AddPostActions.UnselectImage;
    unselectedImage: string;
}

interface SelectGroup {
    type: typeof AddPostActions.SelectGroup;
    selectedGroup: number;
}

interface UnselectGroup {
    type: typeof AddPostActions.UnselectGroup;
    unselectedGroup: number;
}

interface SelectCategoryAddPostAction {
    type: typeof AddPostActions.SelectCategory;
    selectedCategory: number;
}

interface UnselectCategoryAddPostAction {
    type: typeof AddPostActions.UnselectCategory;
    selectedCategory: number;
}

export type AddPostActionTypes =
    | SelectImageAddPostAction
    | UnselectImageAddPostAction
    | SelectCategoryAddPostAction
    | UnselectCategoryAddPostAction
    | ResetStore
    | SelectGroup
    | UnselectGroup
    | AddPostToQueue
    | AddingTimeoutOccurring
    | AddingTimeoutReset
    | RemovePostFromQueue
    | UploadPost
    | UploadPostSuccess
    | ResetUploadingPostState
    | UploadPostFailed;
