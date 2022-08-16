import { useState, useEffect } from "react";
import Posts from "./Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Technology",
    },
    {
      id: 2,
      name: "Creator",
    },
    {
      id: 3,
      name: "Crap News",
    },
    {
      id: 4,
      name: "Open Source",
    },
    {
      id: 5,
      name: "Science",
    },
  ]);

  const getCategories = async () => {
    const response = await fetch("http://localhost:8080/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`response.status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        return response;
      });
  };
  const getPosts = async () => {
    const response = await fetch("/api/article");
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
