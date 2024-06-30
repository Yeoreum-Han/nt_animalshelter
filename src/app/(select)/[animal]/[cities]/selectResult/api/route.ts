import { NextRequest, NextResponse } from "next/server"
   
  export async function GET(_req: NextRequest, { params }: { params: { animal: string, cities: string } }) {

    const { animal, cities } = params;
    const API_URL = process.env.NEXT_PUBLIC_DOMAIN_URL
    // const API_URL = process.env.NEXT_PUBLIC_DATA_URL
    const ENC_KEY = process.env.NEXT_PUBLIC_API_ENC_KEY
    // 전체 데이터 개수 data.response.body.items.item.totalCount값
    const totalData = 223
    const res = await fetch(`${API_URL}/${animal}/${cities}/selectResult/api?numOfRows=${totalData}&pageNo=1&_type=json&serviceKey=${ENC_KEY}`)
    const data = await res.json()

    return NextResponse.json({data})
  }