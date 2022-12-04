import { gql } from '@apollo/client';

export const HistoryMessageFragment = gql`
    fragment HistoryMessageFragment on HistoryMessage {
        id
        createdAt
        isRead
        readAt
        post {
            id
            name
            photos {
                id
                uri
            }
        }
        user {
            id
            name
            avatar
        }
        group {
            id
            name
        }
        club {
            id
            name
            logo {
                uri
            }
        }
        kind
    }
`;
