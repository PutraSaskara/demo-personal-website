"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card3 from './Card3'

function Portfolio() {
    const [porto, setPorto] = useState([]);

  useEffect(() => {
    fetchPortos();
  }, []);

  const fetchPortos = async () => {
    try {
      const response = await axios.get("https://sas-api.vercel.app/portfolio");
      setPorto(response.data);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  };

  console.log('ini data portfolio', porto)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 pb-10 px-2 gap-y-5'>
          
          {porto.map((item) => (
            <Card3
            key={item.id}
            img={item.imageUrl}
            link={item.domain}
            github={item.github}
            title={item.title}
            desc={item.description}
            />
            ))}
        </div>
  )
}

export default Portfolio