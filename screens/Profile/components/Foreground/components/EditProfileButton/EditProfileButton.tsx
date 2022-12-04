import React from 'react';

import { TouchableOpacity } from 'react-native';

import { ButtonBorderedLink } from 'components';

import { styles } from '../../../../styles';

interface EditProfileButtonProps {
    openUserDetails: () => void;
}

export function EditProfileButton(props: EditProfileButtonProps) {
    return (
        <TouchableOpacity onPress={props.openUserDetails} style={styles.basicProfileActivePanel}>
            <ButtonBorderedLink translateKey="profile.buttons.editProfile" onPressHandle={props.openUserDetails} />
        </TouchableOpacity>
    );
}
