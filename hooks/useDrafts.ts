import { PostDto } from '@inspire/types';
import { StorageKeys } from 'app-constants/storageKeys';

import { getRandomString } from 'tools';
import { getItemFromStorage, setItemToStorage } from 'tools/storage';
import { Draft } from 'types';

interface UseDraftsOutput {
    saveDraft: (post: PostDto) => void;
    getDrafts: () => Promise<Draft[]>;
    removeDraft: (id: string) => void;
}

interface DraftsByUserId {
    [key: string]: Draft[];
}

export function useDrafts(): UseDraftsOutput {
    async function saveDraft(post: PostDto) {
        const userId: string = (await getItemFromStorage(StorageKeys.UserId)) as string;
        let drafts: string = (await getItemFromStorage(StorageKeys.PostDrafts)) as string;
        if (!drafts) {
            drafts = JSON.stringify({});
        }
        const allDrafts: DraftsByUserId = JSON.parse(drafts);
        if (!allDrafts[userId]) {
            allDrafts[userId] = [];
        }
        allDrafts[userId].push({ id: getRandomString(), createdDate: new Date(), post });
        await setItemToStorage(StorageKeys.PostDrafts, JSON.stringify(allDrafts));
    }

    async function getDrafts(): Promise<Draft[]> {
        const userId: string = (await getItemFromStorage(StorageKeys.UserId)) as string;
        const drafts = (await getItemFromStorage(StorageKeys.PostDrafts)) as string;
        if (!drafts) {
            return [];
        }
        const parsedDrafts = JSON.parse(drafts)[userId];
        if (!parsedDrafts) {
            return [];
        }
        return parsedDrafts.reverse();
    }

    async function removeDraft(id: string) {
        const userId: string = (await getItemFromStorage(StorageKeys.UserId)) as string;
        const drafts: string = (await getItemFromStorage(StorageKeys.PostDrafts)) as string;
        const allDrafts: DraftsByUserId = JSON.parse(drafts) as DraftsByUserId;
        const preparedDrafts = allDrafts[userId].filter(draft => draft.id !== id);
        await setItemToStorage(StorageKeys.PostDrafts, JSON.stringify({ ...allDrafts, [userId]: preparedDrafts }));
    }

    return {
        saveDraft,
        getDrafts,
        removeDraft,
    };
}
