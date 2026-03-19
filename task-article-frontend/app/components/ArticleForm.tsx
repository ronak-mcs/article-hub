'use client';

import { useState } from 'react';

export default function CreateArticlePage() {
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    alert('Article created!');

    setForm({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: '',
    });
  };

  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <h1>Create Article</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          required
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <br /><br />

        <input
          placeholder="Excerpt"
          required
          value={form.excerpt}
          onChange={(e) =>
            setForm({ ...form, excerpt: e.target.value })
          }
        />

        <br /><br />

        <textarea
          placeholder="Content"
          required
          value={form.content}
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
        />

        <br /><br />

        <input
          placeholder="Author"
          required
          value={form.author}
          onChange={(e) =>
            setForm({ ...form, author: e.target.value })
          }
        />

        <br /><br />

        <input
          placeholder="Category"
          required
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <br /><br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}