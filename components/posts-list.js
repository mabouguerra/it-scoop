import PostPreview from "@/components/post-preview";

export default function PostsList({ posts }) {
  return (
    <div className="divide-y divide-gray-100  mt-14 dark:divide-gray-800 lg:mt-28 sm:mt-20">
      {posts.map((post) => (
        <PostPreview
          key={post.url}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          excerpt={post.excerpt}
          author={post.author}
          url={post.url}
        />
      ))}
    </div>
  );
}
