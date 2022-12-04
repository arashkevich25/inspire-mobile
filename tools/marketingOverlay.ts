import { MarketingMessageTypes, MarketingResponse } from '@inspire/types';

import { Navigation } from 'react-native-navigation';

import { Encouraging } from 'navigation/components/encouraging';

export function showMarketingOverlay(marketing: MarketingResponse) {
    switch (marketing.message.type) {
        case MarketingMessageTypes.AddPostEncourage: {
            Navigation.showOverlay({
                component: Encouraging(marketing),
            });
            break;
        }
    }
}
