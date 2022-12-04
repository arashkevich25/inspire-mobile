import { useEffect } from 'react';

let timeOut: NodeJS.Timeout;

export function useGlobalSearch(
    lastQuery: string,
    query: string,
    search: (query: string) => void,
    isSearching: boolean,
    reset: () => void,
    setLastQuery: (value: string) => void,
): void {
    if (query.length >= 3 && !isSearching && lastQuery !== query) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => search(query), 500);
    }

    useEffect(() => {
        setLastQuery(query);
    }, [isSearching, query]);
}
