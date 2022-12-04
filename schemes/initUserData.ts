import { gql } from '@apollo/client';
import { UserGroupRelationFragment } from '../graphql/fragments/Group';
import { HistoryMessageFragment } from '../graphql/fragments/HistoryMessage';
import { TilePostFragment } from '../graphql/fragments/Post';
import UserFragment, { FollowerFollowingFragment } from '../graphql/fragments/User';

export const INIT_USER_DATA = gql`
    query User($userId: ID!, $userIdInt: Int) {
        user(id: $userId) {
            ...UserFragment
        }
        getFollowing(userId: $userId) {
            ...FollowerFollowingFragment
        }
        getUserContactData(userId: $userIdInt) {
            facebook
            instagram
            linkedin
            web
            phone
            email
        }
        getFollowers(userId: $userId) {
            ...FollowerFollowingFragment
        }
        getSimplifiedPostsByUser(userId: $userId, skip: 0) {
            ...TilePostFragment
        }
        getRecommendedPostsByUser(userId: $userId, skip: 0) {
            ...TilePostFragment
        }
        getProductSimplifiedPostsByUser(userId: $userId, skip: 0) {
            ...TilePostFragment
        }
        getGroups {
            ...UserGroupRelationFragment
        }
        getUserInspiredCount(userId: $userIdInt) {
            count
        }
        userIsBlocked(userId: $userId)
        blockedByUsers {
            id
        }
        blockedUsers {
            id
        }
        getActivities(skipCounter: 0) {
            ...HistoryMessageFragment
        }
        getCompletedCompetition(userId: $userIdInt) {
            id
            name
            description
            media {
                uri
            }
        }
        getUserClubs(userId: $userIdInt) {
            id
            name
            logo
            uniqueName
        }
        getUserCategories {
            categories {
                id
            }
        }
    }
    ${UserFragment}
    ${FollowerFollowingFragment}
    ${TilePostFragment}
    ${UserGroupRelationFragment}
    ${HistoryMessageFragment}
`;
