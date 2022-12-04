import { gql } from '@apollo/client';

export const GET_CLUB_MEMBERS = gql`
    query GetClubMembers($clubId: Int, $skip: Int) {
        getClubMembers(clubId: $clubId, skip: $skip) {
            id
            avatar
            name
        }
    }
`;
