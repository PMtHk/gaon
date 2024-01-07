import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="min-h-screen pt-16 lg:pt-20">{children}</div>
      <Footer />
    </div>
  );
}
