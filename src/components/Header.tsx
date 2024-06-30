import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col justify-center items-center min-w-full min-h-20 ">
            <Link href="/" className="w-40 min-h-10 mt-10 bg-no-repeat bg-start bg-contain bg-logotext hover-cursor-pointer"/>
        </header>
    )
};