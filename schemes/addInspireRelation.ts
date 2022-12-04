import { gql } from '@apollo/client';
import { InspiredResponseFragment } from '../graphql/fragments/Post';

export const ADD_INSPIRE_RELATION = gql`
    mutation AddInspiredRelation($postId: String) {
        addInspiredRelationSimplifiedPostResponse(createInspiredRelations: { postId: $postId }) {
            ...InspiredResponseFragment
        }
    }
    ${InspiredResponseFragment}
`;
