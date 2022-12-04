/* eslint-disable */
import { gql } from '@apollo/client';

export const GET_POST_COORDINATES = gql`
    query getPostsLocationByCity($city: String) {
        getPostsLocationByCity(city: $city) {
            coordinates {
                lat
                lng
            }
        }
    }
`;
