import React from 'react';

import { View } from 'react-native';

import { SwitchItem } from 'types';
import { Button } from './components/Button/Button';

import { Styles } from './styles';

interface ToggleProps {
    activeItem: SwitchItem;
    setActiveTab: (item: SwitchItem) => void;
    settingsList: SwitchItem[];
}

export function Toggle(props: ToggleProps) {
    return (
        <View style={Styles.contentContainer}>
            {props.settingsList.map((item: SwitchItem, index) => (
                <Button
                    testId={item.testId}
                    countTabs={props.settingsList.length}
                    key={index}
                    isActive={props.activeItem.title === item.title}
                    pressHandle={props.setActiveTab}
                    tabItem={item}
                />
            ))}
        </View>
    );
}
