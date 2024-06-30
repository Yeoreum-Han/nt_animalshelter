"use client"
import { Info } from "@/utils/info"

interface DataProps {
    resultData: Info[]
}

export default function List({ resultData }: DataProps) {
    return (
        <div className={`flex flex-col justify-items-center items-center grid grid-cols-1 ${resultData.length > 1 && "sm:grid-cols-2"} md:gap-x-6 lg:grid-cols-3 min-w-96 w-content mt-8 py-4 px-14 sm:px-10 md:px-0 box-border`}>
            {resultData.map((info: Info, i: number) => (
                <div className="flex flex-col min-w-screen w-72 xs:w-11/12 md:w-72 min-h-9 h-44 mb-6 px-6 py-4 box-border border border-gray-500 rounded-lg" key={i}>
                    <h5 className="text-base text-gray-700 font-semibold tracking-wider">{info.careNm}</h5>
                    <p className="min-h-8 my-2 text-xs italic">{info.careAddr}</p>
                    <div className="flex flex-row justify-between mb-2 text-sm tracking-wider">
                        <p>{info.weekOprStime}-{info.weekOprEtime}</p>
                        <p>{info.careTel}</p>
                    </div>
                    <div className="flex flex-row justify-between text-xs">
                        {/* {split전에 undefined값이 올 수 있으므로 ?으로 처리} */}
                        <p className="w-1/2">휴무: {info.closeDay?.split("+").join(" ") === "0" ? "x" : info.closeDay?.split("+").join(" ")}</p>
                        <p className="w-1/2 min-h-8 text-end tracking-wider break-keep">
                            {info.saveTrgtAnimal?.split("+").join(" ")}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}