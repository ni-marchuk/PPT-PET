import {FC} from "react";
import {getRates, getUserRate} from "@/entities/rates/services";
import {Rates} from "@/features/rates/rates";

export const RatesWidget: FC = async () => {
    const {data: rates} = await getRates({
        param: 'codes',
        values: ["THB", "RUB", "EUR", "USD"]
    });

    const userRateCode = await getUserRate();

    return (
        <Rates
            rates={rates ?? []}
            userRateCode={userRateCode}
        />
    )
};