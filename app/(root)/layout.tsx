import Counseling from "@/components/Counseling";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="min-h-screen pt-16 lg:pt-20">{children}</div>
      <div className="fixed bottom-4 lg:bottom-8 xl:bottom-12 z-10 right-4 lg:right-[calc(50vw-512px+20px)] xl:right-[calc(50vw-640px+24px)] transition-all">
        <Counseling />
      </div>
      <Footer />
    </div>
  );
}
