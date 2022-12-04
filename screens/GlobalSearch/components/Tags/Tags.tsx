import { Tag } from '@inspire/types';
import { PostsByTag } from 'navigation';
import React from 'react';

import { Navigation } from 'react-native-navigation';

import { useGlobalSearch, useTagsGlobalSearch } from 'hooks';
import { NavigationService } from 'navigation/tools/NavigationService';
import { NavProps } from 'types';
import { SkeletonLoader } from '../../../Inspired/components/SkeletonLoader';
import { List } from './components';

interface TagsProps extends NavProps {
    query: string;
}
let lastQuery = '';

export function Tags({ query }: TagsProps) {
    const { isSearching, tags, loadMore, search, reset } = useTagsGlobalSearch();
    useGlobalSearch(lastQuery, query, search, isSearching, reset, setLastQuery);

    async function openDetails(tag: Tag) {
        await Navigation.push(NavigationService.activeScreen, {
            component: PostsByTag(tag.tag),
        });
    }

    function setLastQuery(value: string) {
        lastQuery = value;
    }

    function loadMoreTags() {
        loadMore(lastQuery);
    }

    if (isSearching) {
        return <SkeletonLoader />;
    }

    return <List clickTag={openDetails} loadMore={loadMoreTags} itemsArr={tags} />;
}
