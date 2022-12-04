import { gql } from '@apollo/client';
import { InspiredResponseFragment } from '../graphql/fragments/Post';

export const REMOVE_INSPIRE_RELATION = gql`
    mutation RemoveInspiredRelation($postId: String) {
        removeInspiredRelationSimplifiedPostResponse(createInspiredRelations: { postId: $postId }) {
            ...InspiredResponseFragment
        }
    }
    ${InspiredResponseFragment}
`;
