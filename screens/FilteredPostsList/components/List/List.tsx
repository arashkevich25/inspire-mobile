import { SimplifiedPost } from '@inspire/types';
import { isIphone } from 'app-constants/isIphone';
import React from 'react';

import { WaterfallList } from 'react-native-largelist';

import { ListMoreLoadFooter, ListRefreshHeader } from 'components';
import { LargeListScrollPreventHandle } from 'models';
import { worldWall } from '../../../../../e2e/selectors';
import { calcSize } from '../../tools/calcPostSize';

import { Styles } from './styles';

interface ListProps {
    listRef: any;
    posts: SimplifiedPost[];
    refreshHandle: () => void;
    renderItemHandle: (item: SimplifiedPost, index: number) => JSX.Element;
    loadMoreHandle: () => void;
    allContentWasLoaded: boolean;
    stopScrolling: () => void;
    startScrolling: () => void;
}

export function List(props: ListProps) {
    return (
        <WaterfallList<SimplifiedPost>
            testID={worldWall.scrollView.worldWall}
            ref={props.listRef}
            data={props.posts}
            loadingFooter={ListMoreLoadFooter}
            // @ts-ignore
            refreshHeader={ListRefreshHeader}
            onRefresh={props.refreshHandle}
            heightForItem={(item, index) => calcSize(index)}
            numColumns={2}
            style={[isIphone ? null : Styles.contentContainer]}
            renderItem={props.renderItemHandle}
            onLoading={props.loadMoreHandle}
            allLoaded={props.allContentWasLoaded}
            onMomentumScrollBegin={props.startScrolling}
            onMomentumScrollEnd={props.stopScrolling}
            {...LargeListScrollPreventHandle.panResponder.panHandlers}
        />
    );
}
