import { StorageKeys } from 'app-constants';

import { QueueAtStorage } from 'hooks';
import { getItemFromStorage } from 'tools/storage';

export async function getQueuedPostsFromStorage(userId: string): Promise<QueueAtStorage> {
    let queue: string = (await getItemFromStorage(StorageKeys.QueuedPosts)) as string;
    if (!queue) {
        queue = JSON.stringify({});
    }
    const allPosts: QueueAtStorage = JSON.parse(queue);
    if (!allPosts[userId]) {
        allPosts[userId] = [];
    }
    return allPosts;
}
