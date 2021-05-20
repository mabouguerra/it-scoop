import Header from "@/components/header";
import Footer from "@/components/footer";
import Meta from "@/components/meta";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 sm:pb-36 pb-28 lg:pb-40">
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
