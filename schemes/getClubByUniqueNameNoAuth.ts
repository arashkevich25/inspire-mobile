import { gql } from '@apollo/client';
import { ClubFragment } from '../graphql/fragments/Club';
import { SimplifiedPostFragment } from '../graphql/fragments/Post';

export const GET_CLUB_BY_UNIQUE_NAME_NO_AUTH = gql`
    query GetClubDetailsNoAuth($uniqueName: String, $skip: Int) {
        getClubDetailsNoAuth(uniqueName: $uniqueName) {
            ...ClubFragment
        }
        getClubMembersNoAuth(uniqueName: $uniqueName, skip: $skip) {
            id
            avatar
            name
        }
        getClubPostsNoAuth(uniqueName: $uniqueName, skip: $skip) {
            ...SimplifiedPostFragment
        }
    }
    ${ClubFragment}
    ${SimplifiedPostFragment}
`;
