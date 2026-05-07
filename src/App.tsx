import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";
import Post from "./pages/Post";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<CategoryList />} />
          <Route path="/posts/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
