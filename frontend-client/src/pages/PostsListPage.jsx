import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

function PostsListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let response = await fetch("/api/micro_posts");
        let allPosts = await response.json();
        setPosts(allPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all micro_posts", error);
        setError(true);
      }
    }

    getData();

    return () => {
      // clean up function
    };
  }, []);

  if (error) return <ErrorAlert details="Failed to fetch all micro posts" />;
  if (loading) return <LoadingSpinner />;

  return (
    <div className="container-fluid text-center">
      <div className="row justify-content-center">
        {posts.map((entryData) => (
          <div key={entryData.id} className="col-md-4">
            <MicroPostCard {...entryData} />
            <div className="text-center">
              {/* Link to EditPostPage with the post ID */}
              <Link
                to={`/posts/edit/${entryData.id}`}
                className="btn btn-warning mt-3"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsListPage;
