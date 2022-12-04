import { MarketingMessage } from '@inspire/types';

import { client } from 'configs/graphql';
import { MARK_MARKETING_MESSAGE } from 'schemes';

export async function setActionOnMarketingMessage(
    primaryButtonIsClicked: boolean,
    secondaryButtonIsClicked: boolean,
    marketingId: number,
) {
    await client.mutate<{ initMarketing: MarketingMessage }>({
        mutation: MARK_MARKETING_MESSAGE,
        variables: {
            statistic: {
                primaryButtonIsClicked,
                secondaryButtonIsClicked,
            },
            marketingId,
        },
    });
}
