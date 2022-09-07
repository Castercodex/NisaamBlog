import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TimeAgo from "timeago-react";
const Post = ({ posts, categories }) => {
  const id = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const getPost = async () => {
      const post = await fetch(`/api/article/${id.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`response.status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setPost(data);
          return data;
        })
        .catch((err) => {
          throw err.message;
        });
      return post;
    };
    getPost();
    console.log("effect here ran 1");
  }, [id.id]);

  console.log(post);
  return (
    <div className="post-container">
      <div className="post-header __style_default">
        <div className="post-text flex-default">
          <div className="heading">
            {" "}
            <h2 className="post-title">{post.title}</h2>
          </div>
          <div className="cat">
            <button className="btn">Technology</button>
          </div>
          <div className="post-detail">
            <p className="post-author">Words By {post.author}</p>
            <span className="timestamp">
              <TimeAgo datetime={post.published} />
            </span>
          </div>
        </div>
        <div className="post-image">
          <img src={post.image} alt="" />
        </div>
      </div>
      <div className="post-content">
        <div className="post-container">
          <div className="post-content-text __overview">
            <p className="content">{post.overview}</p>
          </div>
          <div className="post-content-image">
            <img src={post.image} alt="" />
          </div>
          <div className="post-content-text __content">
            <p className="content">{post.content}</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Post;
