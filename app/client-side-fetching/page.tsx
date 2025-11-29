"use client";

import { getPosts, Post } from "@/actions/post";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function ClientSideFetching() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const result = await getPosts();

      if (!result.success) {
        setError(result.error_msg || "Unknown error");
        setLoading(false);
        return;
      }

      setPosts(result.data);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <Loader/>
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Client-side Fetch Demo</h1>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border rounded p-3">
            <h2 className="font-bold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
