import { ChooseLocationFilter, GlobalSearch, NoConnectionStatus } from 'navigation';
import React from 'react';
import { useSelector } from 'react-redux';

import { View } from 'react-native';
// eslint-disable-next-line import/no-named-as-default
import Config from 'react-native-config';
import { Navigation } from 'react-native-navigation';

import { Text } from 'components';
import { PostUploadStatus } from 'containers';
import { useFilters, useNetworkState } from 'hooks';
import { AppState } from 'reducers';
import { categories, categoriesHasFetched, isAuthenticated } from 'selectors';
import I18n from 'tools/translate';
import { NavProps, Sizes } from 'types';
import { Filters, TopPanel } from './components';

import { Styles } from './styles';

interface FilterPanelProps extends NavProps {
    isBorderVisible?: boolean;
    isFiltersVisible?: boolean;
    setCategoryCallback?: (text: string) => void;
    setMapFilterCallback?: (town: string) => void;
}

FilterPanel.defaultProps = {
    isBorderVisible: true,
    isFiltersVisible: true,
};

export function FilterPanel(props: FilterPanelProps) {
    const [
        selectedCategories,
        selectedMap,
        setCategoryFilter,
        removeCategoryFilter,
        ,
        removeMapFilter,
        getCategoryById,
    ] = useFilters();
    const fetchedCategories = useSelector((state: AppState) => categories(state));
    const categoriesFetched = useSelector((state: AppState) => categoriesHasFetched(state));
    const authenticated = useSelector((state: AppState) => isAuthenticated(state));
    const { isInternetReachableState } = useNetworkState();

    const setFilter = (id: number) => {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        if (selectedCategories === id) {
            removeCategoryFilter();
            return;
        }
        setCategoryFilter(id);
        if (props.setCategoryCallback) {
            props.setCategoryCallback(I18n.t(getCategoryById(id).tkey));
        }
    };

    async function openLocationFilter() {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        if (selectedMap) {
            removeMapFilter();
            return;
        }
        await Navigation.showModal({
            stack: { children: [{ component: ChooseLocationFilter(props.setMapFilterCallback) }] },
        });
    }

    async function pressHandle() {
        if (!isInternetReachableState) {
            // TODO empty props, waiting for https://github.com/wix/react-native-navigation/issues/6763
            Navigation.push(props.componentId, { component: NoConnectionStatus('') });
            return;
        }
        await Navigation.push(props.componentId, { component: GlobalSearch() });
    }

    return (
        <>
            <View style={[Styles.contentContainer, { borderBottomWidth: props.isBorderVisible ? 0.3 : 0 }]}>
                <TopPanel
                    authenticated={authenticated}
                    openLocationSearch={pressHandle}
                    selectedMap={selectedMap}
                    openLocationFilter={openLocationFilter}
                />
                {props.isFiltersVisible ? (
                    <Filters
                        categoriesFetched={categoriesFetched}
                        fetchedCategories={fetchedCategories || []}
                        selectedCategories={selectedCategories}
                        selectedMap={selectedMap}
                        setFilter={setFilter}
                    />
                ) : null}
            </View>
            <PostUploadStatus />
            {Config.COMMON_SOCIETY_API.includes('beta') ? (
                <View style={Styles.betaContainer}>
                    <Text isBold={true} fontSize={Sizes.Medium} style={Styles.betaText}>
                        BETA API
                    </Text>
                </View>
            ) : null}
        </>
    );
}
