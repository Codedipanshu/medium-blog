import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import { useBlogs } from "../hoooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Appbar />
      <div className=" flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishDate={"2nd Feb 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
