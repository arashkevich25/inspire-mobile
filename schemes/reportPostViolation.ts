import { gql } from '@apollo/client';

export const REPORT_POST_VIOLATION = (postId: string, reasonId: number) => gql`
    mutation {
        reportPostViolation(postId: "${postId}", reasonId: ${reasonId}) {
            hasReported
        }
    }
`;
