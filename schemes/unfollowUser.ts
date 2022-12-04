import { gql } from '@apollo/client';

export const UNFOLLOW_USER = (followerId: number) => gql`
    mutation {
        unsubscribeUser(followerId: ${followerId}) {
            id
            name
            avatar
        }
    }
`;
