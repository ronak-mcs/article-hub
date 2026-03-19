'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateArticlePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error();

      router.push('/');
      router.refresh();
    } catch {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={wrapper}>
      
      <div style={card}>
        <h1 style={heading}>Create Article ✨</h1>

        <form onSubmit={handleSubmit} style={formStyle}>

          <input
            style={input}
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            required
          />

          <input
            style={input}
            placeholder="Excerpt"
            value={form.excerpt}
            onChange={(e) =>
              setForm({ ...form, excerpt: e.target.value })
            }
            required
          />

          <textarea
            style={{ ...input, minHeight: 120 }}
            placeholder="Write your article content..."
            value={form.content}
            onChange={(e) =>
              setForm({ ...form, content: e.target.value })
            }
            required
          />

          <div style={{ display: 'flex', gap: 10 }}>
            <input
              style={{ ...input, flex: 1 }}
              placeholder="Author"
              value={form.author}
              onChange={(e) =>
                setForm({ ...form, author: e.target.value })
              }
              required
            />

            <input
              style={{ ...input, flex: 1 }}
              placeholder="Category"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              required
            />
          </div>

          <button style={button} disabled={loading}>
            {loading ? 'Creating...' : '🚀 Publish Article'}
          </button>

        </form>
      </div>
    </div>
  );
}

/* 🎨 PREMIUM STYLES */

const wrapper = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #667eea, #764ba2)',
};

const card = {
  width: '100%',
  maxWidth: 520,
  padding: 30,
  borderRadius: 16,
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
};

const heading = {
  fontSize: 26,
  fontWeight: 700,
  marginBottom: 20,
  textAlign: 'center' as const,
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 15,
};

const input = {
  padding: '12px 14px',
  borderRadius: 8,
  border: '1px solid #ddd',
  fontSize: 14,
  outline: 'none',
};

const button = {
  marginTop: 10,
  padding: '14px',
  borderRadius: 10,
  border: 'none',
  background: 'linear-gradient(135deg, #0070f3, #00c6ff)',
  color: '#fff',
  fontSize: 16,
  fontWeight: 600,
  cursor: 'pointer',
};