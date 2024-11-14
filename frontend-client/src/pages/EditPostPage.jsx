import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import LoadingSpinner from "../components/LoadingSpinner";

function EditPostPage() {
  // State to store the post data, loading state, error state, and form input data
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  // Extract the post ID from the URL parameters
  const { id } = useParams();

  // Hook to programmatically navigate to a different route
  const navigate = useNavigate();

  // useEffect to fetch post data when the component mounts or the post ID changes
  useEffect(() => {
    async function fetchPost() {
      setLoading(true); // Set loading state to true while data is being fetched
      try {
        // Fetch post data from API based on the post ID
        let response = await fetch(`/api/micro_posts/${id}`);

        // Check if the response is successful
        if (response.ok) {
          const postData = await response.json();
          setPost(postData); // Store fetched post data in state
          setFormData({
            title: postData.title,
            content: postData.content,
          });
          setLoading(false); // Set loading state to false after data is loaded
        } else {
          // If post is not found, throw an error to trigger the error state
          throw new Error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post", error);
        setError(true); // Set error state if fetching fails
      }
    }

    fetchPost();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update form field based on user input
    });
  };

  // Handle form submission for updating the post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send updated post data to API with a PUT request
      const response = await fetch(`/api/micro_posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // After a successful update, navigate back to the posts list page
        navigate("/");
      } else {
        throw new Error("Failed to update post"); // Trigger error state if update fails
      }
    } catch (error) {
      console.error("Error updating post", error);
      setError(true); // Set error state if updating fails
    }
  };

  // Display error message if there is an error
  if (error) return <ErrorAlert details="Failed to load or update post" />;
  // Display loading spinner while data is being fetched
  if (loading) return <LoadingSpinner />;

  // Render form for editing the post with the current title and content pre-filled
  return (
    <div className="container">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            rows="4"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPostPage;
