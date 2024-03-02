"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";

function ArticlePage({ blogId }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `https://sas-api.vercel.app/blogs/${blogId}`
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <>
      <Article
        title={blogs.title}
        imageUrl={blogs.imageUrl}
        content={blogs.content}
        source={blogs.source}
        author={blogs.author}
      />
    </>
  );
}

export default ArticlePage;
