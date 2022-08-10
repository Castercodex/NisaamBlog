import TimeAgo from "timeago-react";

const Posts = ({ posts }) => {
  return (
    <>
      <div className="articles-container">
        <div className="article-section">
          <div className="article-content">
            {posts
              .filter((post) => post.category === "Technology")
              .map((post) => (
                <div className="article" key={post.id}>
                  <div className="image-container">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <div className="article-text">
                    <span className="category">{post.category}</span>
                    <h3 className="title">{post.title}</h3>
                    <p className="timestamp">
                      <TimeAgo datetime={post.createdAt} />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="article-section">
          <div className="section-head">
            <h2>Meet the publishers making an impact on the world</h2>
          </div>
          <div className="article-content">
            {posts
              .filter((post) => post.category === "Creator")
              .map((post) => (
                <div className="article" key={post.id}>
                  <div className="image-container">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <div className="article-text">
                    <span className="category">{post.category}</span>
                    <h3 className="title">{post.title}</h3>
                    <p className="timestamp">
                      <TimeAgo datetime={post.createdAt} />
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="article-head">
            <h3>Creator Spotlight</h3>
          </div>
          <div className="article-content">
            {posts
              .filter((post) => post.category === "Creator")
              .map((post) => (
                <div className="article" key={post.id}>
                  <div className="image-container">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <div className="article-text">
                    <span className="category">{post.category}</span>
                    <h3 className="title">{post.title}</h3>
                    <p className="timestamp">
                      <TimeAgo datetime={post.createdAt} />
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="article-head">
            <h3>Crap News</h3>
          </div>
          <div className="article-content">
            {posts
              .filter((post) => post.category === "Crap News")
              .map((post) => (
                <div className="article" key={post.id}>
                  <div className="image-container">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <div className="article-text">
                    <span className="category">{post.category}</span>
                    <h3 className="title">{post.title}</h3>
                    <p className="timestamp">
                      <TimeAgo datetime={post.createdAt} />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="article-section">
          <div className="section-head">
            <h2>Life In Morocco</h2>
          </div>
          <div className="article-content">
            {posts
              .filter((post) => post.category === "Open Source")
              .map((post) => (
                <div className="article" key={post.id}>
                  <div className="image-container">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <div className="article-text">
                    <span className="category">{post.category}</span>
                    <h3 className="title">{post.title}</h3>
                    <p className="timestamp">
                      <TimeAgo datetime={post.createdAt} />
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="article-content">
            {posts
              .filter((post) => post.category === "Technology")
              .map((post) => (
                <div className="article" key={post.id}>
                  <div className="image-container">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <div className="article-text">
                    <span className="category">{post.category}</span>
                    <h3 className="title">{post.title}</h3>
                    <p className="timestamp">
                      <TimeAgo datetime={post.createdAt} />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="article-section">
          <div className="section-head">
            <h2>Our favourite science inventions</h2>
          </div>
          <div className="article-content">
            {posts
              .filter((post) => post.category === "Science")
              .map((post) => (
                <div className="article" key={post.id}>
                  <div className="image-container">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <div className="article-text">
                    <span className="category">{post.category}</span>
                    <h3 className="title">{post.title}</h3>
                    <p className="timestamp">
                      <TimeAgo datetime={post.createdAt} />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
