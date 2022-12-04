import {
    AddClubMemberAdditionalDataDto,
    ClubDetails,
    ClubOffset,
    Competition,
    SimplifiedPost,
    User,
} from '@inspire/types';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchClubById,
    fetchClubCompetitionsById,
    fetchClubMembersById,
    joinToClub,
    leaveClub,
    loadMoreClubPosts,
    updateAdditionalClubMemberData,
} from 'actions';
import { AppState } from 'reducers';
import {
    clubCompetitionsHasFetched,
    clubCompetitionsIsFetching,
    clubHasFetched,
    clubIsFetching,
    clubMembersHasFetched,
    clubMembersIsFetching,
    clubMembersSkipCounter,
    getClubCompetitions,
    getClubDetails,
    getClubErrorCode,
    getClubMembers,
    getClubPosts,
    getClubPostsHasFetched,
    getClubPostsIsFetching,
    getClubPostsLoadMoreIsAllowed,
    getClubPostsSkipCounter,
    isAuthenticated,
} from 'selectors';

type UseClubOutput = {
    clubDetailsIsFetching: boolean;
    clubDetailsHasFetched: boolean;
    clubMembersDetailsIsFetching: boolean;
    clubMembersDetailsHasFetched: boolean;
    clubMembersDetails: User[];
    clubDetails: ClubDetails | null;
    fetchClubDetails: () => void;
    loadMorePosts: () => void;
    fetchClubMembers: () => void;
    fetchClubCompetitions: () => void;
    joinToClubHandle: () => void;
    leaveClubHandle: () => void;
    competitionsIsFetching: boolean;
    competitionsHasFetched: boolean;
    competitions: Competition[];
    postsIsFetching: boolean;
    postsHasFetched: boolean;
    postsLoadMoreIsAllowed: boolean;
    isAuthenticated: boolean;
    clubErrorCode: string;
    posts: SimplifiedPost[];
    updateAdditionalData: (updateUser: AddClubMemberAdditionalDataDto) => void;
};

export function useClub(uniqueName: string): UseClubOutput {
    const dispatch = useDispatch();
    const clubDetailsIsFetching = useSelector((state: AppState) => clubIsFetching(state, uniqueName));
    const clubDetailsHasFetched = useSelector((state: AppState) => clubHasFetched(state, uniqueName));
    const clubDetails = useSelector((state: AppState) => getClubDetails(state, uniqueName));

    const clubMembersDetailsIsFetching = useSelector((state: AppState) => clubMembersIsFetching(state, uniqueName));
    const clubMembersDetailsHasFetched = useSelector((state: AppState) => clubMembersHasFetched(state, uniqueName));
    const clubMembersDetails = useSelector((state: AppState) => getClubMembers(state, uniqueName));
    const clubMembersSkip = useSelector((state: AppState) => clubMembersSkipCounter(state, uniqueName));

    const competitionsIsFetching = useSelector((state: AppState) => clubCompetitionsIsFetching(state, uniqueName));
    const competitionsHasFetched = useSelector((state: AppState) => clubCompetitionsHasFetched(state, uniqueName));
    const competitions = useSelector((state: AppState) => getClubCompetitions(state, uniqueName));

    const postsIsFetching = useSelector((state: AppState) => getClubPostsIsFetching(state, uniqueName));
    const postsHasFetched = useSelector((state: AppState) => getClubPostsHasFetched(state, uniqueName));
    const postsSkipCounter = useSelector((state: AppState) => getClubPostsSkipCounter(state, uniqueName));
    const postsLoadMoreIsAllowed = useSelector((state: AppState) => getClubPostsLoadMoreIsAllowed(state, uniqueName));
    const clubErrorCode = useSelector((state: AppState) => getClubErrorCode(state, uniqueName));
    const posts = useSelector((state: AppState) => getClubPosts(state, uniqueName));
    const authenticated = useSelector((state: AppState) => isAuthenticated(state));

    function fetchClubDetails() {
        dispatch(fetchClubById(uniqueName, authenticated));
    }

    function loadMorePosts() {
        if (postsLoadMoreIsAllowed && !postsIsFetching) {
            dispatch(loadMoreClubPosts(uniqueName, postsSkipCounter));
        }
    }

    function fetchClubCompetitions() {
        dispatch(fetchClubCompetitionsById((clubDetails as any).id, uniqueName));
    }

    function fetchClubMembers() {
        dispatch(fetchClubMembersById(uniqueName, clubMembersSkip + ClubOffset.Take));
    }

    function joinToClubHandle() {
        dispatch(joinToClub((clubDetails as any).id, uniqueName));
    }

    function leaveClubHandle() {
        dispatch(leaveClub((clubDetails as any).id, uniqueName));
    }

    function updateAdditionalData(updateUser: AddClubMemberAdditionalDataDto) {
        updateAdditionalClubMemberData(updateUser);
    }

    return {
        clubDetailsIsFetching,
        clubDetailsHasFetched,
        clubDetails,
        clubErrorCode,
        fetchClubDetails,
        clubMembersDetailsIsFetching,
        clubMembersDetailsHasFetched,
        clubMembersDetails,
        fetchClubMembers,
        competitionsIsFetching,
        competitionsHasFetched,
        competitions,
        fetchClubCompetitions,
        joinToClubHandle,
        posts,
        postsHasFetched,
        postsIsFetching,
        loadMorePosts,
        postsLoadMoreIsAllowed,
        updateAdditionalData,
        isAuthenticated: authenticated,
        leaveClubHandle,
    };
}
