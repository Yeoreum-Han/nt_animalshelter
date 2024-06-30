'use client'

import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useRef } from "react";
import { FormEvent } from "react";

export default function Home() {
  // 페이지 렌더링 할 필요 없어서 ref사용 (state말고)
  const ref = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const linkDog = "dog"
  const linkCat = "cat"
  const linkEtc = "etc"

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    let inputValue = ref.current?.value;
    const actionUrl = `/searchResult?loc=${inputValue}`

    if (ref.current != null) {
      ref.current.value = ""
    }
    router.push(actionUrl)
  }
  return (
    <div className="flex flex-col min-h-screen justify-center items-center overflow-hidden">
      <header className="flex min-w-screen min-h-16 mt-48 pb-8 box-border text-center">
        <Link href="/" className="flex min-w-52 w-52 min-h-16 box-border bg-no-repeat bg-center bg-cover bg-logotext"/>
      </header>
      <main className="flex flex-col min-h-full min-w-screen mb-auto px-20 box-border">
        <form className="flex flex-row min-h-full mb-2 box-border"
        name="searchForm" onSubmit={handleSubmit}>
          <input className="flex min-h-10 min-w-52 outline-0 rounded-l-lg border-2 border-gray-400 text-center text-sm text-gray-700 tracking-wider placeholder:italic placeholder:text-xs"
          ref={ref} name="loc" type="text" placeholder="경기도 성남시" minLength={2} maxLength={10} />
          <button className="flex min-w-10 bg-no-repeat bg-center bg-60% bg-search rounded-r-lg border-2 border-l-0 border-gray-400" type="submit"/>
        </form>
        <div className="flex flex-row justify-stretch min-w-full min-h-28 py-6 px-4 box-border grid grid-flow-col ">
          <Link href={`${linkDog}`} className="flex bg-no-repeat bg-center bg-60% bg-dog rounded-full bg-logopurple"/>
          <Link href={`${linkCat}`} className="flex mx-2 bg-no-repeat bg-center bg-60% bg-cat rounded-full bg-logopurple"/>
          <Link href={`${linkEtc}`} className="flex bg-no-repeat bg-center bg-60% bg-etc rounded-full bg-logopurple"/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
