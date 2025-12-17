import {FC} from "react";
import {BuildingList} from "@/features/buildingList/buildingList";
import {getRates, getUserRate} from "@/entities/rates/services";
import {getBuildings} from "@/entities/buildings/services";

export const BuildingsWidget: FC = async () => {
    const {data: rates} = await getRates({
        param: 'codes',
        values: ["THB", "RUB", "EUR", "USD"]
    });

    const {data: buildings} = await getBuildings();

    const userRateCode = await getUserRate();


    return <BuildingList rates={rates ?? []} buildings={buildings ?? []} userRateCode={userRateCode}/>;
};