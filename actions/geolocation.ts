import { GeolocationTown } from '@inspire/types';

import { GET_TOWNS } from 'schemes';
import { graphqlQueryWithPolicyByNetworkConnection } from 'tools';

export async function getTowns(query = ''): Promise<GeolocationTown[]> {
    const { data } = await graphqlQueryWithPolicyByNetworkConnection<{ getTowns: GeolocationTown[] }>({
        query: GET_TOWNS,
        variables: {
            query,
        },
    });
    return data.getTowns;
}
