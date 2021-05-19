import Container from "@/components/container";
import Layout from "@/components/layout";
import PostsList from "@/components/posts-list";
import Paginator from "@/components/paginator";
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

export async function getStaticProps({ params }) {
  const posts = await getPostsByPage(Number(params.page), [
    "title",
    "pid",
    "author",
    "coverImage",
    "excerpt",
    "url",
    "date",
  ]);

  return {
    props: { posts, currentPage: Number(params.page), pageCount: PAGE_COUNT },
  };
}

export async function getStaticPaths() {
  const pages = Array.from(Array(PAGE_COUNT).keys());

  return {
    paths: pages.map((i) => ({
      params: { page: `${i + 1}` },
    })),
    fallback: false,
  };
}
