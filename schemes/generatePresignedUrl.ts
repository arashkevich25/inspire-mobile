import { gql } from '@apollo/client';

export const GENERATE_PRESIGNED_URL = gql`
    query GeneratePresignedUrl($key: String) {
        generatePresignedUrl(key: $key)
    }
`;
