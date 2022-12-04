import { PostDto } from '@inspire/types';
import { retryApiCount } from 'app-constants/retryApiCount';
import { useDispatch, useSelector } from 'react-redux';

import Toast from 'react-native-toast-message';

import {
    addToQueue,
    publishPostAction,
    removeFromQueue,
    resetAddingTimeoutOccurring,
    setAddingTimeoutOccurring,
} from 'actions';
import { resetPostUploadPendingState } from 'actions/addPost';
import { useRootUserData } from 'hooks/useRootUserData';
import { useStorageQueuedPosts } from 'hooks/useStorageQueuedPosts';
import { AppState } from 'reducers';
import { addingTimeout, uploadPending, uploadQueue } from 'selectors';
import I18n from 'tools/translate';

interface UseQueueOutput {
    postsQueue: PostDto[];
    addToQueueAction: (post: PostDto) => void;
    publishPost: (post: PostDto) => void;
    removeFromQueueAndStorage: (post: PostDto) => void;
    uploadPostPending: boolean;
    timeoutState: boolean;
    resetUploadingState: () => void;
}

export function useQueue(): UseQueueOutput {
    const dispatch = useDispatch();
    let tryCount = 0;
    let postCandidate: PostDto;
    const [userRootId] = useRootUserData();
    const postsQueue = useSelector((state: AppState) => uploadQueue(state));
    const timeoutState = useSelector((state: AppState) => addingTimeout(state));
    const uploadPostPending = useSelector((state: AppState) => uploadPending(state));
    const { removeFromStorage } = useStorageQueuedPosts(addToQueueAction);

    function addToQueueAction(post: PostDto) {
        dispatch(addToQueue(post));
    }

    function timeoutCallback() {
        if (tryCount >= retryApiCount) {
            Toast.show({
                text2: I18n.t('addPost.text.saveToDraftInternetIssueHeading'),
                type: 'error',
            });
            dispatch(setAddingTimeoutOccurring());
            return;
        }
        tryCount++;
        setTimeout(() => publishPost(postCandidate), 1000);
    }

    function publishPost(post: PostDto) {
        dispatch(resetAddingTimeoutOccurring());
        postCandidate = post;
        dispatch(publishPostAction(postCandidate, timeoutCallback, userRootId));
    }

    function removeFromQueueAndStorage(post: any) {
        dispatch(removeFromQueue(post));
        removeFromStorage(post);
    }

    function resetUploadingState() {
        dispatch(resetPostUploadPendingState());
    }

    return {
        postsQueue,
        addToQueueAction,
        publishPost,
        uploadPostPending,
        timeoutState,
        removeFromQueueAndStorage,
        resetUploadingState,
    };
}
