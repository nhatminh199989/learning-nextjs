import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 sm:px-0">
                <main> { children } </main>
            </div>
            <Footer />
        </>
    );
}