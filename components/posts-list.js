import PostPreview from "@/components/post-preview";

export default function PostsList({ posts }) {
  return (
    <div className="mt-12 space-y-2 divide-y divide-gray-100 lg:space-y-3 lg:mt-28 sm:mt-20 ">
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
