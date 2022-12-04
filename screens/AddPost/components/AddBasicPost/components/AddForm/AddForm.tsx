import { GeoDataResult, PostKinds, UserKinds } from '@inspire/types';
import { FormikProps } from 'formik';
import React, { useRef } from 'react';
import { FormStyles } from '../../../../formStyles';

import { ScrollView, View } from 'react-native';
import { useNavigationBottomTabSelect } from 'react-native-navigation-hooks';

import { Accordion, ButtonBorderedLink, ButtonFilled } from 'components';
import { Menu, menuControl, MenuItem } from 'components/BottomMenu';
import {
    useAddPostState,
    useAskSaveToDraft,
    useInitUserData,
    usePostSettings,
    usePublishPost,
    useRootUserData,
} from 'hooks';
import I18n from 'tools/translate';
import { HeaderImageScroll, Location, PostDetailsForm, SelectedCategories, SharingOptionals } from './components';
import { PostDetailsValues } from './components/PostDetailsForm/PostDetailsForm';

interface AddFormProps {
    initialFormValues: PostDetailsValues;
    postSettings: SummaryState;
}

export interface SummaryState {
    isPublic: boolean;
    isSubscribers: boolean;
    isPrivate: boolean;
    isGroup: boolean;
    location: GeoDataResult;
}

export function AddForm(props: AddFormProps) {
    const formRef = useRef<FormikProps<any>>(null);
    const postBody = useRef<any>();
    const scrollViewRef = useRef<ScrollView>(null);
    const [userId] = useRootUserData();
    const { details } = useInitUserData(userId);
    const { resetAddPostStore } = useAddPostState();

    function setPostKindToBasicAndPublish() {
        publishPost(postBody.current, PostKinds.BasicPost);
        menuControl.closeMenu();
        resetAddPostStore();
    }
    function setPostKindToProductAndPublish() {
        publishPost(postBody.current, PostKinds.ProductPost);
        menuControl.closeMenu();
        resetAddPostStore();
    }

    const menuChildren = (
        <Menu>
            <MenuItem title={I18n.t('addPost.buttons.publicAsProduct')} action={setPostKindToProductAndPublish} />
            <MenuItem title={I18n.t('addPost.buttons.publicAsBasic')} action={setPostKindToBasicAndPublish} />
        </Menu>
    );

    useNavigationBottomTabSelect(data => {
        if (data.selectedTabIndex !== 2) {
            scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
        }
    });

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
        PostKinds.BasicPost,
    );
    const publishPost = usePublishPost<PostDetailsValues>(
        formRef,
        selectedCategories,
        postData,
        selectedPhotos,
        groupsForPost,
    );

    async function sendPostHandle() {
        await formRef.current!.submitForm();
        scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
    }

    async function publishPostHandle(values: any) {
        if (details.kind === UserKinds.ClubMember) {
            await menuControl.openMenu({ children: menuChildren });
            postBody.current = values;
        } else {
            publishPost(values, PostKinds.BasicPost);
            resetAddPostStore();
        }
    }

    return (
        <>
            <HeaderImageScroll unselectPhoto={unselectPhoto} selectedPhotos={selectedPhotos} ref={scrollViewRef}>
                <View style={FormStyles.contentContainer}>
                    <PostDetailsForm
                        initialValues={props.initialFormValues}
                        ref={formRef}
                        submitHandle={publishPostHandle}
                    />
                    <Location selectedLocation={postData.location} setLocationProps={setLocation} />
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
                    </Accordion>
                    <View style={FormStyles.buttonBox}>
                        <View style={FormStyles.publicButton}>
                            <ButtonFilled
                                isDisabled={
                                    (postData.isGroup && !groupsForPost.length) ||
                                    !selectedPhotos.length ||
                                    !selectedCategories.length ||
                                    !Object.values(postData).includes(true)
                                }
                                translateKey="addPost.buttons.addPost"
                                onPressHandle={sendPostHandle}
                            />
                        </View>
                        <View style={FormStyles.saveDraftButton}>
                            <ButtonBorderedLink
                                onPressHandle={saveDraftHandle}
                                translateKey="addPost.buttons.saveDraft"
                            />
                        </View>
                    </View>
                </View>
            </HeaderImageScroll>
            {/*TODO Add hash tags when will be works */}
            {/* <View style={{ paddingBottom: keyboardHeight - addPostKeyboardSpacing }}>
                {tags.length && keyboardIsOpened ? <HashTags clickTag={clickHandle} tags={tags} /> : null}
            </View> */}
        </>
    );
}
