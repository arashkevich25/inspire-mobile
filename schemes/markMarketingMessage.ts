import { gql } from '@apollo/client';

export const MARK_MARKETING_MESSAGE = gql`
    mutation markMarketingMessage($statistic: MarketingMessageStatisticInput, $marketingId: Int) {
        markMarketingMessage(statistic: $statistic, marketingId: $marketingId) {
            id
        }
    }
`;
