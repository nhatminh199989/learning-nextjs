import { NextResponse } from "next/server";

export function stackMiddleware( middlewareList, index = 0) {
    const current = middlewareList[index];
    if (current) {
        const next = stackMiddleware(middlewareList, index + 1)
        return current(next);
    }
    return () => NextResponse.next();
}