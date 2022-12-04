import { gql } from '@apollo/client';

export const LEAVE_GROUP = (groupId: number) => gql`
    mutation {
        leaveGroup(groupId: ${groupId}) {
            name
        }
    }
`;
