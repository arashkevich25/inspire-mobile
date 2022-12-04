/* eslint-disable react/prop-types */
import { Competition, SimplifiedPost, User, UserClub, UserContactData } from '@inspire/types';
import React, { useRef } from 'react';

import { Animated, View } from 'react-native';
import StickyParallaxHeader, { OnChangeTabArguments } from 'react-native-sticky-parallax-header';

import { Avatar, CustomRefreshControl, Text } from 'components';
import { ContactPanel } from 'containers';
import { profileLoadMoreHandle, StylesValue } from 'tools';
import { emptyFn } from 'tools/emptyFn';
import I18n from 'tools/translate';
import { NavProps, Sizes, ThemeVariables } from 'types';
import { ClubMemberActionPanel, ClubsList, Groups, Header, MedalsList, Posts } from './components';

import { styles } from './styles';

interface ClubMemberProps extends NavProps {
    userId: number;
    isRoot: boolean;
    details: User;
    rootDetails: User;
    followers: User[];
    posts: SimplifiedPost[];
    productPosts: SimplifiedPost[];
    subscribers: User[];
    contactData: UserContactData;
    openDrawer: () => void;
    openDetails: () => void;
    userClubs: UserClub[];
    completedCompetition: Competition[];
    isRefreshing: boolean;
    loadMoreIsPending: boolean;
    productsLoadMoreAllowed: boolean;
    loadMoreAllowed: boolean;
    onRefresh: () => void;
    loadMorePostsHandle: () => void;
    loadMoreProductsPostsHandle: () => void;
}

const { event } = Animated;

export function ClubMember(props: ClubMemberProps) {
    const scroll = new Animated.Value(0);
    const openedTab = useRef<any>(0);

    // TODO to merge Basic and club member to one component

    function renderForeground() {
        return (
            <View style={styles.clubMemberContentContainer}>
                <Avatar fallback="no" size="large" uri={props.details.avatar} />
                <View style={styles.clubMemberMarginBottom}>
                    <Text isBold={true} style={styles.clubMemberTitle}>
                        {props.details.name}
                    </Text>
                    <Text isItalic={true} style={styles.clubMemberDesc} fontSize={Sizes.Small} color="gray">
                        {props.details.desc}
                    </Text>
                </View>
                <View style={styles.clubMemberMarginBottom}>
                    {props.contactData ? <ContactPanel contactData={props.contactData} /> : null}
                </View>
                <View style={[styles.clubMemberMarginBottom, styles.clubMemberActionPanelBox]}>
                    <ClubMemberActionPanel
                        openDetails={props.openDetails}
                        isRoot={props.isRoot}
                        openDrawer={props.openDrawer}
                        rootDetails={props.rootDetails}
                        details={props.details}
                    />
                </View>
                <View style={[styles.fullWidth, styles.clubMemberMarginBottom]}>
                    <ClubsList componentId={props.componentId} clubs={props.userClubs} />
                </View>
                <View style={styles.fullWidth}>
                    {props.completedCompetition.length ? (
                        <MedalsList componentId={props.componentId} medals={props.completedCompetition} />
                    ) : null}
                </View>
            </View>
        );
    }

    function renderHeader() {
        return (
            <Header
                componentId={props.componentId}
                rootDetails={props.rootDetails}
                isRoot={props.isRoot}
                details={props.details}
                scroll={scroll}
            />
        );
    }

    function renderPosts() {
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

    function renderProductPosts() {
        return (
            <View style={styles.tabContainer}>
                <Posts
                    loadMoreAllowed={props.productsLoadMoreAllowed}
                    userId={props.userId}
                    componentId={props.componentId}
                    loadPostsIsPending={props.loadMoreIsPending}
                    posts={props.productPosts}
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

    const tabs = props.isRoot
        ? [
              {
                  title: I18n.t('profile.switcher.autopromotionPosts'),
                  content: renderProductPosts(),
              },
              {
                  title: I18n.t('profile.switcher.posts'),
                  content: renderPosts(),
              },
              {
                  title: I18n.t('profile.switcher.groups'),
                  content: renderGroups(),
              },
          ]
        : [
              {
                  title: I18n.t('profile.switcher.autopromotionPosts'),
                  content: renderProductPosts(),
              },
              {
                  title: I18n.t('profile.switcher.posts'),
                  content: renderPosts(),
              },
          ];

    function onChangeTabHandle(changeTabArguments: OnChangeTabArguments) {
        openedTab.current = changeTabArguments.i;
    }

    function loadMoreHandle() {
        switch (openedTab.current) {
            case 0: {
                props.loadMoreProductsPostsHandle();
                break;
            }
            case 1: {
                props.loadMorePostsHandle();
                break;
            }
            default: {
                props.loadMorePostsHandle();
                break;
            }
        }
    }

    let paralHeight = 400;

    if (props.completedCompetition.length) {
        paralHeight += 100;
    }

    if (Object.values(props.contactData).filter(item => item).length > 1) {
        paralHeight += 30;
    }

    function handleOnEnd(event: any) {
        profileLoadMoreHandle(event, 0.5, paralHeight + 100, props.loadMoreIsPending, loadMoreHandle);
    }

    return (
        // @ts-ignore
        <StickyParallaxHeader
            refreshControl={<CustomRefreshControl refreshing={props.isRefreshing} onRefresh={props.onRefresh} />}
            foreground={renderForeground() as any}
            header={renderHeader()}
            onChangeTab={onChangeTabHandle}
            parallaxHeight={paralHeight}
            headerHeight={50}
            bounces={true}
            headerSize={emptyFn}
            scrollEvent={event([{ nativeEvent: { contentOffset: { y: scroll } } }], {
                useNativeDriver: false,
                listener: handleOnEnd,
            })}
            tabs={tabs}
            tabTextStyle={styles.clubMemberTabTextStyle}
            tabTextContainerActiveStyle={styles.clubMemberTabTextContainerActiveStyle}
            tabsContainerBackgroundColor={StylesValue(ThemeVariables.BackgroundColor1)}
        />
    );
}
