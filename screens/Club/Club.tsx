import { ComponentId } from 'navigation';
import { STATUTE_DETAILS_MODAL } from 'navigation/constants/modalsIds';
import React, { useEffect } from 'react';

import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Drawer, EmptyFlatListPlug, FloatBackButton, Loader } from 'components';
import { useClub } from 'hooks/useClub';
import { NavProps } from 'types';
import { ClubDetails, DrawerStatistics } from './components';

import { Styles } from './styles';

interface ClubProps extends NavProps {
    uniqueName: string;
}

export function Club(props: ClubProps) {
    const {
        clubDetails,
        clubDetailsHasFetched,
        clubMembersDetails,
        clubDetailsIsFetching,
        fetchClubDetails,
        posts,
        isAuthenticated,
        postsIsFetching,
        postsHasFetched,
        postsLoadMoreIsAllowed,
        loadMorePosts,
        clubErrorCode,
        leaveClubHandle,
    } = useClub(props.uniqueName);

    useEffect(() => {
        fetchClubDetails();
        const event = Navigation.events().registerModalDismissedListener(async ({ componentId }) => {
            if (componentId === STATUTE_DETAILS_MODAL) {
                fetchClubDetails();
            }
        });
        return () => {
            event.remove();
        };
    }, []);

    async function backHandle() {
        await Navigation.pop(ComponentId.ScreenClub);
    }

    if (!clubDetailsIsFetching && clubErrorCode === '404') {
        return (
            <View style={Styles.emptyPlugContainer}>
                <FloatBackButton backHandle={backHandle} />
                <View style={Styles.emptyPlugBox}>
                    <EmptyFlatListPlug tkey="clubDetails.text.clubDoesntExist" />
                </View>
            </View>
        );
    }

    if (!clubDetailsHasFetched && !clubDetails) {
        return <Loader />;
    }

    return (
        <Drawer
            drawerChildren={
                <DrawerStatistics
                    clubName={clubDetails!.name}
                    description={clubDetails!.description}
                    members={clubMembersDetails}
                    componentId={props.componentId}
                    uniqueName={props.uniqueName}
                    statistics={clubDetails!.statistic}
                    clubMemberState={clubDetails!.clubMemberState}
                    leaveClubHandle={leaveClubHandle}
                />
            }>
            {(openDrawer: any) => (
                <ClubDetails
                    isAuthenticated={isAuthenticated}
                    componentId={props.componentId}
                    fetchDetails={fetchClubDetails}
                    fetchIsPending={clubDetailsIsFetching}
                    loadMorePosts={loadMorePosts}
                    posts={posts}
                    postsIsFetching={postsIsFetching}
                    postsLoadMoreIsAllowed={postsLoadMoreIsAllowed}
                    postsHasFetched={postsHasFetched}
                    fetchClubDetails={fetchClubDetails}
                    clubDetailsIsFetching={clubDetailsIsFetching}
                    clubDetails={clubDetails!}
                    openDrawer={openDrawer}
                />
            )}
        </Drawer>
    );
}
