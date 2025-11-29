import Link from "next/link";
import { fetchPosts, Post } from "@/actions/post";

// ISR: Regenerate this page at most once every hour
export const revalidate = 60 * 60;

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
      <h1 className="text-3xl font-semibold mb-6">ISR: Server-side Fetch Demo</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/isr/${post.id}`}
            className="block border rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all"
          >
            <h2 className="text-xl font-bold mb-1">{post.title}</h2>
            <p className="text-gray-700 leading-relaxed line-clamp-2">
              {post.body}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
