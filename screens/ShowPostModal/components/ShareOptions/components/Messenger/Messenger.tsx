import React from 'react';
import { IconBase } from '../IconBase';

import Share from 'react-native-share';

interface MessengerProps {
    url: string;
    title: string;
    message: string;
    closeModalHandle: () => void;
}

export function Messenger(props: MessengerProps) {
    function shareHandle() {
        props.closeModalHandle();
        const shareOptions = {
            title: props.title,
            message: props.message,
            url: props.url,
            // eslint-disable-next-line import/no-named-as-default-member
            social: Share.Social.MESSENGER,
        };
        Share.shareSingle(shareOptions);
    }
    return (
        <IconBase title="Messenger" shareHandle={shareHandle} icon={require('./../../../../../../assets/msg.png')} />
    );
}
