import { gql } from '@apollo/client';
import { ClubFragment } from '../graphql/fragments/Club';
import { SimplifiedPostFragment } from '../graphql/fragments/Post';

export const GET_CLUB_BY_UNIQUE_NAME = gql`
    query GetClubDetails($uniqueName: String, $skip: Int) {
        getClubDetailsByUniqueName(uniqueName: $uniqueName) {
            ...ClubFragment
        }
        getClubMembersByUniqueName(uniqueName: $uniqueName, skip: $skip) {
            id
            avatar
            name
        }
        getClubPostsByUniqueName(uniqueName: $uniqueName, skip: $skip) {
            ...SimplifiedPostFragment
        }
    }
    ${ClubFragment}
    ${SimplifiedPostFragment}
`;
