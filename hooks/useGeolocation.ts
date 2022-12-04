import { GeolocationTown } from '@inspire/types';
import { useEffect, useState } from 'react';

import { getTowns } from 'actions';

interface UseGeolocationOutput {
    towns: GeolocationTown[];
    searchTown: (query: string) => void;
    hasSearched: boolean;
    setHasSearched: (state: boolean) => void;
}

export function useGeolocation(): UseGeolocationOutput {
    const [towns, setTowns] = useState<GeolocationTown[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    async function initTowns() {
        const towns = await getTowns();
        setTowns(towns);
    }

    async function searchTown(query: string) {
        if (query.length < 3 && query !== '') {
            return;
        }
        setHasSearched(true);
        const towns = await getTowns(query);
        setTowns(towns);
    }

    useEffect(() => {
        initTowns();
    }, []);

    return {
        towns,
        searchTown,
        hasSearched,
        setHasSearched,
    };
}
