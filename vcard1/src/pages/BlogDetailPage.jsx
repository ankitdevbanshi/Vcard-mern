import React from "react";
import Comments from "../components/Comments";

function BlogDetailPage() {
  return (
    <>
      <div className="flex p-4 md:px-16 flex-col gap-8 items-center">
        <h2 className="h2-gray mt-8">Title</h2>

        <div className="flex text-gray-500 gap-4">
          <span>date</span>
          <span>4 comments</span>
        </div>

        <img
          className="w-11/12 h-auto  object-contain sm:w-4/5 md:w-1/2 border border-gray-300 p-4"
          src="card.png"
          alt=""
        />

        <p className="text-center text-gray-600 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          exercitationem odit aspernatur provident? Neque nesciunt, deleniti ex
          error sint, doloribus tenetur inventore ea iusto, facilis maiores! In,
          officiis aliquid accusantium temporibus saepe dolores ipsa harum enim
          distinctio eveniet sequi. Maiores, vitae. Quam, est ab reprehenderit
          nihil dolorem nam ipsa dignissimos!
        </p>

        <h3 className="text-center h3-gray">introduction</h3>
        <p className="text-gray-600 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          exercitationem odit aspernatur provident? Neque nesciunt, deleniti ex
          error sint, doloribus tenetur inventore ea iusto, facilis maiores! In,
          officiis aliquid accusantium temporibus saepe dolores ipsa harum enim
          distinctio eveniet sequi. Maiores, vitae. Quam, est ab reprehenderit
          nihil dolorem nam ipsa dignissimos!
        </p>
        <h3 className="h3-gray">Comments</h3>
      </div>

      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </>
  );
}

export default BlogDetailPage;
