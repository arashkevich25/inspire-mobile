import { gql } from '@apollo/client';

export const PostLocationCoordinatesFragment = gql`
    fragment PostLocationCoordinatesFragment on PostLocationCoordinates {
        lat
        lng
    }
`;

export const AddressFragment = gql`
    fragment AddressFragment on Address {
        id
        address
    }
`;

export const LocationFragment = gql`
    fragment LocationFragment on AddressRelation {
        id
        address {
            ...AddressFragment
        }
        coordinates {
            ...PostLocationCoordinatesFragment
        }
    }
    ${PostLocationCoordinatesFragment}
    ${AddressFragment}
`;
