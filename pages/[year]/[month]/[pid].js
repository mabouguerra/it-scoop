import Head from "next/head";
import Container from "@/components/container";
import Layout from "@/components/layout";
import Header from "@/components/header";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import { getPostByPath, getPostPaths } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

export default function Post({ post }) {
  return (
    <Layout>
      <Container>
        <article>
          <Head>
            <title>{post.title} | المجلة التقنية</title>
            <meta property="og:image" content={post.coverImage} />
          </Head>
          <PostHeader
            title={post.title}
            author={post.author}
            date={post.date}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostByPath(params, [
    "title",
    "pid",
    "author",
    "date",
    "coverImage",
    "content",
  ]);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getPostPaths();
  return {
    paths: posts.map((post) => ({ params: { ...post } })),
    fallback: false,
  };
}
