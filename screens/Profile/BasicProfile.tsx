import { SimplifiedPost, User, UserContactData } from '@inspire/types';
import React, { useRef } from 'react';

import { Animated, View } from 'react-native';
import StickyParallaxHeader, { OnChangeTabArguments } from 'react-native-sticky-parallax-header';

import { CustomRefreshControl } from 'components';
import { StylesValue } from 'tools';
import { emptyFn } from 'tools/emptyFn';
import I18n from 'tools/translate';
import { NavProps, ThemeVariables } from 'types';
import { profileLoadMoreHandle } from '../../tools';
import { Foreground, Groups, Header, Posts } from './components';

import { styles } from './styles';

interface BasicProfileProps extends NavProps {
    userId: number;
    loadMoreIsPending: boolean;
    loadMoreAllowed: boolean;
    posts: SimplifiedPost[];
    recommendedPosts: SimplifiedPost[];
    isRoot: boolean;
    loadMorePostsHandle: () => void;
    loadMoreRecommendedPostsHandle: () => void;
    details: User;
    rootDetails: User;
    followers: User[];
    subscribers: User[];
    inspiredCount: number;
    contactData: UserContactData;
    isRefreshing: boolean;
    onRefresh: () => void;
    openDetails: () => void;
}

const { event } = Animated;

export function BasicProfile(props: BasicProfileProps) {
    const scroll = new Animated.Value(0);
    const openedTab = useRef<any>(0);

    function handleOnEnd(event: any) {
        profileLoadMoreHandle(
            event,
            0.5,
            548,
            props.loadMoreIsPending,
            openedTab.current ? props.loadMoreRecommendedPostsHandle : props.loadMorePostsHandle,
        );
    }

    function onChangeTabHandle(changeTabArguments: OnChangeTabArguments) {
        openedTab.current = changeTabArguments.i;
    }

    function renderPosts() {
        {
            /* eslint-disable react/prop-types */
        }
        return (
            <View style={styles.tabContainer}>
                <Posts
                    loadMoreAllowed={props.loadMoreAllowed}
                    userId={props.userId}
                    componentId={props.componentId}
                    loadPostsIsPending={props.loadMoreIsPending}
                    posts={props.posts}
                />
            </View>
        );
    }

    function renderRecommendedPosts() {
        {
            /* eslint-disable react/prop-types */
        }
        return (
            <View style={styles.tabContainer}>
                <Posts
                    loadMoreAllowed={props.loadMoreAllowed}
                    userId={props.userId}
                    componentId={props.componentId}
                    loadPostsIsPending={props.loadMoreIsPending}
                    posts={props.recommendedPosts}
                />
            </View>
        );
    }

    function renderGroups() {
        return (
            <View style={styles.tabContainer}>
                <Groups userId={props.userId} componentId={props.componentId} />
            </View>
        );
    }

    function renderHeader() {
        return (
            <Header
                // eslint-disable-next-line react/prop-types
                componentId={props.componentId}
                rootDetails={props.rootDetails}
                isRoot={props.isRoot}
                details={props.details}
                scroll={scroll}
            />
        );
    }
    function renderForeground() {
        // eslint-disable-next-line react/prop-types
        const { componentId } = props;
        return (
            <Foreground
                openDetails={props.openDetails}
                contactData={props.contactData}
                followers={props.followers}
                subscribers={props.subscribers}
                isRoot={props.isRoot}
                rootDetails={props.rootDetails}
                details={props.details}
                scroll={scroll}
                componentId={componentId}
            />
        );
    }

    const tabs = props.isRoot
        ? [
              {
                  title: I18n.t('profile.switcher.posts'),
                  content: renderPosts(),
              },
              {
                  title: I18n.t('profile.switcher.recommendPosts'),
                  content: renderRecommendedPosts(),
              },
              {
                  title: I18n.t('profile.switcher.groups'),
                  content: renderGroups(),
              },
          ]
        : [
              {
                  title: I18n.t('profile.switcher.posts'),
                  content: renderPosts(),
              },
              {
                  title: I18n.t('profile.switcher.recommendPosts'),
                  content: renderRecommendedPosts(),
              },
          ];

    return (
        // @ts-ignore
        <StickyParallaxHeader
            refreshControl={<CustomRefreshControl refreshing={props.isRefreshing} onRefresh={props.onRefresh} />}
            foreground={renderForeground() as any}
            header={renderHeader()}
            parallaxHeight={250}
            headerHeight={50}
            bounces={true}
            onChangeTab={onChangeTabHandle}
            headerSize={emptyFn}
            scrollEvent={event([{ nativeEvent: { contentOffset: { y: scroll } } }], {
                useNativeDriver: false,
                listener: handleOnEnd,
            })}
            tabs={tabs}
            tabTextStyle={styles.tabTextStyle}
            tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
            tabsContainerBackgroundColor={StylesValue(ThemeVariables.BlackAndWhite)}
        />
    );
}
