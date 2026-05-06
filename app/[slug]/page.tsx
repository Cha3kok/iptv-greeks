import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import ScrollProgress from "@/components/ScrollProgress";

const BASE_URL = "https://iptvgreeks.gr";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  const dir = path.join(process.cwd(), "content", "blog");
  const decoded = decodeURIComponent(slug);
  for (const s of [decoded, slug]) {
    for (const ext of ["mdx", "md"]) {
      try {
        const raw = await fs.readFile(path.join(dir, `${s}.${ext}`), "utf-8");
        const { data, content } = matter(raw);
        return { meta: data, content };
      } catch {
        // try next
      }
    }
  }
  return null;
}

async function getAllPosts() {
  const dir = path.join(process.cwd(), "content", "blog");
  try {
    const files = await fs.readdir(dir);
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
        .map(async (file) => {
          const raw = await fs.readFile(path.join(dir, file), "utf-8");
          const { data } = matter(raw);
          return {
            slug: file.replace(/\.mdx?$/, ""),
            title: data.title ?? file,
            date: data.date ?? "",
            excerpt: data.excerpt ?? "",
          };
        })
    );
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("el-GR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const url = `${BASE_URL}/${slug}`;
  return {
    title: post.meta.title,
    description: post.meta.excerpt ?? "",
    alternates: { canonical: url },
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt ?? "",
      url,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export const dynamicParams = true;

const mdxComponents = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="w-full rounded-2xl my-8 object-cover max-h-96" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-bold text-[#1e293b] mt-10 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-semibold text-[#1e293b] mt-8 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-slate-600 leading-8 text-[1.05rem] mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 text-slate-600 text-[1.05rem] mb-4 ml-2" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 text-slate-600 text-[1.05rem] mb-4 ml-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-[#1e293b] font-semibold" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#059669] hover:text-emerald-700 underline underline-offset-2 transition-colors" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-emerald-500 pl-4 my-6 text-slate-500 italic" {...props} />
  ),
  hr: () => <hr className="border-slate-200 my-8" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-slate-100 text-emerald-700 text-sm px-1.5 py-0.5 rounded font-mono" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-slate-200">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-slate-50" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="text-left py-3 px-4 text-[#059669] font-semibold text-sm whitespace-nowrap" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="py-3 px-4 text-slate-600 text-sm" {...props} />
  ),
  CTA: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <div className="my-8 bg-[#059669] text-white rounded-2xl p-6 text-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-[#059669] font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors text-sm"
      >
        {children}
      </a>
    </div>
  ),
};

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "blog");
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .map((f) => ({ slug: f.replace(/\.mdx?$/, "") }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPost(slug), getAllPosts()]);

  if (!post) notFound();

  const mins = readingTime(post.content);
  const postUrl = `${BASE_URL}/${slug}`;

  const related = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.excerpt,
    datePublished: post.meta.date,
    author: { "@type": "Organization", name: "IPTV Greek" },
    publisher: {
      "@type": "Organization",
      name: "IPTV Greek",
      url: BASE_URL,
    },
    url: postUrl,
  };

  return (
    <>
      <ScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 flex gap-10">
        <div className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#059669]">Αρχική</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#059669]">Ιστολόγιο</Link>
          <span>/</span>
          <span className="text-[#334155] truncate">{post.meta.title}</span>
        </nav>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-4 flex-wrap">
          {post.meta.date && (
            <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
          )}
          <span>·</span>
          <span>{mins} λεπτά ανάγνωσης</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-8 leading-tight">
          {post.meta.title}
        </h1>

        <article className="prose prose-slate max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </article>

        {/* Share */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <ShareButtons title={post.meta.title} url={postUrl} />
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#059669] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">
            Δοκιμάστε IPTV Greek Δωρεάν
          </h2>
          <p className="text-emerald-100 text-sm mb-5">
            24 ώρες δωρεάν δοκιμή χωρίς πιστωτική κάρτα — ενεργοποίηση σε
            λεπτά.
          </p>
          <a
            href="https://wa.me/212707711512"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#059669] font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
          >
            Επικοινωνήστε μέσω WhatsApp
          </a>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#1e293b] mb-5">
              Σχετικά Άρθρα
            </h2>
            <div className="grid gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="block bg-[#f0fdf4] rounded-xl p-4 hover:bg-emerald-50 transition-colors"
                >
                  <p className="text-xs text-gray-400 mb-1">{p.date}</p>
                  <h3 className="font-semibold text-[#1e293b] text-sm leading-snug hover:text-[#059669] transition-colors">
                    {p.title}
                  </h3>
                  {p.excerpt && (
                    <p className="text-xs text-[#334155] mt-1 line-clamp-2">
                      {p.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>
        <TableOfContents />
      </div>
      </div>
    </>
  );
}
