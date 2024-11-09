import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hoooks";
import Loader from "../components/Loader";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return <Loader />;
  }

  return (
    <div>
      <Appbar />
      <FullBlog blog={blog} />
    </div>
  );
};
export default Blog;
