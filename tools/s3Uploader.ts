import { base64FromFile } from './base64FromFile';
import { getArrayBuffer } from './getArrayBuffer';

import fetchWithTimeout from '@gluons/react-native-fetch-with-timeout';

import { client } from 'configs/graphql';
import { RollbarLogging } from 'tools';
import { GENERATE_PRESIGNED_URL } from '../schemes/generatePresignedUrl';

export function s3Uploader(file: any, categoryId: any, timeoutCallback: (error: any) => void): Promise<any> {
    return new Promise(
        async (response): Promise<void> => {
            const { uri } = file;
            const base64 = await base64FromFile(uri);
            const arrayBuffer = getArrayBuffer(base64);
            const splitedPath = uri.split('/');
            const fileName = splitedPath[splitedPath.length - 1];

            try {
                const {
                    data: { generatePresignedUrl },
                } = await client.query({
                    query: GENERATE_PRESIGNED_URL,
                    variables: { key: `${categoryId.join(', ')}/${fileName}` },
                });

                try {
                    const { url } = await fetchWithTimeout(
                        generatePresignedUrl,
                        {
                            method: 'PUT',
                            body: arrayBuffer,
                            headers: {
                                'Content-Type': 'image/jpeg',
                            },
                        },
                        {
                            timeout: 30000,
                        },
                    );
                    response({
                        postResponse: {
                            location: url.split('?')[0],
                        },
                    });
                } catch (error) {
                    RollbarLogging.reportErrorAtSpace(error as Error, 'UPLOAD IMAGE');
                    timeoutCallback(error);
                }
            } catch (error) {
                RollbarLogging.reportErrorAtSpace(error as Error, 'GET PREDESIGNED URL');
                timeoutCallback(error);
            }
        },
    );
}
