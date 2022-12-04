import { ComponentId } from 'navigation/constants';
import { useDispatch } from 'react-redux';
import { AddPostTab, AddQuestionPostTab } from 'screens/AddPost/constants/switchSettings';

import { Navigation } from 'react-native-navigation';

import { resetStore, selectCategory, selectImage } from 'actions';
import { Draft } from 'types';

interface UseEditPostsOutput {
    editDraft: (draft: Draft) => void;
}

export function useEditPosts(): UseEditPostsOutput {
    const dispatch = useDispatch();

    async function editDraft(draft: Draft) {
        dispatch(resetStore());
        draft.post.photos.reverse().forEach((photo: string) => dispatch(selectImage(photo)));
        draft.post.categoriesIds.forEach((category: number) => dispatch(selectCategory(category)));

        await Navigation.updateProps(ComponentId.AppAddPost, {
            initialFormValues: {
                name: draft.post.name,
                desc: draft.post.desc,
                url: draft.post.url,
            },
            postSettings: {
                isPublic: draft.post.isWorldPost,
                isSubscribers: draft.post.isFollowersPost,
                isPrivate: draft.post.isPrivatePost,
                isGroup: !!draft.post.groupsIds?.length,
                location: draft.post.location,
            },
            defaultActiveTab: draft.post.kind === 0 ? AddPostTab : AddQuestionPostTab,
        });
        await Navigation.popTo(ComponentId.AppAddPost);
        await Navigation.updateProps(ComponentId.AppAddPost, {
            defaultActiveTab: null,
        });
    }

    return {
        editDraft,
    };
}
