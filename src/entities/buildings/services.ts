import {Building} from "@/entities/buildings/types";
import {DefaultResponse} from '@/shared/types/api';
import {bffHttpClient} from "@/shared/lib/bffHttpClient";

export const getBuildings = async (): Promise<
    DefaultResponse<Array<Building>>
> => {
    return await bffHttpClient<Array<Building>>(`buildings`, {
        next: {
            tags: ['buildings']
        }
    });
};