import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const result = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20");
    const data = await result.json();
    return NextResponse.json(data)

}