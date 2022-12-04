import { gql } from '@apollo/client';

export const ATTEND_POSTS_COMPETITION = gql`
    mutation AttendPostsCompetition($competitionId: Int, $postsIds: [Int]) {
        attendPostCompetition(competitionId: $competitionId, postsIds: $postsIds) {
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
