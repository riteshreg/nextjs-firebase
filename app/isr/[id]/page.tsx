import { fetchPosts, findPostById } from "@/actions/post";
import { notFound } from "next/navigation";

// Next.js will invalidate the cache when a
// request comes in, at most once every 1 hour.
export const revalidate = 3600;


export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await findPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Post #{post.id}</h1>

      <div className="mt-6 border rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>
      </div>
    </main>
  );
}
