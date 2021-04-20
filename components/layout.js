import Header from "@/components/header";
import Footer from "@/components/footer";
import Meta from "@/components/meta";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
