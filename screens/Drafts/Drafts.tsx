import { Draft } from '@inspire/types';
import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import { useDrafts } from 'hooks';
import { List, SkeletonLoader } from './components';

import { Styles } from './styles';

export function Drafts() {
    const [draftsState, setDraftsState] = useState<{
        isLoading: boolean;
        drafts: Draft[];
    }>({
        isLoading: false,
        drafts: [],
    });
    const { getDrafts } = useDrafts();

    async function initDrafts() {
        const drafts = await getDrafts();
        setDraftsState({
            drafts,
            isLoading: false,
        });
    }

    useEffect(() => {
        setDraftsState({
            ...draftsState,
            isLoading: true,
        });
        initDrafts();
    }, []);

    if (draftsState.isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <View style={Styles.contentContainer}>
            <List refreshData={initDrafts} items={draftsState.drafts} />
        </View>
    );
}
