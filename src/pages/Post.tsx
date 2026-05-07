import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { posts } from "../postIndex";

const modules = import.meta.glob("/src/posts/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string | null>(null);
  const meta = posts.find((p) => p.slug === slug);

  useEffect(() => {
    const path = `/src/posts/${slug}.md`;
    const loader = modules[path];
    if (loader) {
      loader().then((raw) => setContent(raw));
    } else {
      setContent(null);
    }
  }, [slug]);

  if (!meta) {
    return (
      <>
        <Link to="/" className="back-link">home</Link>
        <p>post not found.</p>
      </>
    );
  }

  return (
    <>
      <Link to={`/${meta.category}`} className="back-link">
        back
      </Link>
      <div className="post-header">
        <h1>{meta.title}</h1>
        <span className="post-date">{meta.date}</span>
      </div>
      {content === null ? (
        <p>loading...</p>
      ) : (
        <div className="post-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </div>
      )}
    </>
  );
}
