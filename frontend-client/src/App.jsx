import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import EditPostPage from "./pages/EditPostPage"; // Import the EditPostPage component
import AboutUsPage from "./pages/AboutUsPage";
import StatsPage from "./pages/StatsPage";

import "./App.css";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Micro Blog
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/new">
              Create a Micro Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route
              path="/stats"
              element={
                <StatsPage totalPost="0" mostLiked={[]} leastLiked={[]} />
              }
            />
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<ShowPostPage />} />
            <Route path="/posts/edit/:id" element={<EditPostPage />} />{" "}
            {/* Add Edit Post route */}
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/" element={<PostsListPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
