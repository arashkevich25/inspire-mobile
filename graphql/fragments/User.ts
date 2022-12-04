import { gql } from '@apollo/client';

export const FollowerFollowingFragment = gql`
    fragment FollowerFollowingFragment on User {
        id
        name
        avatar
        postsCount
    }
`;

const UserFragment = gql`
    fragment UserFragment on User {
        id
        name
        avatar
        email
        userUniqName
        desc
        site
        fbUrl
        instagramUrl
        kind
        followerIds
        postsCount
        recommendCount
        viewsCount
        inspiredCount
        followersCount
        subscribersCount
        isRecommendedByUser
    }
`;

export default UserFragment;
