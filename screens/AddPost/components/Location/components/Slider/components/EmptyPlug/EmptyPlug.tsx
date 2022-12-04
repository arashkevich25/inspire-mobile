import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Text } from 'components';
import { getLocalizationPermission } from 'tools';
import { Sizes } from 'types';

import { Styles } from './styles';

interface EmptyPlugProps {
    getAddressCallback: () => void;
}

export function EmptyPlug(props: EmptyPlugProps) {
    function getPermissionAndTryAgain() {
        getLocalizationPermission(props.getAddressCallback);
    }

    return (
        <TouchableOpacity onPress={getPermissionAndTryAgain} style={Styles.contentContainer}>
            <Text color="gray" fontSize={Sizes.XSmall} translateKey="addPost.titles.localizationNotFound" />
        </TouchableOpacity>
    );
}
