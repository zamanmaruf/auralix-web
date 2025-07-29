'use client';
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id;

  // This would typically come from a CMS or database
  // For now, we&apos;ll return a placeholder that shows the post ID
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8"
        >
          Back to Blog
        </Link>
        
        <div className="bg-[#1a1a1a] rounded-xl p-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blog Post #{postId}
            </h1>
            <p className="text-gray-300">
              This is a placeholder for blog post {postId}. Individual blog posts will be created separately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}