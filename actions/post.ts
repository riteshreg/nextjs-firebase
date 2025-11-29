interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (res.ok === false) {
    return {
      error_msg: "Fetch Failed",
      success: false,
      data: [] as Post[],
    };
  }

  const data = (await res.json()) as Post[];

  return {
    success: true,
    data,
  };
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

async function findPostById(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export type { Post };
export { getPosts, fetchPosts, findPostById };
