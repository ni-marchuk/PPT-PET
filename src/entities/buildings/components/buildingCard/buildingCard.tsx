import {FC} from "react";
import {Building} from "@/entities/buildings/types";
import {Rate} from "@/entities/rates/types";
import {Card, CardContent, CardHeader, CardTitle} from "@/shared/ui/card";

type BuildingCardProps = {
    building: Building;
    currentRate: Rate;
};

export const BuildingCard: FC<BuildingCardProps> = ({building, currentRate}) => {
    return (
        <Card className="transition-shadow hover:shadow-md">
            <CardHeader className="space-y-1">
                <CardTitle className="text-lg font-semibold">
                    {building.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {building.description}
                </p>
            </CardHeader>
            <CardContent className="flex items-start justify-between">
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Площадь:{" "}</span>
                    <span className="font-medium text-foreground">{building.area} м²</span>
                </div>
                <div className="flex flex-col">
                    <div className="text-xs text-muted-foreground">Цена</div>
                    <div className="font-medium text-foreground" data-testid={'building-card-price'}>
                        {(building.price * currentRate.value).toLocaleString("en-US")} {currentRate.code}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
