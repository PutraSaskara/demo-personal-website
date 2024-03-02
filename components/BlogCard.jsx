import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({img, desc, title, author, link, key}) {
  return (
    <div className="max-w-sm px-4 bg-[#352F44]" key={key}>
      <div className="max-w-[370px] mx-auto mb-10">
        <div className="rounded overflow-hidden mb-8">
          <Image
            width={200}
            height={200}
            src={img}
            alt="image"
            className="w-full h-[150px]"
          />
        </div>
        <div>
          <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-[#DBD8E3] mb-5">
            {author}
          </span>
          <h3>
            <a
              href={link}
              className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary text-[#DBD8E3]"
            >
              {title}
            </a>
          </h3>
          <p className="text-base text-body-color line-clamp-3 text-[#DBD8E3]">
            {desc}
          </p>
        </div>
        <Link
          href={link}
          className="inline-flex w-full mt-5 items-center px-3 py-2 text-sm font-medium justify-center text-white bg-[#78A083] rounded-lg hover:bg-[#559e6a] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
