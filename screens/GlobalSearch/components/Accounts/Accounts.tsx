import React from 'react';
import { UsersList } from '../../../UsersList';

import { useAccountsGlobalSearch, useGlobalSearch } from 'hooks';
import { NavProps } from 'types';
import { SkeletonLoader } from '../../../Inspired/components/SkeletonLoader';

interface AccountsProps extends NavProps {
    query: string;
}
let lastQuery = '';

export function Accounts({ query, componentId }: AccountsProps) {
    const { isSearching, accounts, search, reset } = useAccountsGlobalSearch();
    useGlobalSearch(lastQuery, query, search, isSearching, reset, setLastQuery);

    function setLastQuery(value: string) {
        lastQuery = value;
    }

    if (isSearching) {
        return <SkeletonLoader />;
    }

    return <UsersList componentId={componentId} users={accounts} />;
}
