import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import useAuthJwt from "@/hooks/useAuth";

export default function MainLayout({ children }) {
    const data = useAuthJwt();
    console.log("Check for jwt", data);

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