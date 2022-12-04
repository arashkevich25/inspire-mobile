import { PostKinds } from '@inspire/types';
import { addPostKeyboardSpacing } from 'app-constants/keyboardSpacing';
import React, { useRef } from 'react';
import { FormStyles } from '../../../../formStyles';
import { QuestionDetailsValues } from '../../../../types/QuestionDetailsValues';
import { HashTags } from '../../../HashTags';
import { Location } from '../../../Location';
import { SelectedCategories } from '../../../SelectedCategories';
import { SharingOptionals } from '../../../SharingOptionals';

import { ScrollView, View } from 'react-native';

import { Accordion, Button, ButtonTypes } from 'components';
import {
    useAddPostState,
    useAskSaveToDraft,
    useHashTagsInDescription,
    useKeyboardHeight,
    useKeyboardState,
    usePostSettings,
    usePublishPost,
    useTagsGlobalSearch,
} from 'hooks';
import I18n from 'tools/translate';
import { addPost } from '../../../../../../../e2e/selectors';
import { SummaryState } from '../../../AddBasicPost/components/AddForm/AddForm';
import { AddQuestionForm } from './components';
import { Photos } from './components/Photos/Photos';

interface AddFormProps {
    initialFormValues: QuestionDetailsValues;
    postSettings: SummaryState;
}

export function AddForm(props: AddFormProps) {
    const formRef = useRef<any>(null);
    const scrollViewRef = useRef<ScrollView>(null);
    const keyboardIsOpened = useKeyboardState();
    const keyboardHeight = useKeyboardHeight();
    const { tags } = useTagsGlobalSearch();
    const { clickHandle } = useHashTagsInDescription(formRef);
    const {
        selectedCategories,
        selectedPhotos,
        allCategories,
        groupsForPost,
        unselectPhoto,
        selectGroups,
        selectUnselectCategorySwitches,
    } = useAddPostState();
    const { postData, shareToSubscribers, shareToWorld, makePrivate, shareToGroup, setLocation } = usePostSettings(
        props.postSettings,
    );
    const saveDraftHandle = useAskSaveToDraft(
        formRef,
        selectedCategories,
        postData,
        selectedPhotos,
        groupsForPost,
        PostKinds.Question,
    );
    const publishPost = usePublishPost<QuestionDetailsValues>(
        formRef,
        selectedCategories,
        postData,
        selectedPhotos,
        groupsForPost,
    );

    function publishPostHandle(body: any) {
        publishPost(body, PostKinds.Question);
    }

    async function sendPostHandle() {
        await formRef.current!.submitForm();
    }

    return (
        <>
            <ScrollView
                keyboardShouldPersistTaps={!tags.length ? 'never' : 'always'}
                style={FormStyles.addQuestionContentContainer}
                ref={scrollViewRef}
                scrollEnabled={!tags.length}>
                <AddQuestionForm
                    initialValues={props.initialFormValues}
                    submitHandle={publishPostHandle}
                    ref={formRef}
                />
                <SelectedCategories
                    categories={allCategories}
                    selectCategoryHandle={selectUnselectCategorySwitches}
                    selectedCategories={selectedCategories}
                />
                <Accordion
                    containerStyles={FormStyles.accordionContainer}
                    labelStyles={FormStyles.accordionLabelContainer}
                    label={I18n.t('addPost.text.advanced')}>
                    <SharingOptionals
                        shareToGroupsHandle={shareToGroup}
                        isPrivate={postData.isPrivate}
                        isPublic={postData.isPublic}
                        isGroup={postData.isGroup}
                        isSubscribers={postData.isSubscribers}
                        subscribersHandle={shareToSubscribers}
                        publicHandle={shareToWorld}
                        privateHandle={makePrivate}
                        isPrivateDisabled={Boolean(groupsForPost.length)}
                        isPublicDisabled={Boolean(groupsForPost.length)}
                        isSubscribersDisabled={Boolean(groupsForPost.length)}
                        isChooseGroupsDisabled={!postData.isGroup}
                        isGroupsDisabled={Boolean(groupsForPost.length)}
                        selectGroupsHandle={selectGroups}
                        countSelectedGroup={groupsForPost.length}
                    />
                    <View style={FormStyles.accordionBodyContainer}>
                        <Photos selectedPhotos={selectedPhotos} unselectPhoto={unselectPhoto} />
                        <Location selectedLocation={postData.location} setLocationProps={setLocation} />
                    </View>
                </Accordion>
                <View style={FormStyles.buttonBox}>
                    <Button
                        testID={addPost.buttons.addPost}
                        isBlocked={!selectedCategories.length || !Object.values(postData).includes(true)}
                        translateKey="addPost.buttons.addPost"
                        onPress={sendPostHandle}
                        type={ButtonTypes.Filled}
                        color="white"
                    />
                    <Button
                        translateKey="addPost.buttons.saveDraft"
                        onPress={saveDraftHandle}
                        type={ButtonTypes.Link}
                        size="small"
                    />
                </View>
            </ScrollView>
            <View style={{ paddingBottom: keyboardHeight - addPostKeyboardSpacing }}>
                {tags.length && keyboardIsOpened ? <HashTags clickTag={clickHandle} tags={tags} /> : null}
            </View>
        </>
    );
}
