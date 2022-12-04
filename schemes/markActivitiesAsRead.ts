import { gql } from '@apollo/client';
import { HistoryMessageFragment } from '../graphql/fragments/HistoryMessage';

export const MARK_ACTIVITIES_AS_READ = gql`
    mutation readActivities($ids: [Int]) {
        readActivities(ids: $ids) {
            ...HistoryMessageFragment
        }
    }
    ${HistoryMessageFragment}
`;
