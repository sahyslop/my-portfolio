import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/app/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Seth Hyslop`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog"
          className="text-sm text-foreground/50 hover:text-accent transition-colors font-mono"
        >
          &larr; Back to blog
        </Link>

        <article className="mt-8">
          <header className="mb-8">
            <time className="text-sm text-foreground/50 font-mono">
              {post.date}
            </time>
            <h1 className="text-3xl font-bold text-foreground mt-2">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-neutral max-w-none text-foreground prose-headings:text-foreground prose-a:text-accent prose-strong:text-foreground">
            {post.content.split("\n").map((paragraph, index) => {
              if (!paragraph.trim()) return null;
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.slice(2)}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-xl font-semibold mt-6 mb-3">
                    {paragraph.slice(3)}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-lg font-semibold mt-4 mb-2">
                    {paragraph.slice(4)}
                  </h3>
                );
              }
              return (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </main>
    </div>
  );
}
