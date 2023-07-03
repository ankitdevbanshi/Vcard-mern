import React from "react";
import Blog from "../components/Blog";

function BlogPage() {
  return (
    <div className="flex flex-col items-center px-3  mt-8 gap-6">
      <h2 className="h2-gray">Blog</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
}

export default BlogPage;
