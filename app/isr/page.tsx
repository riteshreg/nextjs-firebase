import Link from "next/link";
import { fetchPosts, Post } from "@/actions/post";

// ISR: Regenerate this page at most once every hour
export const revalidate = 3600;

export default async function ServerSideFetching() {
  let posts: Post[] = [];

  try {
    posts = await fetchPosts();
  } catch {
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
      <h1 className="text-3xl font-semibold mb-6">
        ISR: Server-side Fetch Demo
      </h1>

      <ul className="list-disc list-inside space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/isr/${post.id}`}
              className="text-blue-600 hover:underline transition-colors"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
