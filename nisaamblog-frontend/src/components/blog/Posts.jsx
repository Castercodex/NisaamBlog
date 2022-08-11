import TimeAgo from "timeago-react";

const Posts = ({ posts }) => {
  return (
    <>
      <div className="articles-container">
        <div className="article-section">
          <div className="article-content">
            {posts.slice(0, 3).map((post) => (
              <div className="article" key={post.id}>
                <div className="image-container">
                  <img src={post.image} alt="" />
                </div>
                <div className="article-text">
                  <span className="category">{post.author}</span>
                  <h3 className="title">{post.title}</h3>
                  <p className="timestamp">
                    <TimeAgo datetime={post.published} />
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
            {posts.slice(3, 6).map((post) => (
              <div className="article" key={post.id}>
                <div className="image-container">
                  <img src={post.image} alt="" />
                </div>
                <div className="article-text">
                  <span className="category">{post.author}</span>
                  <h3 className="title">{post.title}</h3>
                  <p className="timestamp">
                    <TimeAgo datetime={post.published} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="article-head">
            <h3>Creator Spotlight</h3>
          </div>
          <div className="article-content">
            {posts.slice(6, 9).map((post) => (
              <div className="article" key={post.id}>
                <div className="image-container">
                  <img src={post.image} alt="" />
                </div>
                <div className="article-text">
                  <span className="category">{post.author}</span>
                  <h3 className="title">{post.title}</h3>
                  <p className="timestamp">
                    <TimeAgo datetime={post.published} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="article-head">
            <h3>Crap News</h3>
          </div>
          <div className="article-content">
            {posts.slice(9, 12).map((post) => (
              <div className="article" key={post.id}>
                <div className="image-container">
                  <img src={post.image} alt="" />
                </div>
                <div className="article-text">
                  <span className="category">{post.author}</span>
                  <h3 className="title">{post.title}</h3>
                  <p className="timestamp">
                    <TimeAgo datetime={post.published} />
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
            {posts.slice(12, 15).map((post) => (
              <div className="article" key={post.id}>
                <div className="image-container">
                  <img src={post.image} alt="" />
                </div>
                <div className="article-text">
                  <span className="category">{post.author}</span>
                  <h3 className="title">{post.title}</h3>
                  <p className="timestamp">
                    <TimeAgo datetime={post.published} />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="article-content">
            {posts.slice(15, 18).map((post) => (
              <div className="article" key={post.id}>
                <div className="image-container">
                  <img src={post.image} alt="" />
                </div>
                <div className="article-text">
                  <span className="category">{post.author}</span>
                  <h3 className="title">{post.title}</h3>
                  <p className="timestamp">
                    <TimeAgo datetime={post.published} />
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
            {posts.slice(18, 21).map((post) => (
              <div className="article" key={post.id}>
                <div className="image-container">
                  <img src={post.image} alt="" />
                </div>
                <div className="article-text">
                  <span className="category">{post.author}</span>
                  <h3 className="title">{post.title}</h3>
                  <p className="timestamp">
                    <TimeAgo datetime={post.published} />
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
