import { useParams, Link } from "react-router-dom";
import { posts, categoryLabels, type PostMeta } from "../postIndex";

export default function CategoryList() {
  const { category } = useParams<{ category: string }>();
  const filtered = posts
    .filter((p) => p.category === category)
    .sort((a, b) => b.date.localeCompare(a.date));

  const label = categoryLabels[category as PostMeta["category"]] ?? category;

  return (
    <>
      <Link to="/" className="back-link">home</Link>
      <h1>{label}</h1>
      <ul className="post-list">
        {filtered.map((p) => (
          <li key={p.slug}>
            <Link to={`/posts/${p.slug}`}>{p.title}</Link>
            <span className="post-date">({p.date})</span>
          </li>
        ))}
        {filtered.length === 0 && <li>no posts yet.</li>}
      </ul>
    </>
  );
}
