"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";

function Experience() {
    const [exps, setExps] = useState([]);

  useEffect(() => {
    fetchExps();
  }, []);

  const fetchExps = async () => {
    try {
      const response = await axios.get("https://sas-api.vercel.app/exps");
      setExps(response.data);
    } catch (error) {
      console.error("Error fetching experience:", error);
    }
  };

  console.log('ini data experience', exps)
  return (
    <div>
      <div className="flex items-center justify-center px-6 md:px-60 py-10">
        <div className="space-y-6 border-l-2 border-dashed">
            {exps.map((item) => (
                <List 
                key={item.id}
                title={item.title}
                desc={item.description}
                year={item.year}
                />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
