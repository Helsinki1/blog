import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-intro">
      <h1>hi! my name is david xiong</h1>
      <p>i'm studying computer science at columbia university.</p>

      <nav className="home-nav">
        <Link to="/algorithms">Algorithms</Link>
        <Link to="/deep-learning">Deep Learning</Link>
        <Link to="/systems">Systems</Link>
        <Link to="/compass">Compass</Link>
        <a href="https://www.linkedin.com/in/david-yimingxiong/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Helsinki1" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </div>
  );
}
