import { gql } from '@apollo/client';
import { User } from '@inspire/types';

export const CREATE_NEW_GROUP = (name: string, users: User[], avatar: string) => gql`
    mutation CreateGroupInput {
        createGroup(createGroupInput: {
            name: "${name}"
            users: [${users.map(user => `${user.id}`)}]
            avatar: "${avatar}"
        }) {
            id
        }
    }
`;
