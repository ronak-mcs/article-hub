import { getArticles } from './lib/api';
import Link from 'next/link';

export const metadata = {
  title: 'All Articles',
  description: 'Browse all articles',
};

export default async function Home() {
  const data = await getArticles();

  return (
    <div style={wrapper}>

      <div style={container}>

        {/* HEADER */}
        <div style={header}>
          <h1 style={title}>📰 Articles</h1>

          <Link href="/articles/create" style={createBtn}>
            + Create Article
          </Link>
        </div>

        {/* FILTER + SORT */}
        <div style={filterBar}>
          <select style={inputStyle}>
            <option>All Categories</option>
            <option>Tech</option>
            <option>News</option>
          </select>

          <select style={inputStyle}>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>

        {/* EMPTY */}
        {data?.length === 0 && (
          <p style={{ textAlign: 'center', color: '#fff' }}>
            No articles found
          </p>
        )}

        {/* GRID */}
        <div style={grid}>
          {data?.map((article: any) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={card}>

                <h2 style={cardTitle}>{article.title}</h2>

                <p style={excerpt}>{article.excerpt}</p>

                <div style={footer}>
                  <span>{article.author}</span>
                  <span style={badge}>{article.category}</span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        <div style={pagination}>
          <button style={pageBtn}>Prev</button>
          <button style={{ ...pageBtn, background: '#fff', color: '#5b21b6', fontWeight: 600 }}>1</button>
          <button style={pageBtn}>2</button>
          <button style={pageBtn}>Next</button>
        </div>

      </div>
    </div>
  );
}

/* 🎨 PREMIUM STYLES */

const wrapper = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea, #764ba2)',
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 20px',
};

const container = {
  width: '100%',
  maxWidth: 1100,
};

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 30,
};

const title = {
  color: '#fff',
  fontSize: 28,
  fontWeight: 700,
};

const createBtn = {
  padding: '10px 18px',
  background: '#fff',
  color: '#5b21b6',
  borderRadius: 8,
  fontWeight: 600,
  textDecoration: 'none',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
};

const filterBar = {
  display: 'flex',
  gap: 10,
  marginBottom: 25,
  flexWrap: 'wrap',
};

const inputStyle = {
  padding: '8px 12px',
  borderRadius: 6,
  border: '1px solid #ddd',
  fontSize: 14,
  outline: 'none',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 20,
};

const card = {
  background: 'rgba(255,255,255,0.9)',
  backdropFilter: 'blur(10px)',
  borderRadius: 12,
  padding: 20,
  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  transition: '0.3s',
};

const cardTitle = {
  fontSize: 18,
  marginBottom: 10,
  color: '#111',
};

const excerpt = {
  fontSize: 14,
  color: '#555',
  marginBottom: 15,
};

const footer = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 12,
  color: '#666',
};

const badge = {
  background: '#e0e7ff',
  color: '#4338ca',
  padding: '4px 8px',
  borderRadius: 6,
};

const pagination = {
  marginTop: 30,
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
};

const pageBtn = {
  padding: '8px 12px',
  borderRadius: 6,
  border: 'none',
  background: '#fff',
  cursor: 'pointer',
};