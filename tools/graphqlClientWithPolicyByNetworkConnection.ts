import { ApolloQueryResult, OperationVariables, QueryOptions } from '@apollo/client';
import { errorsHandler } from './errorsHandler';

import { fetch } from '@react-native-community/netinfo';

import { client } from 'configs/graphql';

export async function graphqlQueryWithPolicyByNetworkConnection<T, TVariables = OperationVariables>(
    options: QueryOptions<TVariables>,
): Promise<ApolloQueryResult<T>> {
    const networkState = await fetch();
    if (networkState.isInternetReachable) {
        return client.query(options).then(response => {
            if (response.errors?.length) {
                const error: any = response.errors[0].extensions!.code;
                errorsHandler(error);
                throw error;
            }
            return response;
        });
    }
    return client.query({ ...options, fetchPolicy: 'cache-only' });
}
