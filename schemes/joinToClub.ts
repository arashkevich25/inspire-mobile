import { gql } from '@apollo/client';
import { ClubFragment } from '../graphql/fragments/Club';

export const JOIN_TO_CLUB = gql`
    mutation($clubId: Int) {
        joinToClub(clubId: $clubId) {
            ...ClubFragment
        }
    }
    ${ClubFragment}
`;
