"use client";

import { useState, useTransition } from "react";
import { getPosts } from "@/actions/post";
import type { Post } from "@/actions/post";

export default function Client() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const loadPosts = () => {
    startTransition(async () => {
      const result = await getPosts();

      if (!result.success) {
        setError(result.error_msg ?? "Something went wrong");
        return;
      }

      setPosts(result.data);
      setError("");
    });
  };

  return (
    <div>
      <button
        onClick={loadPosts}
        className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
      >
        Load Posts
      </button>

      {isPending && (
        <p className="mt-4 animate-pulse text-gray-500">Loading...</p>
      )}

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {posts.length > 0 && (
        <ul className="mt-6 space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
