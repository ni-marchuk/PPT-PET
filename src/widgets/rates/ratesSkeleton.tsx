import { Skeleton } from "@/shared/ui/skeleton";

export const RatesSkeleton = () => {
    return (
        <div className='flex gap-2 p-2 rounded-lg bg-slate-600'>
            {["THB", "USD", "EUR", "RUB"].map((cur) => (
                <Skeleton key={cur} className="w-10.5 h-5 rounded-full" />
            ))}
        </div>
    );
};
