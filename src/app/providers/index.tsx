'use client';

import React, {FC, PropsWithChildren} from 'react';

/** Сюда будут добавляться провайдеры */

export const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};
