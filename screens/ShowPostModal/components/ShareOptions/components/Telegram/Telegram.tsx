import React from 'react';
import { IconBase } from '../IconBase';

import Share from 'react-native-share';

interface TelegramProps {
    url: string;
    title: string;
    message: string;
    closeModalHandle: () => void;
}

export function Telegram(props: TelegramProps) {
    function shareHandle() {
        props.closeModalHandle();
        const shareOptions = {
            title: props.title,
            message: props.message,
            url: props.url,
            // eslint-disable-next-line import/no-named-as-default-member
            social: Share.Social.TELEGRAM,
        };
        Share.shareSingle(shareOptions);
    }
    return (
        <IconBase
            title="Telegram"
            shareHandle={shareHandle}
            icon={require('./../../../../../../assets/telegram.png')}
        />
    );
}
