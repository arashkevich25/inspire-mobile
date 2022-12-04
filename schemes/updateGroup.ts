import { gql } from '@apollo/client';
import { User } from '@inspire/types';

export const UPDATE_GROUP = (id: number, name: string, users: User[], avatar: string) => gql`
    mutation UpdateGroupInput {
        updateGroup(updateGroupInput: {
            id: ${id}
            name: "${name}"
            users: [${users.map(user => `${user.id}`)}]
            avatar: "${avatar}"
        }) {
            id
        }
    }
`;
