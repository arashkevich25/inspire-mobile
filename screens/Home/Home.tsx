import { FilteredPostsListByStaticFilter } from 'navigation';
import React, { useEffect } from 'react';

import { FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Navigation } from 'react-native-navigation';

import { CustomRefreshControl } from 'components';
import { FilterPanel } from 'containers';
import {
    useFilters,
    useHomeTemplate,
    useInitUserData,
    useNetworkState,
    useUserCategories,
    useUserIntroSetup,
} from 'hooks';
import { StylesValue } from 'tools';
import { NavProps, ThemeVariables } from 'types';
import { Section, TilesCategories } from './components';

import { Styles } from './styles';

interface HomeProps extends NavProps {}

export const MODAL_COMPONENT_ID = 'filterByMapOrCategories';

export function Home(props: HomeProps) {
    const { init, rootUserDetails, hasInit } = useUserIntroSetup();
    const [sections, , , , initHomeHandle, isFetching] = useHomeTemplate();
    const { isInternetReachableState } = useNetworkState();
    const [, , setCategoryFilter, removeCategoryFilter, , removeMapFilter] = useFilters();
    const { allCategories } = useUserCategories();
    const { initUserDataFetched } = useInitUserData(rootUserDetails.id || 0);

    useEffect(() => {
        if (rootUserDetails.id && !hasInit) {
            init();
        }
        const event = Navigation.events().registerModalDismissedListener(({ componentId }) => {
            if (componentId === MODAL_COMPONENT_ID) {
                removeCategoryFilter();
                removeMapFilter();
            }
        });
        return () => {
            event.remove();
        };
    }, [rootUserDetails, initUserDataFetched]);

    async function setCategoryCallback(text: string) {
        await Navigation.showModal({
            stack: {
                id: MODAL_COMPONENT_ID,
                children: [
                    {
                        component: FilteredPostsListByStaticFilter(text),
                    },
                ],
            },
        });
    }

    async function setMapFilterCallback(town: string) {
        await Navigation.showModal({
            stack: {
                id: MODAL_COMPONENT_ID,
                children: [
                    {
                        component: FilteredPostsListByStaticFilter(town),
                    },
                ],
            },
        });
    }

    function renderItem({ item, index }: any): any {
        if (index === 0) {
            return (
                <>
                    <Section
                        isLastSection={index === sections.length - 1}
                        isInternetReachableState={isInternetReachableState}
                        key={index}
                        section={item}
                    />
                    <TilesCategories
                        setCategoryFilter={setCategoryFilter}
                        isInternetReachableState={isInternetReachableState}
                        setCategoryCallback={setCategoryCallback}
                        categories={allCategories}
                    />
                </>
            );
        }

        return (
            <Section
                isLastSection={index === sections.length - 1}
                isInternetReachableState={isInternetReachableState}
                key={index}
                section={item}
            />
        );
    }

    function keyExtractor(_: any, index: number): string {
        return String(index);
    }

    return (
        <LinearGradient
            colors={[StylesValue(ThemeVariables.BlackAndWhite), StylesValue(ThemeVariables.LightBlueAndBlack)]}
            style={Styles.linearGradient}>
            <FilterPanel
                setCategoryCallback={setCategoryCallback}
                setMapFilterCallback={setMapFilterCallback}
                isFiltersVisible={false}
                {...props}
            />
            <FlatList
                refreshControl={<CustomRefreshControl refreshing={isFetching} onRefresh={initHomeHandle} />}
                removeClippedSubviews={true}
                maxToRenderPerBatch={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={Styles.contentContainer}
                initialNumToRender={4}
                data={sections}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </LinearGradient>
    );
}
