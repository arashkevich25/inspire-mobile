import { gql } from '@apollo/client';
import { UserGroupRelationFragment } from '../graphql/fragments/Group';
import { HistoryMessageFragment } from '../graphql/fragments/HistoryMessage';
import { BasicPostFragment, SimplifiedPostFragment, TilePostFragment } from '../graphql/fragments/Post';
import UserFragment, { FollowerFollowingFragment } from '../graphql/fragments/User';

export const INIT_APP = gql`
    query InitApp($userId: ID!, $userIdInt: Int) {
        getWallBasicPosts(categoryId: 0, skip: 0, city: "") {
            ...BasicPostFragment
        }
        getWorldWallSimplifiedPostsAuthedUser(categoryId: 0, skip: 0, city: "") {
            ...TilePostFragment
        }
        getInspiredSimplifiedPosts(categoryId: 0, skip: 0, city: "") {
            ...SimplifiedPostFragment
        }
        getPostViolationReasons {
            id
            tkey
        }
        getUserViolationReasons {
            id
            tkey
        }
        blockedByUsers {
            id
        }
        blockedUsers {
            id
        }
        getHomeSections2
        initMarketing {
            id
            message {
                en {
                    title
                    description
                    primaryButtonTitle
                    secondaryButtonTitle
                }
                pl {
                    title
                    description
                    primaryButtonTitle
                    secondaryButtonTitle
                }
                type
                media
            }
        }
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
        getProductSimplifiedPostsByUser(userId: $userId, skip: 0) {
            ...TilePostFragment
        }
        getRecommendedPostsByUser(userId: $userId, skip: 0) {
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
    ${SimplifiedPostFragment}
    ${BasicPostFragment}
    ${TilePostFragment}
    ${UserFragment}
    ${FollowerFollowingFragment}
    ${UserGroupRelationFragment}
    ${HistoryMessageFragment}
`;
