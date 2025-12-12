import { useParams, Link } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();

  const users = {
    john: {
      name: "John Doe",
      bio: "Full-stack developer passionate about React and modern web technologies.",
      posts: 42,
      followers: 1234,
      following: 567,
    },
    jane: {
      name: "Jane Smith",
      bio: "UX designer and frontend developer with a love for creating intuitive interfaces.",
      posts: 38,
      followers: 892,
      following: 234,
    },
    bob: {
      name: "Bob Johnson",
      bio: "Backend engineer specializing in scalable systems and cloud architecture.",
      posts: 25,
      followers: 456,
      following: 189,
    },
  };

  const user = users[username];

  if (!user) {
    return (
      <div className="not-found">
        <h2>User not found</h2>
        <p>The user @{username} doesn't exist.</p>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="avatar">
          <img
            src={`https://picsum.photos/seed/${username}/150/150.jpg`}
            alt={`${user.name}'s avatar`}
          />
        </div>
        <div className="user-info">
          <h1>{user.name}</h1>
          <p>@{username}</p>
          <p className="bio">{user.bio}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">{user.posts}</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat">
          <span className="stat-number">{user.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">{user.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      <div className="profile-actions">
        <button className="follow-button">Follow</button>
        <button className="message-button">Message</button>
      </div>

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
};

export default UserProfile;
