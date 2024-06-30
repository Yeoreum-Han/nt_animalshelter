import { NextResponse } from "next/server"
   
  export async function GET() {

    const API_URL = process.env.NEXT_PUBLIC_DOMAIN_URL
    const ENC_KEY = process.env.NEXT_PUBLIC_API_ENC_KEY
    // 전체 데이터 개수 data.response.body.items.item.totalCount값
    const totalData = 223
    const res = await fetch(`${API_URL}?numOfRows=${totalData}&pageNo=1&_type=json&serviceKey=${ENC_KEY}`)
    const data = await res.json()

    return NextResponse.json({data})
  }