import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import Post from "./Post";

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

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch("http://localhost:8080/api/categories")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`response.status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setCategories(data);
        })
        .catch((err) => {
          throw err.message;
        });
      return response;
    };
    const getPosts = async () => {
      const response = await fetch("/api/article");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    getCategories();
    getPosts();
    console.log("effect ran 1");
  }, []);
  return (
    <div className="site-content">
      <Routes>
        <Route
          path="/"
          element={
            <Posts posts={posts} loading={loading} categories={categories} />
          }
        />
        <Route
          path="/posts/:id"
          element={
            <Post posts={posts} loading={loading} categories={categories} />
          }
        />
      </Routes>
    </div>
  );
};

export default Home;
