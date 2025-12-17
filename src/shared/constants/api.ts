import { DefaultResponse, DefaultResponseError } from '@/shared/types/api';

export const emptyDefaultResponse: DefaultResponse<never> = {
    data: null,
    meta: null,
    status: null,
    error: null,
};

export const emptyDefaultResponseError: DefaultResponseError = {
    title: 'Error',
    message: '',
    details: [],
};