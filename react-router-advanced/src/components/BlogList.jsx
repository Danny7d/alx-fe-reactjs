import { Link } from "react-router-dom";

const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React Router",
      slug: "getting-started-react-router",
    },
    {
      id: 2,
      title: "Advanced Routing Techniques",
      slug: "advanced-routing-techniques",
    },
    {
      id: 3,
      title: "Protected Routes in React",
      slug: "protected-routes-react",
    },
    {
      id: 4,
      title: "Dynamic Routing Best Practices",
      slug: "dynamic-routing-best-practices",
    },
  ];

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <Link to={`/blog/${post.slug}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
