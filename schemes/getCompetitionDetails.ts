import { gql } from '@apollo/client';

export const GET_COMPETITIONS_DETAILS = gql`
    query GetCompetitionsDetails($competitionId: Int) {
        getCompetitionDetails(competitionId: $competitionId) {
            id
            name
            description
            statutes {
                id
                title
                approvedByMe
            }
            media {
                uri
            }
            kind
            requiredValue
            isActive
            isActiveByMe
            isCompletedByMe
        }
    }
`;
