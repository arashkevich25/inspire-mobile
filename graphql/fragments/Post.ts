import { gql } from '@apollo/client';
import { CategoryRelationsFragment } from './Categories';
import { PostGroupRelationFragment } from './Group';
import { LocationFragment } from './Location';

export const PostUserFragment = gql`
    fragment PostUserFragment on User {
        id
        name
        avatar
        followerRelation {
            id
            follower {
                id
            }
        }
    }
`;

export const RatingByUserFragment = gql`
    fragment RatingByUserFragment on RatingByUser {
        id
        userRating
        user {
            ...PostUserFragment
        }
        rating {
            id
        }
    }
    ${PostUserFragment}
`;

export const RatingFragment = gql`
    fragment RatingFragment on Rating {
        id
        rating
        byUser {
            ...RatingByUserFragment
        }
    }
    ${RatingByUserFragment}
`;

export const BasicPostFragment = gql`
    fragment BasicPostFragment on BasicPost {
        id
        name
        desc
        commentsCount
        createdAt
        user {
            id
            name
            avatar
        }
        rating
        location
        userRating
        ratingCount
        isInspiredByUser
        isRateByUser
        inspirationCount
        groups
        photo
        inspiredUsersAvatars
        userHasRecommend
        recommends
    }
`;

export const SimplifiedPostFragment = gql`
    fragment SimplifiedPostFragment on SimplifiedPost {
        id
        name
        desc
        creatorAvatar
        photo
    }
`;

export const InspiredResponseFragment = gql`
    fragment InspiredResponseFragment on SimplifiedPost {
        id
    }
`;

export const PostStatisticFragment = gql`
    fragment PostStatisticFragment on PostStatistic {
        views
        recommends
        sent
        userHasRecommend
    }
`;

export const BasicStatisticFragment = gql`
    fragment BasicStatisticFragment on BasicStatistic {
        views
        recommends
        sent
    }
`;

export const TilePostFragment = gql`
    fragment TilePostFragment on SimplifiedPost {
        id
        name
        creatorAvatar
        photo
    }
`;

export const DetailsPostFragment = gql`
    fragment DetailsPostFragment on DetailsPost {
        id
        name
        desc
        location {
            ...LocationFragment
        }
        groupsRelations {
            ...PostGroupRelationFragment
        }
        categoriesRelations {
            ...CategoriesRelationsFragment
        }
        url
        isInspiredByUser
        inspirationCount
        user {
            id
            name
            avatar
            userUniqName
        }
        photos {
            uri
        }
        isPrivatePost
        createdAt
        rating
        userRating
        ratingCount
        isRateByUser
        inspiredUsersAvatars
    }
    ${LocationFragment}
    ${PostGroupRelationFragment}
    ${CategoryRelationsFragment}
`;
