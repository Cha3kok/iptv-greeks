import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const BASE_URL = "https://iptvgreeks.gr";

async function getBlogSlugs(): Promise<{ slug: string; date: string }[]> {
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
            date: data.date ?? new Date().toISOString(),
          };
        })
    );
    return posts;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogSlugs();

  const blogEntries: MetadataRoute.Sitemap = posts.map(({ slug, date }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/rythmisi-iptv`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/epikoinonia`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...blogEntries,
  ];
}
