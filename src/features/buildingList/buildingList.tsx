'use client'

import {FC} from "react";
import {useSearchParams} from "next/navigation";
import {BuildingCard} from "@/entities/buildings/components/buildingCard/buildingCard";
import {Building} from "@/entities/buildings/types";
import {Rate} from "@/entities/rates/types";
import {DefaultRate} from "@/entities/rates/consts";

type BuildingListProps = {
    rates: Rate[],
    buildings: Building[],
    userRateCode: Rate['code']
}

export const BuildingList: FC<BuildingListProps> = ({
                                                        rates,
                                                        buildings,
                                                        userRateCode,
                                                    }) => {
    const searchParams = useSearchParams()
    const currentRate = rates?.find(rate => rate.code === (searchParams.get('rate') as Rate['code'] ?? userRateCode ?? DefaultRate))

    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentRate && buildings.map(building => (
                <BuildingCard
                    key={building.id}
                    building={building}
                    currentRate={currentRate}
                />
            ))}
        </div>
    );
};