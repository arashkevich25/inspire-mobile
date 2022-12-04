import { SimplifiedPost } from '@inspire/types';
import React from 'react';

import { WaterfallList } from 'react-native-largelist';

import { ListMoreLoadFooter, ListMoreLoadFooterUnauthUser, ListRefreshHeader } from 'components';
import { LargeListScrollPreventHandle } from 'models';
import { worldWall } from '../../../../../e2e/selectors';
import { calcSize } from '../../tools/calcPostSize';

interface ListProps {
    listRef: any;
    posts: SimplifiedPost[];
    refreshHandle: () => void;
    stopScrolling: () => void;
    startScrolling: () => void;
    renderItemHandle: (item: SimplifiedPost, index: number) => JSX.Element;
    loadMoreHandle: () => void;
    allContentWasLoaded: boolean;
    userIsAuthenticated: boolean;
}

export function List(props: ListProps) {
    return (
        <>
            <WaterfallList<SimplifiedPost>
                testID={worldWall.scrollView.worldWall}
                ref={props.listRef}
                data={props.posts}
                loadingFooter={props.userIsAuthenticated ? ListMoreLoadFooter : ListMoreLoadFooterUnauthUser}
                // @ts-ignore
                refreshHeader={ListRefreshHeader}
                onRefresh={props.refreshHandle}
                heightForItem={(item, index) => calcSize(index)}
                numColumns={2}
                renderItem={props.renderItemHandle}
                onLoading={props.loadMoreHandle}
                allLoaded={props.allContentWasLoaded}
                onMomentumScrollBegin={props.startScrolling}
                onMomentumScrollEnd={props.stopScrolling}
                {...LargeListScrollPreventHandle.panResponder.panHandlers}
            />
        </>
    );
}
