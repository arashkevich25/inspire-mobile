import { MarketingResponse } from '@inspire/types';
import { ComponentId, ComponentName } from 'navigation/constants';

export const Encouraging = (marketing: MarketingResponse) => ({
    name: ComponentName.ScreenEncouraging,
    id: ComponentId.ScreenEncouraging,
    passProps: {
        marketing,
    },
    options: {
        layout: {
            componentBackgroundColor: 'transparent',
        },
        overlay: {
            interceptTouchOutside: true,
        },
    },
});
