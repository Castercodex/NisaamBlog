import { useState, useEffect } from "react";
import Posts from "./Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetch("http://localhost:8080/categories");
    const data = await response.json();
    setCategories(data);
  };
  const getPosts = async () => {
    const response = await fetch("http://localhost:8080/posts");
    const data = await response.json();
    setPosts(data);
    setLoading(false);
    console.log(data);
  };
  useEffect(() => {
    getCategories();
    getPosts();
  }, []);
  return (
    <div className="site-content">
      <div className="header">
        <div className="title">
          <h1>The Nisam Blog</h1>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <button key={category.id}>
              <a href={`/categories/${category.id}`}>{category.name}</a>
            </button>
          ))}
        </div>
      </div>
      <Posts loading={loading} posts={posts} />
    </div>
  );
};

export default Home;
