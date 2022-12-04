import { PostDto } from '@inspire/types';
import { StorageKeys } from 'app-constants/storageKeys';

import { getQueuedPostsFromStorage } from 'tools';
import { getItemFromStorage, setItemToStorage } from 'tools/storage';

export interface QueueAtStorage {
    [key: string]: PostDto[];
}

interface UseStorageQueuedPostsOutPut {
    savePostToStorage: (post: PostDto) => void;
    removeFromStorage: (post: PostDto) => void;
    rehydrateFromStorage: () => void;
}

export function useStorageQueuedPosts(addToQueueAction: (post: PostDto) => void): UseStorageQueuedPostsOutPut {
    async function savePostToStorage(post: PostDto) {
        const userId: string = (await getItemFromStorage(StorageKeys.UserId)) as string;
        const allPosts = await getQueuedPostsFromStorage(userId);
        allPosts[userId] = allPosts[userId].filter(item => JSON.stringify(item) !== JSON.stringify(post));
        allPosts[userId].push(post);
        await setItemToStorage(StorageKeys.QueuedPosts, JSON.stringify(allPosts));
    }
    async function rehydrateFromStorage() {
        const userId: string = (await getItemFromStorage(StorageKeys.UserId)) as string;
        const allPosts = await getQueuedPostsFromStorage(userId);
        if (!allPosts[userId].length) {
            return;
        }
        allPosts[userId].forEach((item: PostDto) => addToQueueAction(item));
    }

    async function removeFromStorage(post: PostDto) {
        const userId: string = (await getItemFromStorage(StorageKeys.UserId)) as string;
        const allPosts = await getQueuedPostsFromStorage(userId);
        await setItemToStorage(
            StorageKeys.QueuedPosts,
            JSON.stringify({
                ...allPosts,
                [userId]: allPosts[userId].filter(item => JSON.stringify(item) !== JSON.stringify(post)),
            }),
        );
    }

    return {
        savePostToStorage,
        rehydrateFromStorage,
        removeFromStorage,
    };
}
