import { gql } from '@apollo/client';
import { ClubFragment } from '../graphql/fragments/Club';

export const LEAVE_CLUB = gql`
    mutation($clubId: Int) {
        leaveClub(clubId: $clubId) {
            ...ClubFragment
        }
    }
    ${ClubFragment}
`;
