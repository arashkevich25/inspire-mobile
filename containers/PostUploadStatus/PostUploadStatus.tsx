import { PostDto } from '@inspire/types';
import React from 'react';

import { Alert, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Toast from 'react-native-toast-message';

import { useDrafts, useQueue } from 'hooks';
import { winWidth } from 'tools';
import I18n from 'tools/translate';
import { globalTestsSelectors } from '../../../e2e/selectors';
import { SmallQueuedPost } from './components';
import { Styles } from './components/SmallQueuedPost/styles';

export function PostUploadStatus() {
    const { postsQueue, publishPost, uploadPostPending, removeFromQueueAndStorage } = useQueue();
    const { saveDraft } = useDrafts();

    function repeat(postQueued: PostDto) {
        publishPost(postQueued);
    }

    function remove(postQueued: PostDto) {
        Alert.alert(
            I18n.t('addPost.dialog.cancelAddPostAfterTimeoutTitle'),
            I18n.t('addPost.dialog.cancelAddPostAfterTimeoutDescription'),
            [
                {
                    text: I18n.t('addPost.dialog.cancelAddPostAfterTimeoutSaveAsDraft'),
                    onPress: () => {
                        saveDraft(postQueued);
                        Toast.show({
                            text2: I18n.t('addPost.text.saveToDraftInternetIssueBody'),
                            type: 'success',
                        });
                        removeFromQueueAndStorage(postQueued);
                    },
                },
                {
                    text: I18n.t('addPost.dialog.buttons.cancel'),
                    style: 'cancel',
                },
                {
                    text: I18n.t('addPost.dialog.cancelAddPostAfterTimeoutRemove'),
                    onPress: () => removeFromQueueAndStorage(postQueued),
                },
            ],
            { cancelable: false },
        );
    }

    if (!postsQueue.length) {
        return <View />;
    }

    return (
        <View style={Styles.contentContainer} testID={globalTestsSelectors.containers.postUploadStatus}>
            {postsQueue.map((post, index) => (
                <SmallQueuedPost
                    timeoutState={!uploadPostPending}
                    postQueued={post}
                    repeat={repeat}
                    remove={remove}
                    key={index}
                />
            ))}
            {uploadPostPending ? (
                <Progress.Bar
                    indeterminate={true}
                    animationType="spring"
                    animated={true}
                    width={winWidth}
                    height={0.5}
                />
            ) : null}
        </View>
    );
}
