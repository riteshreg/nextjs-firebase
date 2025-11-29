import { fetchPosts } from "@/actions/post";

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}



export default async function ServerSideFetching() {
  let posts: Post[] = [];

  try {
    posts = await fetchPosts();
  } catch{
    return (
      <div className="p-6">
        <p className="text-red-600 font-medium">
          Error loading posts. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Server-side Fetch Demo</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold mb-1">{post.title}</h2>
            <p className="text-gray-700 leading-relaxed">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
