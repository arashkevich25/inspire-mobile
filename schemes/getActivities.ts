import { gql } from '@apollo/client';
import { HistoryMessageFragment } from '../graphql/fragments/HistoryMessage';

export const GET_ACTIVITIES = gql`
    query getActivities($skipCounter: Int) {
        getActivities(skipCounter: $skipCounter) {
            ...HistoryMessageFragment
        }
    }
    ${HistoryMessageFragment}
`;
