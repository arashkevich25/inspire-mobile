import React from 'react';
import { isIphone } from '../../../../../../app-constants/isIphone';
import { IconBase } from '../IconBase';

import Share from 'react-native-share';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

interface InstagramProps {
    closeModalHandle: () => void;
    imageBase64: string;
    url: string;
}

export function Instagram(props: InstagramProps) {
    function shareHandle() {
        props.closeModalHandle();
        const shareOptions = {
            stickerImage: `data:image/png;base64,${props.imageBase64}`,
            backgroundImage: `data:image/png;base64,${props.imageBase64}`,
            backgroundBottomColor: StylesValue(ThemeVariables.LightBlueAndBlack),
            backgroundTopColor: StylesValue(ThemeVariables.BlackAndWhite),
            attributionURL: props.url,
            // eslint-disable-next-line import/no-named-as-default-member
            social: Share.Social.INSTAGRAM_STORIES,
        };

        if (isIphone) {
            delete (shareOptions as any).backgroundImage;
        } else {
            delete (shareOptions as any).stickerImage;
        }

        Share.shareSingle(shareOptions);
    }

    return <IconBase title="Instagram" shareHandle={shareHandle} icon={require('./../../../../../../assets/ig.png')} />;
}
