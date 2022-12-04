import React, { useEffect, useState } from 'react';
import { switchSettings } from './constants/switchSettings';

import { View } from 'react-native';

import { SearchInput } from 'components/SearchInput';
import { Switcher } from 'components/Switcher';
import { usePostsGlobalSearch, useTagsGlobalSearch } from 'hooks';
import I18n from 'tools/translate';
import { NavProps } from 'types';

import { Styles } from './styles';

interface GlobalSearchProps extends NavProps {}

export function GlobalSearch(props: GlobalSearchProps) {
    const { reset } = usePostsGlobalSearch();
    const { reset: tagsReset } = useTagsGlobalSearch();
    const [query, setQuery] = useState('');

    function clearInput() {
        setQuery('');
    }

    useEffect(
        () => () => {
            reset();
            tagsReset();
        },
        [],
    );

    return (
        <View style={Styles.contentContainer}>
            <SearchInput
                value={query}
                changeValue={setQuery}
                clearHandle={clearInput}
                placeholder={I18n.t('globalSearch.searchInputPlaceholder')}
            />
            <Switcher switchSettings={switchSettings} query={query} {...props} />
        </View>
    );
}
