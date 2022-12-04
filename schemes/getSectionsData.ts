import { gql } from '@apollo/client';
import { SimplifiedPostFragment } from '../graphql/fragments/Post';

export const GET_SECTIONS_DATA = gql`
    query getSectionsData($filterId: String, $skip: Int) {
        getSectionsData(filterId: $filterId, skip: $skip) {
            ...SimplifiedPostFragment
        }
    }
    ${SimplifiedPostFragment}
`;
