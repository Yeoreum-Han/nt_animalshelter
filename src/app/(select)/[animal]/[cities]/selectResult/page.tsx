"use client"
import List from "@/components/List";

import { useState, useEffect } from "react";
import { Info } from "@/utils/info";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import { getKey } from "@/utils/getKey";

export default function SelectResult() {
    const [resultData, setResultData] = useState<Info[]>([])
    const pathname = usePathname()
    const [, animal, city] = pathname.split("/")
    const [isLoading, setIsLoading] = useState(true)

    const animalWords: { [key: string]: string } = {
        "dog": "개",
        "cat": "고양이",
        "etc": "기타"
    }
    const animalKor = animalWords[animal]
    const cityKor = getKey(city)

    useEffect(() => {
        async function fetchData() {
            // const API_URL = process.env.NEXT_PUBLIC_DATA_URL
            const API_URL = process.env.NEXT_PUBLIC_DOMAIN_URL

            const ENC_KEY = process.env.NEXT_PUBLIC_API_ENC_KEY
            const totalData = 223

            const response = await fetch(`${API_URL}?numOfRows=${totalData}&pageNo=1&_type=json&serviceKey=${ENC_KEY}`)
            const data = await response.json();

            const lists = data.response.body.items.item as Info[]
            let locLists: Info[] = []

            // animal, city를 포함하는 데이터만 
            if (animalKor === '기타') {
                // 개, 고양이 외의 동물도 구조하는곳 filter
                locLists = lists.filter((list: Info) =>
                    list.careAddr?.startsWith(cityKor) &&
                    // '개+고양이+기타' 형태라 +를 기준으로 자르고,
                    // 개, 고양이가 아닌게 있는 경우만. (true return)
                    list.saveTrgtAnimal?.split("+")
                        .some(animalType => animalType !== "개" && animalType !== "고양이"))
            } else {
                locLists = lists.filter((list: Info) =>
                    list.careAddr?.startsWith(cityKor) && list.saveTrgtAnimal?.includes(animalKor)
                )
            }

            setResultData(locLists)
            setIsLoading(false)
        }
        fetchData()
    }, []);

    return (
        <div className="flex flex-col justify-items-center items-center min-w-screen min-h-full pb-4 box-border overflow-hidden">
            {isLoading === true ? <LoadingSpinner />
                : resultData.length === 0 ? <div className="flex flex-col justify-center items-center mt-40 min-w-full min-h-full">
                    <div className="flex min-w-16 min-h-16 bg-no-repeat bg-center bg-60% bg-noresult" />
                    <p className="flex min-w-fit min-h-8 text-gray-500 text-center text-xs tracking-wider">검색결과가 없습니다</p>
                </div>
                    : <List resultData={resultData} />}
        </div>
    );
}