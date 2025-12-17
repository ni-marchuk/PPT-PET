import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Skeleton } from "@/shared/ui/skeleton";

export const BuildingCardSkeleton = () => {
    return (
        <Card className="transition-shadow">
            <CardHeader className="space-y-1 mb-6">
                <CardTitle>
                    <Skeleton className="h-5 w-3/4" />
                </CardTitle>
                <div className="space-y-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            </CardHeader>
            <CardContent className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-4 w-20" />
                </div>

                <div className="flex flex-col gap-1 items-end">
                    <Skeleton className="h-3 w-10" />
                    <Skeleton className="h-4 w-24" />
                </div>
            </CardContent>
        </Card>
    );
};
