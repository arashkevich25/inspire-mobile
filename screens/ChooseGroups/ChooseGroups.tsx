import React, { useEffect } from 'react';

import { FlatList } from 'react-native';

import { EmptyPlug } from 'components';
import { useGroups } from 'hooks';
import I18n from 'tools/translate';
import { GroupToggle } from './components/GroupToggle';

import { Styles } from './styles';

export function ChooseGroups() {
    const [groups, getGroups, chosenGroups, selectGroup] = useGroups();

    useEffect(() => getGroups(), []);

    if (!groups.length) {
        return <EmptyPlug text={I18n.t('addPost.titles.emptyGroupList')} />;
    }

    return (
        <FlatList
            extraData={chosenGroups}
            style={Styles.list}
            keyExtractor={item => String(item.id)}
            data={groups.map(({ group }, index) => ({ ...group, key: index.toString() }))}
            renderItem={({ item, index }) => (
                <GroupToggle
                    key={index}
                    isSelected={chosenGroups.includes(item.id)}
                    group={item}
                    pressHandle={selectGroup}
                />
            )}
        />
    );
}
