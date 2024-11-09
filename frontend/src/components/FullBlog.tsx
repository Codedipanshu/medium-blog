import { Blog } from "../hoooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className=" flex justify-center">
      <div className=" grid grid-cols-12 gap-8 w-full px-10 pt-12 max-w-screen-xl">
        <div className=" col-span-8">
          <div className=" text-5xl font-extrabold">{blog.title}</div>
          <div className=" text-slate-500 pt-2">Post on 2nd December</div>
          <div className=" pt-4">{blog.content}</div>
        </div>
        <div className=" col-span-4">
          <div className=" text-slate-600 text-lg">Author</div>
          <div className="flex">
            <div className=" pr-4 flex flex-col justify-center">
              <Avatar size={8} name={blog.author.name || "Anonymous"} />
            </div>
            <div>
              <div className=" text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className=" pt-2 text-slate-500">
                Random catch phrase about the author's ability to grab the
                user's attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
