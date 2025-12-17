import {Suspense} from "react";
import {RatesWidget} from "@/widgets/rates/rates";
import {RatesSkeleton} from "@/widgets/rates/ratesSkeleton";
import {BuildingsWidget} from "@/widgets/buildings/buildings";
import {BuildingsSkeleton} from "@/widgets/buildings/buildingsSkeleton";
import {Container} from "@/shared/ui/container";


export default async function Home() {
    return (
        <div className="w-full mt-6">
            <main className="flex flex-col items-center w-full">
                <Container className='flex flex-col gap-4'>
                    <Suspense fallback={<RatesSkeleton/>}>
                        <RatesWidget/>
                    </Suspense>
                    <Suspense fallback={<BuildingsSkeleton/>}>
                        <BuildingsWidget/>
                    </Suspense>
                </Container>
            </main>
        </div>
    );
}
