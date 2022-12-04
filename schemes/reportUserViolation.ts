import { gql } from '@apollo/client';

export const REPORT_USER_VIOLATION = (userId: number, reasonId: number) => gql`
    mutation {
        reportUserViolation(userId: ${userId}, reasonId: ${reasonId}) {
            hasReported
        }
    }
`;
