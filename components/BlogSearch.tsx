'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
}

interface Props {
  posts: Post[]
  categories: string[]
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('el-GR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export default function BlogSearch({ posts, categories }: Props) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Όλα')

  const filtered = useMemo(() => {
    return posts.filter(post => {
      const matchesQuery =
        query.trim() === '' ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      const matchesCategory =
        activeCategory === 'Όλα' || post.category === activeCategory
      return matchesQuery && matchesCategory
    })
  }, [posts, query, activeCategory])

  return (
    <div>
      {/* Search input */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          placeholder="Αναζήτηση άρθρων..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['Όλα', ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              activeCategory === cat
                ? 'bg-emerald-600 border-emerald-500 text-white font-semibold'
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      {(query || activeCategory !== 'Όλα') && (
        <p className="text-slate-500 text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? 'αποτέλεσμα' : 'αποτελέσματα'}
        </p>
      )}

      {/* Posts */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">Δεν βρέθηκαν άρθρα.</p>
          <button
            onClick={() => { setQuery(''); setActiveCategory('Όλα') }}
            className="mt-4 text-emerald-400 text-sm hover:underline"
          >
            Καθαρισμός φίλτρων
          </button>
        </div>
      ) : (
        <ul className="space-y-5">
          {filtered.map(post => (
            <li key={post.slug}>
              <Link
                href={`/${post.slug}`}
                className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-white/8 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-medium">
                    {post.category}
                  </span>
                  <time className="text-xs text-slate-500">{formatDate(post.date)}</time>
                </div>
                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
