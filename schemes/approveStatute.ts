import { gql } from '@apollo/client';

export const APPROVE_STATUTE = gql`
    mutation approveStatute($statuteId: Int) {
        approveStatute(statuteId: $statuteId) {
            id
            title
            approvedByMe
            statute
        }
    }
`;
