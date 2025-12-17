'use client'

import {FC, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {clsx} from "clsx";
import {Rate} from "@/entities/rates/types";
import {setUserRate} from "@/entities/rates/actions";
import {DefaultRate} from "@/entities/rates/consts";
import {Badge} from "@/shared/ui/badge";

export type RatesProps = {
    rates: Rate[]
    userRateCode: Rate['code']
};

export const Rates: FC<RatesProps> = ({rates, userRateCode}) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [activeRate, setActiveRate] = useState<Rate | null>(() => {
        const rateCode = (searchParams.get('rate') as Rate['code'] ?? userRateCode ?? DefaultRate)
        return rates.find(r => r.code === rateCode) ?? null
    })

    const handleChangeActiveRate = async (rate: Rate) => {
        setActiveRate(rate)
        await setUserRate(rate.code)
        router.replace(`${pathname}/?rate=${rate.code}`)
    }

    return (
        <>
            {
                <div className='flex gap-2 p-2 rounded-lg bg-slate-600'>
                    {
                        rates.map(rate => (
                                <Badge
                                    key={rate.id}
                                    data-testid={'currency-badge'}
                                    variant='secondary'
                                    className={
                                        clsx(
                                            'cursor-pointer bg-sky-500 text-stone-50',
                                            {'bg-sky-900': rate.id === activeRate?.id}
                                        )
                                    }
                                    onClick={() => handleChangeActiveRate(rate)}
                                >
                                    {rate.code}
                                </Badge>
                            )
                        )
                    }
                </div>
            }
        </>
    );
};