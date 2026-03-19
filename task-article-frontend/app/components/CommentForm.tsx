'use client';

import { useState } from 'react';

export default function CommentForm({ slug }: { slug: string }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    body: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}/comments`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      setForm({ name: '', email: '', body: '' });
      location.reload();
    } catch {
      alert('Error submitting comment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>

      <h3 style={heading}>✍️ Add a Comment</h3>

      {/* NAME */}
      <div>
        <label style={label}>Name *</label>
        <input
          style={input}
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />
      </div>

      {/* EMAIL */}
      <div>
        <label style={label}>Email (optional)</label>
        <input
          style={input}
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
      </div>

      {/* COMMENT */}
      <div>
        <label style={label}>Comment *</label>
        <textarea
          style={{ ...input, minHeight: 100 }}
          placeholder="Write your thoughts..."
          value={form.body}
          onChange={(e) =>
            setForm({ ...form, body: e.target.value })
          }
          required
        />
      </div>

      {/* BUTTON */}
      <button type="submit" disabled={loading} style={button}>
        {loading ? 'Posting...' : '💬 Post Comment'}
      </button>

    </form>
  );
}

/* 🎨 STYLES */

const formStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 14,
};

const heading = {
  fontSize: 18,
  fontWeight: 600,
  marginBottom: 5,
};

const label = {
  fontSize: 13,
  color: '#555',
  marginBottom: 4,
  display: 'block',
};

const input = {
  width: '90%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #ddd',
  fontSize: 14,
  outline: 'none',
  transition: '0.2s',
};

const button = {
  marginTop: 10,
  padding: '12px',
  borderRadius: 10,
  border: 'none',
  background: 'linear-gradient(135deg, #0070f3, #00c6ff)',
  color: '#fff',
  fontSize: 15,
  fontWeight: 600,
  width: '95%',
  cursor: 'pointer',
};