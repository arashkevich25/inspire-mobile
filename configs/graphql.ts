import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import QueueLink from 'apollo-link-queue';
import { AsyncStorageWrapper, persistCache } from 'apollo3-cache-persist';
import { StorageKeys } from 'app-constants/storageKeys';
import { SocietyConfig } from './config';

import AsyncStorage from '@react-native-community/async-storage';

import { getSensitiveItem } from '../tools/manageSecurityData';

const authLink = setContext(
    async (_, { headers }): Promise<object> => {
        const token = await getSensitiveItem(StorageKeys.AuthToken);
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            },
        };
    },
);

const httpLink = createHttpLink({
    uri: SocietyConfig.graphqlApi,
});

const retryLink = new RetryLink({
    delay: {
        initial: 300,
        max: Infinity,
        jitter: true,
    },
    attempts: {
        max: 2,
    },
});

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});
const offlineLink = new QueueLink();
const link = from([authLink, retryLink, errorLink, offlineLink, httpLink]);

let client: ApolloClient<any>;

async function setClient() {
    await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
    });
    client = new ApolloClient({
        cache,
        link,
        defaultOptions: {
            query: {
                fetchPolicy: 'network-only',
                errorPolicy: 'all',
                notifyOnNetworkStatusChange: false,
            },
        },
    });
}

export { client, offlineLink, setClient };
