import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import BlogList, { blogPosts } from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<BlogList />} />
            <Route
              path="/blog/:id"
              element={<BlogPost blogPosts={blogPosts} />}
            />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
