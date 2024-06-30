import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SelectLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <section className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </section>
    )
}