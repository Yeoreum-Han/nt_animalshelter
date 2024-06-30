"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { citiesCode } from "@/utils/citiesCode";

export default function Cities() {
  const pathname = usePathname()
  // 객체로 도시명-지역번호 연결
  return (
    <div className="flex flex-col justify-center items-center min-h-full min-w-screen">
      <div className="flex min-h-full min-w-screen mt-8 grid grid-cols-4 xs:gap-4 sm:gap-6">
        {Object.entries(citiesCode).map(([city, code], i) => (
          <Link href={`${pathname}/${code}/selectResult`} key={i}
            className="flex min-h-16 min-w-10 w-20 sm:w-24 mx-1 my-2 box-border border border-gray-400 rounded-lg text-gray-700 bg-gradient-to-l hover:bg-gradient-to-r-red to-blue-500 hover-cursor-point">
            <span className="flex items-center justify-center min-w-full min-h-full text-sm tracking-wider">{city}</span></Link>
        ))}
      </div>
    </div>
  );
}