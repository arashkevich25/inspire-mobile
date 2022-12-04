import React from 'react';
import { switchSettings } from './constants/switchSettings';
import { PostDetailsValues } from './types/PostDetailsValues';

import { View } from 'react-native';
import { useNavigationBottomTabSelect } from 'react-native-navigation-hooks';

import { Switcher } from 'components/Switcher';
import { useAddPostState, useTagsGlobalSearch } from 'hooks';
import { SwitchItem } from 'types';
import { SummaryState } from './components/AddBasicPost/components/AddForm/AddForm';
import { initLocation } from './components/AddBasicPost/components/AddForm/constants/initLocation';

import { Styles } from './styles';

interface AddPostProps {
    initialFormValues?: PostDetailsValues;
    postSettings?: SummaryState;
    defaultActiveTab?: SwitchItem;
}

export const initialPostSettingsState: SummaryState = {
    isPublic: true,
    isSubscribers: false,
    isPrivate: false,
    isGroup: false,
    location: initLocation,
};

export function AddPost(props: AddPostProps) {
    const { resetAddPostStore } = useAddPostState();
    const { reset } = useTagsGlobalSearch();

    useNavigationBottomTabSelect(data => {
        if (data.selectedTabIndex !== 2) {
            resetAddPostStore();
            reset();
        }
    });

    return (
        <View style={Styles.contentContainer}>
            <Switcher switchSettings={switchSettings} {...props} />
        </View>
    );
}
