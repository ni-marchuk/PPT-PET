export type DefaultResponse<T> = {
    data: T | null;
    meta: Meta | null;
    status: 'success' | 'error' | null;
    error: DefaultResponseError | null;
};

export type ResponseDataWithMessage = {
    message: string;
};

export type Meta = {
    pagination: Pagination;
    sorting: Sorting;
    filtering: Filtering;
    query: Query;
    timing: Timing;
};

export type Pagination = {
    total: number;
    totalPages: number;
    page: number;
    perPage: number;
    offset: number;
    limit: number;
};

export type Sorting = {
    sortBy: string;
    order: 'asc' | 'desc';
};

export type Filtering = {
    filters: Filter[];
};

export type Filter = {
    field: string;
    operator: 'eq' | 'neq' | 'gt' | 'lt' | 'gte' | 'lte';
    value: string;
};

export type Query = {
    param: string;
    values: string[];
};

export type Timing = {
    executionTime: number;
    databaseTime: number;
};

export type DefaultResponseError = {
    title: string;
    message: string;
    details: Array<{ field: string; value: string; code?: number }>;
    code?: number;
};
