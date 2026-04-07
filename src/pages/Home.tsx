import { Link } from "react-router-dom";

function StartButton() {
  return (
    <button>
      <Link to="/search">Start searching</Link>
    </button>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Yarn Cost Viewer</h1>
      <h3>Find the best deal for yarns on Rakuten!</h3>
      <StartButton />
    </div>
  );
}
