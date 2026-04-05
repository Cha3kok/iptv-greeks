import type { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogSearch from '@/components/BlogSearch'

export const metadata: Metadata = {
  title: 'Ιστολόγιο IPTV Greek – Οδηγοί & Νέα',
  description: 'Οδηγοί ρύθμισης, συμβουλές και νέα για IPTV. Μάθετε πώς να ρυθμίσετε και να βελτιστοποιήσετε την IPTV εμπειρία σας.',
  openGraph: {
    title: 'Ιστολόγιο IPTV Greek',
    description: 'Οδηγοί ρύθμισης, συμβουλές και νέα για IPTV.',
  },
}

function detectCategory(slug: string, title: string): string {
  const text = (slug + ' ' + title).toLowerCase()
  if (text.includes('sport') || text.includes('αθλητ') || text.includes('ποδοσφαιρ') || text.includes('football') || text.includes('euro') || text.includes('champions')) return 'Αθλητικά'
  if (text.includes('ρύθμ') || text.includes('εγκατάσταση') || text.includes('setup') || text.includes('install') || text.includes('kodi') || text.includes('smarters') || text.includes('firestick') || text.includes('android') || text.includes('samsung') || text.includes('smart tv')) return 'Εγκατάσταση'
  if (text.includes('buffer') || text.includes('ταχύτητα') || text.includes('quality') || text.includes('ποιότητα') || text.includes('4k') || text.includes('hd') || text.includes('streaming')) return 'Τεχνολογία'
  if (text.includes('ελλην') || text.includes('greek') || text.includes('ερτ') || text.includes('κανάλ') || text.includes('channel')) return 'Ελληνικά'
  if (text.includes('vpn') || text.includes('ασφάλ') || text.includes('νόμ') || text.includes('legal') || text.includes('χωρίς')) return 'Οδηγοί'
  return 'Γενικά'
}

async function getPosts() {
  const dir = path.join(process.cwd(), 'content', 'blog')
  let files: string[]
  try {
    files = await fs.readdir(dir)
  } catch {
    return []
  }

  const posts = await Promise.all(
    files
      .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
      .map(async file => {
        const raw = await fs.readFile(path.join(dir, file), 'utf-8')
        const { data } = matter(raw)
        const slug = file.replace(/\.mdx?$/, '')
        return {
          slug,
          title: data.title ?? file,
          date: data.date ?? '',
          excerpt: data.excerpt ?? '',
          category: detectCategory(slug, data.title ?? ''),
        }
      })
  )

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default async function BlogPage() {
  const posts = await getPosts()
  const categories = [...new Set(posts.map(p => p.category))].sort()

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-500/30">
            📝 Ιστολόγιο
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Οδηγοί & Νέα IPTV
          </h1>
          <p className="text-emerald-100">
            Ρύθμιση, συμβουλές και νέα για την καλύτερη IPTV εμπειρία.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg mb-2">Δεν υπάρχουν άρθρα ακόμα.</p>
            <p className="text-slate-600 text-sm">Σύντομα νέο περιεχόμενο!</p>
          </div>
        ) : (
          <BlogSearch posts={posts} categories={categories} />
        )}
      </div>
    </div>
  )
}
