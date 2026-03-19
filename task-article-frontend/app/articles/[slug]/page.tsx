import { getArticle, getComments } from '../../lib/api';
import CommentForm from '../../components/CommentForm';

export async function generateMetadata({ params }: any) {
  const { slug } = await params;

  const article = await getArticle(slug);

  return {
    title: article?.title || 'Article',
    description: article?.excerpt || '',
  };
}

export default async function ArticlePage({ params }: any) {
  const { slug } = await params;

  const article = await getArticle(slug);
  const comments = await getComments(slug);

  return (
    <div style={wrapper}>
      <div style={container}>

        {/* ARTICLE CARD */}
        <div style={card}>
          <h1 style={title}>{article?.title}</h1>

          <p style={meta}>
            {article?.author} • {article?.category}
          </p>

          <div style={content}>
            {article?.content}
          </div>
        </div>

        {/* COMMENTS */}
        <div style={commentSection}>
          <h2 style={commentTitle}>
            💬 Comments ({comments?.length || 0})
          </h2>

          {comments?.length === 0 && (
            <p style={{ color: '#555' }}>No comments yet</p>
          )}

          {comments?.map((c: any) => (
            <div key={c.id} style={commentCard}>

              {/* HEADER */}
              <div style={commentHeader}>
                <div style={avatar}>
                  {c.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <strong>{c.name}</strong>
                  <p style={email}>{c.email || 'Guest'}</p>
                </div>
              </div>

              {/* BODY */}
              <p style={commentText}>{c.body}</p>

            </div>
          ))}
        </div>

        {/* FORM */}
        <div style={formWrapper}>
          <CommentForm slug={slug} />
        </div>

      </div>
    </div>
  );
}

/* 🎨 PREMIUM STYLES */

const wrapper = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea, #764ba2)',
  padding: '40px 20px',
  display: 'flex',
  justifyContent: 'center',
};

const container = {
  width: '100%',
  maxWidth: 800,
};

const card = {
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: 14,
  padding: 25,
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  marginBottom: 30,
};

const title = {
  fontSize: 26,
  fontWeight: 700,
  marginBottom: 10,
};

const meta = {
  fontSize: 13,
  color: '#666',
  marginBottom: 15,
};

const content = {
  fontSize: 15,
  lineHeight: 1.6,
  color: '#333',
};

const commentSection = {
  background: 'rgba(255,255,255,0.95)',
  borderRadius: 14,
  padding: 20,
  marginBottom: 20,
};

const commentTitle = {
  fontSize: 18,
  fontWeight: 600,
  marginBottom: 15,
};

const commentCard = {
  background: '#f9fafb',
  borderRadius: 10,
  padding: 15,
  marginBottom: 12,
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const commentHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  marginBottom: 8,
};

const avatar = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: '#6366f1',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
};

const email = {
  fontSize: 12,
  color: '#666',
};

const commentText = {
  fontSize: 14,
  color: '#333',
  lineHeight: 1.5,
};

const formWrapper = {
  background: 'rgba(255,255,255,0.95)',
  borderRadius: 14,
  padding: 20,
};