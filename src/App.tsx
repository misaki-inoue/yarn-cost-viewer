import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import Result from "./pages/result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
