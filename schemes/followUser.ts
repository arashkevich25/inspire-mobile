import { gql } from '@apollo/client';

export const FOLLOW_USER = (followerId: number) => gql`
	mutation {
        subscribeUser(followerId: ${followerId}) {
            id
            name
            avatar
        }
	}
`;
