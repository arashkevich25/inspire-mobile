import { DetailsPost } from '@inspire/types';
import { ComponentId } from 'navigation/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useRootUserData } from './useRootUserData';

import { Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { getPostById, removePostById } from 'actions';
import { AppState } from 'reducers';
import { fetchedPostById, postByIdFetching, postByIdHasFetched } from 'selectors';
import I18n from 'tools/translate';

interface UsePostByIdOutput {
    fetchPostById: () => void;
    postByIdFetched: boolean;
    postByIdIsFetching: boolean;
    post: DetailsPost | null;
    removePost: () => void;
}

export function usePostById(postId: string): UsePostByIdOutput {
    const dispatch = useDispatch();
    const [userRootId] = useRootUserData();
    const postByIdFetched = useSelector((state: AppState) => postByIdHasFetched(state, postId));
    const postByIdIsFetching = useSelector((state: AppState) => postByIdFetching(state, postId));
    const post = useSelector((state: AppState) => fetchedPostById(state, postId));

    function fetchPostById() {
        dispatch(getPostById(postId, userRootId));
    }

    function removePost() {
        Alert.alert(I18n.t('postFullView.dialog.title'), I18n.t('postFullView.dialog.description'), [
            {
                text: I18n.t('postFullView.dialog.buttons.cancel'),
                style: 'cancel',
            },
            {
                text: I18n.t('postFullView.dialog.buttons.remove'),
                onPress: async () => {
                    dispatch(removePostById(postId, userRootId));
                    await Navigation.popToRoot(ComponentId.AppHome);
                    await Navigation.popToRoot(ComponentId.AppInspired);
                    await Navigation.popToRoot(ComponentId.AppRootWall);
                    await Navigation.popToRoot(ComponentId.AppRootProfile);
                },
            },
        ]);
    }

    return {
        fetchPostById,
        postByIdFetched,
        postByIdIsFetching,
        post,
        removePost,
    };
}
