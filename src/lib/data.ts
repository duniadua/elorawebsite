
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Define the Post type, ensuring it matches the structure expected by Blog8.tsx
export interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

export async function getBlogPosts(): Promise<Post[]> {
  let db = null;
  try {
    // Open the database
    db = await open({
      filename: './database/blog.db',
      driver: sqlite3.Database
    });

    const posts = await db.all('SELECT * FROM posts');

    // The 'tags' column is stored as a JSON string, so we need to parse it.
    return posts.map(post => ({
      ...post,
      tags: JSON.parse(post.tags || '[]')
    }));

  } catch (error) {
    console.error('Database error:', error);
    return []; // Return an empty array in case of an error
  } finally {
    // Ensure the database connection is closed
    if (db) {
      await db.close();
    }
  }
}
