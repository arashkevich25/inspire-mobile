import { UserKinds } from '@inspire/types';
import { isIphone, StorageKeys } from 'app-constants';
import React, { useEffect } from 'react';
import { BasicProfile } from './BasicProfile';
import { ClubMember } from './ClubMember';

import { Navigation } from 'react-native-navigation';

import { Drawer, Loader, NoConnectionPlug } from 'components';
import { useBlockedUsers, useInitUserData, useIsRoot, useLoadUserPosts, useNetworkState } from 'hooks';
import { AndroidEditUserDetails, IosEditUserDetails } from 'navigation/components';
import { getItemFromStorage, rateInspireApp } from 'tools';
import { NavProps } from 'types';
import { ClubMemberMoreInfoDrawer, InaccessibleUser } from './components';

interface ProfileProps extends NavProps {
    userId: number;
}

export function Profile(props: ProfileProps) {
    const [isRoot, rootDetails] = useIsRoot(props.userId);
    const { rootUserIsBlocked } = useBlockedUsers(props.userId);

    async function openUserDetails() {
        await Navigation.push(props.componentId, { component: isIphone ? IosEditUserDetails : AndroidEditUserDetails });
    }

    const { loadMorePostsHandle, loadMoreProductsPostsHandle, loadMoreRecommendedPostsHandle } = useLoadUserPosts(
        props.userId,
    );
    const { isInternetReachableState } = useNetworkState();
    const {
        details,
        posts,
        subscribers,
        followers,
        initUserDataFetched,
        initUserDataIsPending,
        inspiredCount,
        initUserData,
        loadMoreIsPending,
        initUserClubs,
        contactData,
        completedCompetition,
        productPosts,
        recommendedPosts,
        loadMoreAllowed,
        productsLoadMoreAllowed,
    } = useInitUserData(props.userId);

    useEffect(() => {
        if (!initUserDataFetched && !initUserDataIsPending && !isRoot) {
            initUserData();
        }
        rateApplication();
    }, []);

    async function rateApplication() {
        const isHasRated = await getItemFromStorage(StorageKeys.applicationHasRated);

        if (!Boolean(isHasRated) && rootDetails.postsCount > 2) {
            rateInspireApp();
        }
    }

    if (rootUserIsBlocked()) {
        return <InaccessibleUser />;
    }

    if (!isInternetReachableState && !isRoot) {
        return <NoConnectionPlug />;
    }

    if (!details.id) {
        return <Loader />;
    }

    switch (details.kind) {
        case UserKinds.Basic: {
            return (
                <BasicProfile
                    openDetails={openUserDetails}
                    loadMoreAllowed={loadMoreAllowed}
                    onRefresh={initUserData}
                    isRefreshing={initUserDataIsPending}
                    contactData={contactData}
                    componentId={props.componentId}
                    userId={props.userId}
                    loadMoreIsPending={loadMoreIsPending}
                    posts={posts}
                    recommendedPosts={recommendedPosts}
                    isRoot={isRoot}
                    loadMorePostsHandle={loadMorePostsHandle}
                    loadMoreRecommendedPostsHandle={loadMoreRecommendedPostsHandle}
                    details={details}
                    rootDetails={rootDetails}
                    followers={followers}
                    subscribers={subscribers}
                    inspiredCount={inspiredCount}
                />
            );
        }

        case UserKinds.ClubMember: {
            return (
                <Drawer
                    drawerChildren={
                        <ClubMemberMoreInfoDrawer
                            subscribers={subscribers}
                            followers={followers}
                            componentId={props.componentId}
                            inspiredCount={details.inspiredCount}
                            postsCount={details.postsCount}
                            followersCount={details.followersCount}
                            subscribersCount={details.subscribersCount}
                            recommendCount={details.recommendCount}
                            viewsCount={details.viewsCount}
                            isRoot={isRoot}
                        />
                    }>
                    {(openDrawer: any) => (
                        <ClubMember
                            loadMoreAllowed={loadMoreAllowed}
                            productsLoadMoreAllowed={productsLoadMoreAllowed}
                            productPosts={productPosts}
                            openDetails={openUserDetails}
                            loadMorePostsHandle={loadMorePostsHandle}
                            loadMoreProductsPostsHandle={loadMoreProductsPostsHandle}
                            onRefresh={initUserData}
                            loadMoreIsPending={loadMoreIsPending}
                            isRefreshing={initUserDataIsPending}
                            completedCompetition={completedCompetition}
                            contactData={contactData}
                            openDrawer={openDrawer}
                            posts={posts}
                            userId={props.userId}
                            componentId={props.componentId}
                            details={details}
                            rootDetails={rootDetails}
                            followers={followers}
                            subscribers={subscribers}
                            isRoot={isRoot}
                            userClubs={initUserClubs}
                        />
                    )}
                </Drawer>
            );
        }

        default: {
            return (
                <BasicProfile
                    openDetails={openUserDetails}
                    loadMoreAllowed={loadMoreAllowed}
                    onRefresh={initUserData}
                    isRefreshing={initUserDataIsPending}
                    contactData={contactData}
                    componentId={props.componentId}
                    userId={props.userId}
                    loadMoreIsPending={loadMoreIsPending}
                    posts={posts}
                    recommendedPosts={recommendedPosts}
                    isRoot={isRoot}
                    loadMorePostsHandle={loadMorePostsHandle}
                    loadMoreRecommendedPostsHandle={loadMoreRecommendedPostsHandle}
                    details={details}
                    rootDetails={rootDetails}
                    followers={followers}
                    subscribers={subscribers}
                    inspiredCount={inspiredCount}
                />
            );
        }
    }
}
