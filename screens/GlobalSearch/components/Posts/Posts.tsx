import React from 'react';
import { List } from './List';

import { useGlobalSearch, usePostsGlobalSearch } from 'hooks';
import { NavProps } from 'types';
import { SkeletonLoader } from '../../../Inspired/components/SkeletonLoader';

interface PostsProps extends NavProps {
    query: string;
}

let lastQuery = '';

export function Posts({ query, componentId }: PostsProps) {
    const { isSearching, posts, loadMore, search, reset } = usePostsGlobalSearch();
    useGlobalSearch(lastQuery, query, search, isSearching, reset, setLastQuery);

    function loadMorePosts() {
        loadMore(lastQuery);
    }

    function setLastQuery(value: string) {
        lastQuery = value;
    }

    if (isSearching) {
        return <SkeletonLoader />;
    }

    return <List componentId={componentId} itemsArr={posts} loadMore={loadMorePosts} />;
}
