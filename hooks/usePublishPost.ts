import { PostDto, PostKinds } from '@inspire/types';
import { FormikProps } from 'formik';
import { ComponentId } from 'navigation/constants';
import { MutableRefObject } from 'react';

import { Navigation } from 'react-native-navigation';

import { useQueue, useStorageQueuedPosts } from 'hooks';
import { initLocation } from 'screens/AddPost/components/AddBasicPost/components/AddForm/constants/initLocation';

export function usePublishPost<T>(
    formRef: MutableRefObject<FormikProps<any>> | MutableRefObject<any>,
    selectedCategories: number[],
    postData: any,
    selectedPhotos: string[],
    groupsForPost: number[],
): (values: T, kind: PostKinds) => void {
    const { addToQueueAction, publishPost } = useQueue();
    const { savePostToStorage } = useStorageQueuedPosts(addToQueueAction);

    function publishBasicPost(values: any, kind: PostKinds) {
        const postCandidate: PostDto = {
            ...values,
            url: '',
            categoriesIds: selectedCategories,
            // TODO to change initLocation
            location: postData.location || initLocation,
            photos: selectedPhotos,
            isPrivatePost: postData.isPrivate,
            isFollowersPost: postData.isSubscribers,
            isWorldPost: postData.isPublic,
            groupsIds: groupsForPost,
            kind,
        };
        addToQueueAction(postCandidate);
        savePostToStorage(postCandidate);
        publishPost(postCandidate);
        formRef.current!.resetForm({});
        Navigation.mergeOptions(ComponentId.AppAddPost, {
            bottomTabs: {
                currentTabIndex: 0,
            },
        });
        Navigation.updateProps(ComponentId.AppAddPost, {
            initialFormValues: {
                name: '',
                desc: '',
                url: '',
            },
            postSettings: {
                isPublic: true,
                isSubscribers: false,
                isPrivate: false,
                isGroup: false,
                location: null,
            },
        });
    }

    // async function publishQuestionPost(values: any) {
    //     const uri = await captureRef(values.background.background, {
    //         format: 'jpg',
    //         quality: 0.8,
    //     });
    //     const postCandidate = {
    //         name: values.name,
    //         desc: values.desc,
    //         url: '',
    //         categoryId: selectedCategories,
    //         // TODO to change initLocation
    //         localization: postData.location || initLocation,
    //         photos: [uri, ...selectedPhotos],
    //         isPrivate: postData.isPrivate,
    //         isFollowersPost: postData.isSubscribers,
    //         isWorldPost: postData.isPublic,
    //         groupsIds: groupsForPost,
    //         kind: 1,
    //     };
    //     addToQueueAction(postCandidate);
    //     savePostToStorage(postCandidate);
    //     publishPost(postCandidate);
    //     formRef.current!.resetForm({});
    //     Navigation.mergeOptions(ComponentId.AppAddPost, {
    //         bottomTabs: {
    //             currentTabIndex: 0,
    //         },
    //     });
    //     Navigation.updateProps(ComponentId.AppAddPost, {
    //         initialFormValues: {
    //             name: '',
    //             desc: '',
    //             url: '',
    //         },
    //         postSettings: {
    //             isPublic: true,
    //             isSubscribers: false,
    //             isPrivate: false,
    //             isGroup: false,
    //             location: null,
    //         },
    //     });
    // }

    return publishBasicPost;
}
