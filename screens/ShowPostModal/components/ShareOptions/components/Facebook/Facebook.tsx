import { isIphone } from 'app-constants';
import React from 'react';
import { IconBase } from '../IconBase';

import Share, { ShareAsset } from 'react-native-share';

import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

interface FacebookProps {
    url: string;
    imageBase64: string;
    closeModalHandle: () => void;
}

export function Facebook(props: FacebookProps) {
    function shareHandle() {
        props.closeModalHandle();
        const shareOptions = {
            stickerImage: `data:image/png;base64,${props.imageBase64}`,
            backgroundImage: `data:image/png;base64,${props.imageBase64}`,
            backgroundBottomColor: StylesValue(ThemeVariables.LightBlueAndBlack),
            backgroundTopColor: StylesValue(ThemeVariables.BlackAndWhite),
            attributionURL: props.url,
            appId: '234575384580180',
            // eslint-disable-next-line import/no-named-as-default-member
            social: Share.Social.FACEBOOK_STORIES,
            method: ShareAsset.StickerImage,
        };

        if (isIphone) {
            delete (shareOptions as any).backgroundImage;
        } else {
            delete (shareOptions as any).stickerImage;
            shareOptions.method = ShareAsset.BackgroundImage;
        }

        Share.shareSingle(shareOptions as any);
    }
    return <IconBase title="Facebook" shareHandle={shareHandle} icon={require('./../../../../../../assets/fb.png')} />;
}
