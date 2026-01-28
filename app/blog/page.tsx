import Link from "next/link";
import { getAllPosts } from "@/app/lib/posts";

export const metadata = {
  title: "Blog | Seth Hyslop",
  description: "Thoughts and writings by Seth Hyslop",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background pb-24">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-12 text-foreground">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-foreground/60">No posts yet. Check back soon!</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article>
                    <time className="text-sm text-foreground/50 font-mono">
                      {post.date}
                    </time>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mt-1">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-foreground/70 mt-2">{post.excerpt}</p>
                    )}
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
