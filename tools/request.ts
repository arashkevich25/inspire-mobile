// eslint-disable-next-line import/no-named-as-default
import Config from 'react-native-config';

import { SocietyConfig } from '../configs/config';

export function request<T = any>(method: string, url: string, token = null, body = ''): Promise<T> {
    const initReq = {
        method,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'api-key': Config.API_KEY,
        },
        body,
    };

    return fetch(`${SocietyConfig.restApi}${url}`, initReq).then(
        // @ts-ignore
        (response: Response): Promise<T> => response.json<T>(),
    );
}

export async function requestHub<T = any>(
    method: string,
    url: string,
    token = null,
    body = '',
): Promise<{ statusCode: number; data: T }> {
    const initReq = {
        method,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'api-key': Config.API_KEY,
        },
        body,
    };

    const response = await fetch(url, initReq);
    const data = await response.json<T>();

    return {
        statusCode: response.status,
        data,
    };
}
