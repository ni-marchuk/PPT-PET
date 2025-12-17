import {
    emptyDefaultResponse,
    emptyDefaultResponseError,
} from '@/shared/constants/api';
import {DefaultResponse} from '@/shared/types/api';

const defaultHeaders = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
};

type FetchOptions = RequestInit & {
    headers?: HeadersInit;
};

export async function bffHttpClient<T>(
    url: string,
    options?: FetchOptions,
): Promise<DefaultResponse<T>> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_API_URL;
    const headers = {
        ...defaultHeaders,
        ...(options?.headers || {}),
    };
    const response = await fetch(`${baseUrl}${url}`, {
        ...options,
        headers: headers,
    });

    const data: DefaultResponse<T> = await response?.json();

    if (data) return data;

    return {
        ...emptyDefaultResponse,
        status: 'error',
        error: {
            ...emptyDefaultResponseError,
            message: JSON.stringify(`Error ${response.status} : ${response.statusText}`),
        },
    };
}
