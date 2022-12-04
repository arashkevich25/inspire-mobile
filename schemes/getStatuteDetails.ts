import { gql } from '@apollo/client';

export const GET_STATUTE_DETAILS = gql`
    query GetStatuteDetails($statuteId: Int) {
        getStatuteDetails(statuteId: $statuteId) {
            id
            title
            approvedByMe
            statute
        }
    }
`;
