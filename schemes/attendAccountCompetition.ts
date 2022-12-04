import { gql } from '@apollo/client';

export const ATTEND_ACCOUNT_COMPETITION = gql`
    mutation AttendAccountCompetition($competitionId: Int) {
        attendAccountCompetition(competitionId: $competitionId) {
            id
            name
            description
            statutes {
                id
                title
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
