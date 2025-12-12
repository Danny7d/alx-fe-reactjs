import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();

  const posts = {
    "getting-started-react-router": {
      title: "Getting Started with React Router",
      content:
        "React Router is a standard library for routing in React applications. It enables navigation between different components, allows changing the browser URL, and keeps the UI in sync with the URL.",
      author: "React Team",
      date: "2024-01-15",
    },
    "advanced-routing-techniques": {
      title: "Advanced Routing Techniques",
      content:
        "Advanced routing techniques include nested routes, dynamic routing, protected routes, and route guards. These techniques help create complex and secure applications.",
      author: "Routing Expert",
      date: "2024-01-20",
    },
    "protected-routes-react": {
      title: "Protected Routes in React",
      content:
        "Protected routes ensure that only authenticated users can access certain parts of your application. This is crucial for building secure web applications.",
      author: "Security Specialist",
      date: "2024-01-25",
    },
    "dynamic-routing-best-practices": {
      title: "Dynamic Routing Best Practices",
      content:
        "Dynamic routing allows you to create routes that can handle variable parameters. This is essential for applications like blogs, e-commerce sites, and user profiles.",
      author: "Performance Guru",
      date: "2024-02-01",
    },
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div className="not-found">
        <h2>Post not found</h2>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <article>
        <h1>{post.title}</h1>
        <div className="post-meta">
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
          <p>
            This is a demonstration of dynamic routing using React Router. The
            URL parameter `{slug}` is used to fetch and display the appropriate
            blog post.
          </p>
        </div>
      </article>
      <Link to="/blog" className="back-link">
        ← Back to Blog
      </Link>
    </div>
  );
};

export default BlogPost;
