const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getArticles(params: any = {}) {
   const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/articles?${query}`, {
    cache: 'no-store',
  });
  return res.json();
}

export async function getArticle(slug: string) {
  const res = await fetch(`${BASE_URL}/articles/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return null; // prevent crash
  }

  const text = await res.text();

  return text ? JSON.parse(text) : null;
}

export async function getComments(slug: string) {
  const res = await fetch(`${BASE_URL}/articles/${slug}/comments`, {
    cache: 'no-store',
  });
  return res.json();
}

export async function postComment(slug: string, data: any) {
  return fetch(`${BASE_URL}/articles/${slug}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}