import { BasicPost, DetailsPost } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';
import { useFilters } from './useFilters';

import { Alert } from 'react-native';

import { followPost, unFollowPost } from 'actions';
import { AppState } from 'reducers';
import { followUnfollowPending } from 'selectors';
import I18n from 'tools/translate';

type UseFollowUnFollowPostOutput = [boolean, (post: DetailsPost | BasicPost, userId: number) => void];

export function useFollowUnFollowPost(): UseFollowUnFollowPostOutput {
    const dispatch = useDispatch();
    const followUnfollowIsPending = useSelector((state: AppState) => followUnfollowPending(state));
    const [selectedCategoryFilter, selectedMapFilter] = useFilters();

    function followUnFollowPost(post: DetailsPost | BasicPost, userId: number) {
        if (post.isInspiredByUser) {
            Alert.alert(I18n.t('inspired.dialog.title'), I18n.t('inspired.dialog.description'), [
                {
                    text: I18n.t('inspired.dialog.buttons.cancel'),
                    style: 'cancel',
                },
                {
                    text: I18n.t('inspired.dialog.buttons.remove'),
                    onPress: () => dispatch(unFollowPost(userId, post.id, post.user.id)),
                },
            ]);
            return;
        }
        dispatch(followPost(userId, post.id, post.user.id, selectedCategoryFilter, selectedMapFilter));
    }

    return [followUnfollowIsPending, followUnFollowPost];
}
