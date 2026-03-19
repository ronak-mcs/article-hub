import { getArticles } from './lib/api';
import Link from 'next/link';

export const metadata = {
  title: 'All Articles',
  description: 'Browse all articles',
};

export default async function Home({ searchParams }: any) {
  const params = await searchParams; // ✅ FIX
  const page = Number(params?.page || 1);
  const search = params?.search || '';
  const category = params?.category || '';
  const sort = params?.sort || 'latest';

  const data = await getArticles({
    page,
    search,
    category,
    sort,
  });

  const articles = data?.data || [];
  const totalPages = Math.ceil((data?.total || 0) / (data?.limit || 6));

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

        {/* SEARCH + FILTER + SORT */}
        <div style={filterBar}>

          {/* SEARCH */}
          <form>
            <input
              name="search"
              defaultValue={search}
              placeholder="Search..."
              style={inputStyle}
            />
          </form>

          {/* CATEGORY */}
          <form>
            <select name="category" defaultValue={category} style={inputStyle}>
              <option value="">All Categories</option>
              <option value="tech">Tech</option>
              <option value="news">News</option>
            </select>
          </form>

          {/* SORT */}
          <form>
            <select name="sort" defaultValue={sort} style={inputStyle}>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </form>

        </div>

        {/* EMPTY */}
        {articles.length === 0 && (
          <p style={{ textAlign: 'center', color: '#fff' }}>
            No articles found
          </p>
        )}

        {/* GRID */}
        <div style={grid}>
          {articles.map((article: any) => (
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
        {totalPages > 1 && (
          <div style={pagination}>

            {/* PREV */}
            <Link href={`/?page=${page - 1}&search=${search}&category=${category}&sort=${sort}`}>
              <button style={pageBtn} disabled={page <= 1}>
                Prev
              </button>
            </Link>

            {/* PAGE NUMBERS */}
            {[...Array(totalPages)].map((_, i) => (
              <Link
                key={i}
                href={`/?page=${i + 1}&search=${search}&category=${category}&sort=${sort}`}
              >
                <button
                  style={{
                    ...pageBtn,
                    background: i + 1 === page ? '#fff' : '#eee',
                    color: '#5b21b6',
                    fontWeight: i + 1 === page ? 600 : 400,
                  }}
                >
                  {i + 1}
                </button>
              </Link>
            ))}

            {/* NEXT */}
            <Link href={`/?page=${page + 1}&search=${search}&category=${category}&sort=${sort}`}>
              <button style={pageBtn} disabled={page >= totalPages}>
                Next
              </button>
            </Link>

          </div>
        )}

      </div>
    </div>
  );
}

/* 🎨 STYLES (unchanged) */

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