"use server";

import { cookies } from "next/headers";
import {Rate} from "@/entities/rates/types";

export async function setUserRate(code: Rate['code']) {
    const cookieStore = await cookies()

    cookieStore?.set("user_rate_code", code, {
        path: "/",
        httpOnly: true,
    });
}
