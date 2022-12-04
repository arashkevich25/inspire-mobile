import { gql } from '@apollo/client';

export const SET_ACTIVITY = (userId: number, uniqueId: string) => gql`
    mutation {
        setActivity(userId: ${userId}, uniqueId: "${uniqueId}") 
    }
`;
