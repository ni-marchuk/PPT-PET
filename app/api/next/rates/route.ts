import {NextResponse, NextRequest} from 'next/server';
import {Rate} from "@/entities/rates/types";

const Rates: Rate[] = [
    {
        id: 1,
        code: 'THB',
        value: 1
    },
    {
        id: 2,
        code: 'USD',
        value: 0.0286
    },
    {
        id: 3,
        code: 'EUR',
        value: 0.0263
    },
    {
        id: 4,
        code: 'RUB',
        value: 2.57
    },
]

export async function GET(
    request: NextRequest,
) {
    const searchParams = request.nextUrl.searchParams;
    const codes = searchParams.get('codes')?.split(',')

    return NextResponse.json({
        meta: {
            query: [
                {
                    queryString: 'codes',
                    fields: codes
                }
            ]
        },
        data: Rates.filter(r => codes?.includes(r.code)),
        status: 'success',
        error: null
    })
}
