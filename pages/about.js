import Container from "@/components/container";
import Layout from "@/components/layout";
import About from "@/components/about";
import Head from "next/head";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>
          المجلة التقنية | مقالات تقنية (وغير تقنية) بأسلوبٍ مُبسّط خالٍ من
          التعقيد، وبلُغةٍ عربيةٍ فصيحةٍ وسَلِسة
        </title>
      </Head>
      <Container>
        <About />
      </Container>
    </Layout>
  );
}
