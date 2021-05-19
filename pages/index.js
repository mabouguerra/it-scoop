import Container from "@/components/container";
import Layout from "@/components/layout";
import Paginator from "@/components/paginator";
import PostsList from "@/components/posts-list";
import { getPostsByPage, PAGE_COUNT } from "@/lib/api";
import Head from "next/head";

export default function Home({ posts, currentPage, pageCount }) {
  return (
    <Layout>
      <Head>
        <title>
          المجلة التقنية | مقالات تقنية (وغير تقنية) بأسلوبٍ مُبسّط خالٍ من
          التعقيد، وبلُغةٍ عربيةٍ فصيحةٍ وسَلِسة
        </title>
      </Head>
      <Container>
        <PostsList posts={posts} />
        <Paginator currentPage={currentPage} pageCount={pageCount} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getPostsByPage(1, [
    "title",
    "pid",
    "url",
    "author",
    "date",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { posts, currentPage: 1, pageCount: PAGE_COUNT },
  };
}
