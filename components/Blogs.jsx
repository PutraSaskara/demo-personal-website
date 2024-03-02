"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://sas-api.vercel.app/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  console.log('ini data blogs', blogs)
  return (
    <section className="pt-20  pb-10 lg:pb-20 flex flex-col justify-center items-center">
      <title className="text-[#5C5470]">Blogs</title>
      <div className="container ">
        <div className="flex flex-wrap justify-center text-[#5C5470]">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                My Blogs
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
              Insights and Updates
              </h2>
              <p className="text-base text-body-color">
              Welcome to my personal blog, where I share stories, opinions, and reflections on my journey through life and web development  
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-5 justify-items-center w-full">
          {blogs.map((blog) => (
            
              <BlogCard 
              key={blog.id}
              img={blog.imageUrl}
              title={blog.title}
              desc={blog.description}
              author={blog.author}
              link={`/blog/${blog.id}`}
              />

              ))}
              </div>
      </div>
    </section>
  )
}

export default Blogs