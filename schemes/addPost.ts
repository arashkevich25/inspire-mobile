/* eslint-disable */
import { gql } from '@apollo/client';
import { GeoDataResult } from '@inspire/types';

export const ADD_NEW_POST = (
    categoryId: number[],
    name: string,
    desc: string,
    localization: GeoDataResult,
    photos: string[],
    isPrivate: boolean,
    isWorldPost: boolean,
    isFollowersPost: boolean,
    groupsIds: number[] = [],
    url: string = '',
    kind: number,
) => gql`
	mutation CreatePostInput {
        createPost (createPostInput: {
            categoriesIds: [${categoryId.map(category => `${category}`)}], 
	        name: "${name}", 
	        desc: """${desc}""",
	        url: "${url}",
	        location: {
                address_components: [${localization.address_components.map(
                    address =>
                        `{ long_name: "${address.long_name}", short_name: "${
                            address.short_name
                        }", types: [${address.types.map(type => `"${type}"`)}] }`,
                )}],
                formatted_address: "${localization.formatted_address}",
                geometry: {
                    location: {
                        lat: ${localization.geometry.location.lat},
                        lng: ${localization.geometry.location.lng},
                    }
                    location_type: "${localization.geometry.location_type}",
                    viewport: {
                        northeast: {
                            lat: ${localization.geometry.viewport.northeast.lat},
                            lng: ${localization.geometry.viewport.northeast.lng},
                        },
                        southwest: {
                            lat: ${localization.geometry.viewport.southwest.lat},
                            lng: ${localization.geometry.viewport.southwest.lng},
                        },
                    }
                },
                place_id: "${localization.place_id}",
                types: [${localization.types.map(type => `"${type}"`)}]
	        },
	        photos: [${photos.map(photo => `"${photo}"`)}]
	        isFollowersPost: ${isFollowersPost}
	        isPrivatePost: ${isPrivate}
	        isWorldPost: ${isWorldPost}
	        groupsIds: [${groupsIds.map(id => `${id}`)}]
	        kind: ${kind}
        }) {
	        id
        }
	}
`;
