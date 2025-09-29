import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { Blog8 } from "@/components/Blog8";
import { getBlogPosts } from "@/lib/data";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
    <div className="container mx-auto px-4">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center mb-4">
        <NavigationMenuDemo />
        
      </header>

      <Blog8 posts={posts} description="Discover the latest insights and trends in the world of Artificial Intelligence. We cover everything from new breakthroughs to practical applications." />
    </div>
    <Footer />
    </>
  );
}