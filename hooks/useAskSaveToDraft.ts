import { FormikProps } from 'formik';
import { ComponentId } from 'navigation/constants';
import { MutableRefObject } from 'react';

import { Alert } from 'react-native';
import { BottomTabSelectedEvent, Navigation } from 'react-native-navigation';
import { useNavigationBottomTabSelect } from 'react-native-navigation-hooks';
import Toast from 'react-native-toast-message';

import { useDrafts } from 'hooks/useDrafts';
import { useForceUpdate } from 'hooks/useForceUpdate';
import I18n from 'tools/translate';

export function useAskSaveToDraft(
    formRef: MutableRefObject<FormikProps<any>> | MutableRefObject<null>,
    selectedCategories: number[],
    postData: any,
    selectedPhotos: string[],
    groupsForPost: number[],
    kind: number,
): () => void {
    const { saveDraft } = useDrafts();
    const forceUpdate = useForceUpdate();
    useNavigationBottomTabSelect((data: BottomTabSelectedEvent) => {
        if (data.unselectedTabIndex === 2 && data.selectedTabIndex !== 2) {
            forceUpdate();
            setTimeout(() => askSaveDraftHandle(), 0);
        }
    });

    async function askSaveDraftHandle() {
        if (formRef.current!.values.name) {
            Alert.alert(I18n.t('addPost.dialog.title'), I18n.t('addPost.dialog.description'), [
                {
                    text: I18n.t('addPost.dialog.buttons.cancel'),
                    style: 'cancel',
                    onPress: cancelButton,
                },
                {
                    text: I18n.t('addPost.dialog.buttons.save'),
                    onPress: async () => {
                        await saveAsDraft();
                    },
                },
            ]);
            return;
        } else {
            formRef.current!.resetForm({});
        }
    }

    async function saveAsDraft() {
        await saveDraft({
            id: 0,
            name: formRef.current!.values.name,
            desc: formRef.current!.values.desc,
            url: kind === 0 ? formRef.current!.values.url : '',
            categoriesIds: selectedCategories,
            location: postData.location,
            photos: selectedPhotos,
            isPrivatePost: postData.isPrivate,
            isFollowersPost: postData.isSubscribers,
            isWorldPost: postData.isPublic,
            groupsIds: groupsForPost,
            kind,
        });
        await cancelButton();
        Toast.show({
            text1: I18n.t('addPost.text.saveToDraftHeading'),
            text2: I18n.t('addPost.text.saveToDraftBody'),
            type: 'success',
        });
    }

    async function cancelButton() {
        formRef.current!.resetForm({});
        await Navigation.updateProps(ComponentId.AppAddPost, {
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

    return async function saveDraftHandle() {
        setTimeout(async () => {
            if (!formRef.current!.values.name) {
                Toast.show({
                    text1: I18n.t('addPost.text.saveToDraftEmptyNameErrorHeading'),
                    text2: I18n.t('addPost.text.saveToDraftEmptyNameErrorBody'),
                    type: 'error',
                });
                return;
            }
            await saveAsDraft();
            Navigation.mergeOptions(ComponentId.AppAddPost, {
                bottomTabs: {
                    currentTabIndex: 0,
                },
            });
        }, 0);
    };
}
