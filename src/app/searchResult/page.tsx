"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import List from "@/components/List";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Info } from "@/utils/info";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function SearchResult() {
    const searchParams = useSearchParams()
    const locKeyword = searchParams.get('loc') || ''
    const [resultData, setResultData] = useState<Info[]>([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            // source로 fetch
            const response = await fetch('/api/search')
            const data = await response.json();

            const lists = data.response.body.items.item as Info[]
            // 지역 keyword를 포함하는 데이터만 
            const locLists = lists.filter((list: Info) => list.careAddr && list.careAddr.startsWith(locKeyword))
            setResultData(locLists)
            setIsLoading(false)
        }
        fetchData()
    }, []);

    return (
        <div className="flex flex-col min-h-screen min-w-screen">
            <Header />
            <main className="flex flex-col min-h-full mb-auto pb-4 box-border">
                {isLoading === true ? <LoadingSpinner /> : resultData.length === 0 ?
                    <div className="flex flex-col justify-center items-center mt-40 min-w-full min-h-full">
                        <div className="flex flex-col min-w-16 min-h-16 bg-no-repeat bg-center bg-60% bg-noresult" />
                        <p className="mb-2 text-black text-sm font-bold tracking-wider">&quot; {locKeyword} &quot; </p>
                        <p className="flex min-w-fit min-h-8 text-gray-500 text-center text-xs tracking-wider">
                            검색결과가 없습니다.
                        </p>
                    </div>
                    : <div className="flex flex-col justify-items-center items-center min-w-screen min-h-full pb-4 box-border overflow-hidden">
                        <List resultData={resultData} />
                    </div>
                }
            </main>
            <Footer />
        </div>
    );
}