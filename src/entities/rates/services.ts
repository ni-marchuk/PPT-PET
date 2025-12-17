import {cookies} from "next/headers";
import {Rate} from "@/entities/rates/types";
import {DefaultRate} from "@/entities/rates/consts";
import {DefaultResponse, Meta} from '@/shared/types/api';
import {bffHttpClient} from "@/shared/lib/bffHttpClient";

export const getRates = async (params: Meta['query']): Promise<
    DefaultResponse<Array<Rate>>
> => {
    const searchParams = new URLSearchParams({
        codes: params.values.join(","),
    })
    return await bffHttpClient<Array<Rate>>(`rates?${searchParams}`, {
        next: {
            tags: ['rates']
        }
    });
};

export const getUserRate = async () => {
    const cookieStore = await cookies()
    return cookieStore.get('user_rate_code')?.value as Rate['code'] ?? DefaultRate
}