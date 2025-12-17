import {BuildingCardSkeleton} from "@/entities/buildings/components/buildingCard/buildingCardSkeleton";

export const BuildingsSkeleton = () => {
    const skeletons = Array.from({length: 10});
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                skeletons.map((_, index) => (
                    <BuildingCardSkeleton key={index} />
                ))
            }
        </div>
    );
};
