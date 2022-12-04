import { gql } from '@apollo/client';

export const ClubFragment = gql`
    fragment ClubFragment on Club {
        id
        uniqueName
        name
        description
        statutes {
            id
            title
            approvedByMe
        }
        competitions {
            id
        }
        media {
            uri
        }
        logo {
            uri
        }
        contacts {
            web
            instagram
            facebook
            linkedin
            phone
            email
        }
        statistic {
            postsCount
            usersCount
            viewsCount
            competitionCount
            activeCompetitionCount
        }
        clubMemberState
    }
`;
