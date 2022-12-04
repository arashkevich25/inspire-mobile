import { mostReadable } from '@ctrl/tinycolor';
import { DetailsPost } from '@inspire/types';
import { isIphone } from 'app-constants';
/* eslint-disable prettier/prettier */
import { ImagePostSize } from 'app-constants/ImagePostSize';
import { Profile } from 'navigation';
import React, { createRef, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// @ts-ignore
import { getColorFromURL } from 'rn-dominant-color';

import { FlatList, TextInput, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { CustomRefreshControl, FlatLitBottomLoadingBar, FloatBackButton } from 'components';
import {
    useComments,
    useFollowUnFollow,
    useFollowUnFollowPost,
    useIsRoot,
    usePostById,
    usePostRecommend,
    usePostSend,
} from 'hooks';
import { AppState } from 'reducers';
import { getUserId, isAuthenticated } from 'selectors';
import { calcPhotoHeight, winWidth } from 'tools';
import { NavProps } from 'types';
import {
    ActionPanel,
    Categories,
    Comment,
    CommentInput,
    Description,
    Groups,
    Localization,
    Name,
    PhotoGallery,
    ShareOptions,
    UserAndStatsBar,
} from './components';
import { PostMenu } from './components/PostMenu/PostMenu';

import { Styles } from './styles';

export interface ShowPostModalProps extends NavProps {
    post: DetailsPost;
}

export function ShowPostModal({ post, componentId }: ShowPostModalProps) {
    const userId = useSelector((state: AppState) => getUserId(state));
    const [, followUnFollowPost] = useFollowUnFollowPost();
    const {
        addCommentHandle,
        addingCommentPending,
        commentsByPostId,
        loadMore,
        loadMoreCommentsPendingState,
        getComments,
    } = useComments(post.id);
    const { increaseOrDecreasePostRecommend } = usePostRecommend();
    const authenticated = useSelector((state: AppState) => isAuthenticated(state));
    const { fetchPostById, postByIdIsFetching } = usePostById(post.id);
    const { increasePostSendHandle } = usePostSend();
    const inputRef = createRef<TextInput>();
    const flatListRef = useRef<FlatList<any>>();
    const [isRoot, rootDetails] = useIsRoot(post.user.id);
    const [isFriend, followUser, unFollowUser] = useFollowUnFollow(post.user.id, rootDetails);
    const [sharingIsVisible, setSharingVisible] = useState(false);
    const [dominantColor, setDominantColor] = useState('#FFFFFF');

    useMemo(() => {
        getColorFromURL(post.photos[0].uri).then((colors: any) => {
            setDominantColor(mostReadable(colors.background, ['#ffffff', '#000000']).toHexString());
        });
    }, [post.photos]);

    function followUnfollowUser() {
        if (isFriend) {
            unFollowUser();
            return;
        }
        followUser();
    }

    async function redirectToProfile(userId: number) {
        if (authenticated) {
            await Navigation.push(componentId, { component: Profile(userId) });
        }
    }

    async function redirectToPostCreaterProfile() {
        if (authenticated) {
            await redirectToProfile(post.user.id);
        }
    }

    function inspirePost() {
        followUnFollowPost(post, userId);
    }

    function recommendPost() {
        increaseOrDecreasePostRecommend(post.id, post.userHasRecommend);
    }

    async function sendPost() {
        increasePostSendHandle(post.id);
        setSharingVisible(!sharingIsVisible);
    }

    function refreshPost() {
        getComments();
        fetchPostById();
    }

    function backHandle() {
        Navigation.pop(componentId);
    }

    return (
        <>
            <View style={Styles.backButtonContainer}>
                <View style={Styles.backButtonBox}>
                    {isIphone ? (
                        <FloatBackButton color={dominantColor} disabledBackground={true} backHandle={backHandle} />
                    ) : null}
                </View>
                <View>
                    <PostMenu color={dominantColor} post={post} />
                </View>
            </View>
            <FlatList
                // @ts-ignore
                ref={flatListRef}
                onEndReached={loadMore}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={2}
                ListFooterComponent={<FlatLitBottomLoadingBar isLoading={loadMoreCommentsPendingState} />}
                refreshControl={<CustomRefreshControl refreshing={postByIdIsFetching} onRefresh={refreshPost} />}
                data={commentsByPostId}
                renderItem={({ item }) => (
                    <Comment
                        createdAt={item.createdAt}
                        message={item.comment}
                        openProfileHandle={redirectToProfile}
                        user={item.user}
                    />
                )}
                style={Styles.contentContainer}
                ListHeaderComponentStyle={Styles.listHeader}
                ListHeaderComponent={
                    <>
                        <View style={{ height: calcPhotoHeight(ImagePostSize.Height, ImagePostSize.Width, winWidth) }}>
                            <PhotoGallery photos={post.photos} />
                        </View>
                        {authenticated ? (
                            <View style={Styles.dataLine}>
                                <ActionPanel
                                    inspiredCounter={post.inspirationCount}
                                    recommendCounter={post.recommends}
                                    sendPostHandle={sendPost}
                                    createdAt={post.createdAt}
                                    recommendIsActive={post.userHasRecommend}
                                    inspiredIsActive={post.isInspiredByUser}
                                    inspirePressHandle={inspirePost}
                                    recommendPressHandle={recommendPost}
                                />
                            </View>
                        ) : null}
                        <View style={Styles.dataLine}>
                            <Name name={post.name} />
                            <UserAndStatsBar
                                followUnfollowHandle={followUnfollowUser}
                                isFriend={isFriend}
                                openProfileHandle={redirectToPostCreaterProfile}
                                post={post}
                                isRoot={isRoot}
                                authenticated={authenticated}
                                createdAt={post.createdAt}
                            />
                            {post.groupsRelations ? (
                                <Groups postName={post.name} componentId={componentId} groups={post.groupsRelations} />
                            ) : null}
                        </View>
                        <View style={Styles.dataLine}>
                            <Description componentId={componentId} description={post.desc} />
                        </View>
                        {post.location ? (
                            <View style={Styles.dataLine}>
                                <Localization coords={post.location.coordinates} text={post.location.address.address} />
                            </View>
                        ) : null}
                        <View style={Styles.dataLine}>
                            <Categories categories={post.categoriesRelations.categories} />
                        </View>
                    </>
                }
            />
            {authenticated ? (
                <CommentInput
                    user={rootDetails}
                    ref={inputRef}
                    addingIsPending={addingCommentPending}
                    addCommentHandle={addCommentHandle}
                />
            ) : null}
            <ShareOptions
                commentsCount={commentsByPostId.length}
                post={post}
                closeHandle={sendPost}
                isVisible={sharingIsVisible}
            />
        </>
    );
}
