import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database/blog.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the blog database.');
});

const posts = [
    {
      id: "post-1",
      title:
        "Building Modern UIs: A Deep Dive into Shadcn and React Components",
      summary:
        "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
      label: "Web Design",
      author: "Sarah Chen",
      published: "15 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "/shadcnreact.jpg",
      tags: JSON.stringify(["Web Design", "UI Development"]),
    },
    {
      id: "post-2",
      title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
      summary:
        "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
      label: "Web Design",
      author: "Michael Park",
      published: "22 Feb 2024",
      url: "https://shadcnblocks.com",
      image: "/tailwind.jpg",
      tags: JSON.stringify(["Web Design", "CSS"]),
    },
    {
      id: "post-3",
      title: "The Rise of SQLite in Modern Web Applications",
      summary:
        "SQLite is making a comeback. Learn why this lightweight, serverless database is a perfect fit for many modern applications, from edge functions to full-stack apps.",
      label: "Databases",
      author: "Alex Johnson",
      published: "05 Mar 2024",
      url: "https://shadcnblocks.com",
      image: "/sqlite.jpg",
      tags: JSON.stringify(["Databases", "SQLite", "Web Development"]),
    },
];

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    title TEXT,
    summary TEXT,
    label TEXT,
    author TEXT,
    published TEXT,
    url TEXT,
    image TEXT,
    tags TEXT
  )`, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Table 'posts' created or already exists.");

    const stmt = db.prepare("INSERT OR REPLACE INTO posts (id, title, summary, label, author, published, url, image, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    posts.forEach(post => {
      stmt.run(post.id, post.title, post.summary, post.label, post.author, post.published, post.url, post.image, post.tags);
    });

    stmt.finalize((err) => {
        if(err) {
            return console.error(err.message);
        }
        console.log("Dummy data inserted/updated.");
        
        db.close((err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Closed the database connection.');
        });
    });
  });
});