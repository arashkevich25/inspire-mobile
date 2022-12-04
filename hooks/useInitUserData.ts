import { Competition, GroupsWithUsers, SimplifiedPost, User, UserClub, UserContactData } from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import { initUserDetails } from 'actions';
import { AppState } from 'reducers';
import {
    getCompletedCompetitions,
    getFollowers,
    getGroups,
    getInitUserClubs,
    getInitUserDataFetched,
    getInitUserDataIsPending,
    getSubscribers,
    getUserInspiredCount,
    loadMoreIsAllowed,
    loadMorePostsIsPending,
    postsByUserId,
    productPostsByUserId,
    productsLoadMoreIsAllowed,
    recommendPostsByUserId,
    userContactData,
    userDetailsState,
} from 'selectors';

interface UseInitUserDataOutput {
    groups: GroupsWithUsers[];
    posts: SimplifiedPost[];
    details: User;
    followers: User[];
    subscribers: User[];
    initUserDataFetched: boolean;
    loadMoreIsPending: boolean;
    productsLoadMoreAllowed: boolean;
    initUserDataIsPending: boolean;
    loadMoreAllowed: boolean;
    initUserData: () => void;
    inspiredCount: number;
    initUserClubs: UserClub[];
    contactData: UserContactData;
    completedCompetition: Competition[];
    productPosts: SimplifiedPost[];
    recommendedPosts: SimplifiedPost[];
}

export function useInitUserData(userId: number): UseInitUserDataOutput {
    const dispatch = useDispatch();
    const groups = useSelector((state: AppState) => getGroups(state, userId));
    const posts = useSelector((state: AppState) => postsByUserId(state, userId));
    const productPosts = useSelector((state: AppState) => productPostsByUserId(state, userId));
    const recommendedPosts = useSelector((state: AppState) => recommendPostsByUserId(state, userId));
    const loadMoreIsPending = useSelector((state: AppState) => loadMorePostsIsPending(state, userId));
    const loadMoreAllowed = useSelector((state: AppState) => loadMoreIsAllowed(state, userId));
    const productsLoadMoreAllowed = useSelector((state: AppState) => productsLoadMoreIsAllowed(state, userId));
    const details = useSelector((state: AppState) => userDetailsState(state, userId));
    const contactData = useSelector((state: AppState) => userContactData(state, userId));
    const followers = useSelector((state: AppState) => getFollowers(state, userId));
    const inspiredCount = useSelector((state: AppState) => getUserInspiredCount(state, userId));
    const subscribers = useSelector((state: AppState) => getSubscribers(state, userId));
    const initUserDataFetched = useSelector((state: AppState) => getInitUserDataFetched(state, userId));
    const initUserDataIsPending = useSelector((state: AppState) => getInitUserDataIsPending(state, userId));
    const initUserClubs = useSelector((state: AppState) => getInitUserClubs(state, userId));
    const completedCompetition = useSelector((state: AppState) => getCompletedCompetitions(state, userId));

    function initUserData() {
        dispatch(initUserDetails(userId));
    }

    return {
        groups,
        posts,
        details,
        followers,
        loadMoreAllowed,
        subscribers,
        initUserDataFetched,
        initUserDataIsPending,
        initUserData,
        inspiredCount,
        loadMoreIsPending,
        initUserClubs,
        productsLoadMoreAllowed,
        contactData,
        completedCompetition,
        productPosts,
        recommendedPosts,
    };
}
