'use client'

import {FC} from "react";
import {BuildingCard} from "@/entities/buildings/components/buildingCard/buildingCard";
import {Building} from "@/entities/buildings/types";
import {Rate} from "@/entities/rates/types";

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
    const currentRate = rates?.find(rate => rate.code === userRateCode)

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