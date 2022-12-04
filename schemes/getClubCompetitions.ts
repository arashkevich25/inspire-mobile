import { gql } from '@apollo/client';

export const GET_CLUB_COMPETITIONS = gql`
    query GetClubCompetitions($clubId: Int) {
        getClubCompetitions(clubId: $clubId) {
            id
            competitions {
                id
                name
                media {
                    uri
                }
                description
            }
        }
    }
`;
