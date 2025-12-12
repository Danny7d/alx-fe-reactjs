import { useQuery } from "@tanstack/react-query";
import "./PostsComponent.css";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
    isRefetching,
    previousData,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 10000, // Data is fresh for 10 seconds
    cacheTime: 300000, // Data stays in cache for 5 minutes
    refetchOnWindowFocus: true, // Automatically refetch when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading && !previousData) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container">
        <h2>Error loading posts</h2>
        <p>{error.message}</p>
        <button onClick={() => refetch()} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  const displayData = previousData || posts || [];

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h2>Posts from JSONPlaceholder API</h2>
        <div className="action-buttons">
          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="refetch-button"
          >
            {isFetching ? "Refetching..." : "Refetch Posts"}
          </button>
          <span className="posts-count">
            {displayData.length} posts loaded
            {isRefetching && " (updating...)"}
          </span>
        </div>
      </div>

      <div className="posts-grid">
        {displayData.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
            <div className="post-meta">
              <span className="post-id">Post #{post.id}</span>
              <span className="post-user">User #{post.userId}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="cache-info">
        <h3>React Query Features Demonstrated:</h3>
        <ul>
          <li>
            <strong>Caching:</strong> Data is cached for 5 minutes after
            fetching
          </li>
          <li>
            <strong>Stale Time:</strong> Data is considered fresh for 10 seconds
          </li>
          <li>
            <strong>Refetch on Window Focus:</strong> Data automatically
            refetches when you return to the browser tab
          </li>
          <li>
            <strong>Keep Previous Data:</strong> Previous data remains visible
            while fetching new data
          </li>
          <li>
            <strong>Background Refetching:</strong> Data refetches in background
            when window regains focus
          </li>
          <li>
            <strong>Manual Refetch:</strong> Click "Refetch Posts" to manually
            update data
          </li>
          <li>
            <strong>Error Handling:</strong> Graceful error display with retry
            functionality
          </li>
          <li>
            <strong>Loading States:</strong> Visual feedback during data
            fetching
          </li>
        </ul>
        <p className="cache-tip">
          <strong>Tip:</strong> Open browser dev tools and check the Network
          tab. Navigate away and back to this page to see refetchOnWindowFocus
          in action! The previous data remains visible while new data is being
          fetched.
        </p>
      </div>
    </div>
  );
}

export default PostsComponent;
