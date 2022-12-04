import { gql } from '@apollo/client';
import { SimplifiedPostFragment } from '../graphql/fragments/Post';

export const GET_CLUB_POSTS = gql`
    query GetClubPosts($clubId: Int, $skip: Int) {
        getClubPosts(clubId: $clubId, skip: $skip) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
`;
