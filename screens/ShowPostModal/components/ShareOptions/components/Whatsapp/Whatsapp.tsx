import React from 'react';
import { IconBase } from '../IconBase';

import Share from 'react-native-share';

interface WhatsappProps {
    url: string;
    title: string;
    message: string;
    closeModalHandle: () => void;
}

export function Whatsapp(props: WhatsappProps) {
    function shareHandle() {
        props.closeModalHandle();
        const shareOptions = {
            title: props.title,
            message: props.message,
            url: props.url,
            // eslint-disable-next-line import/no-named-as-default-member
            social: Share.Social.WHATSAPP,
        };
        Share.shareSingle(shareOptions);
    }
    return <IconBase title="Whatsapp" shareHandle={shareHandle} icon={require('./../../../../../../assets/app.png')} />;
}
