import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className=" flex justify-center">
        <div className=" max-w-2xl">
          <BlogCard
            authorName={"Dipanshu Agrawal"}
            title={
              "How an ugly single page website makes $5000 a month without affiliate markeetting"
            }
            content={
              "How an ugly single page website makes $5000 a month without affiliate markeetting How an ugly single page website makes $5000 a month without affiliate markeetting How an ugly single page website makes $5000 a month without affiliate markeetting"
            }
            publishDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Dipanshu Agrawal"}
            title={
              "How an ugly single page website makes $5000 a month without affiliate markeetting"
            }
            content={
              "How an ugly single page website makes $5000 a month without affiliate markeetting How an ugly single page website makes $5000 a month without affiliate markeetting How an ugly single page website makes $5000 a month without affiliate markeetting"
            }
            publishDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Dipanshu Agrawal"}
            title={
              "How an ugly single page website makes $5000 a month without affiliate markeetting"
            }
            content={
              "How an ugly single page website makes $5000 a month without affiliate markeetting How an ugly single page website makes $5000 a month without affiliate markeetting How an ugly single page website makes $5000 a month without affiliate markeetting"
            }
            publishDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Dipanshu Agrawal"}
            title={
              "How an ugly single page website makes $5000 a month without affiliate markeetting"
            }
            content={
              "How an ugly single page website makes $5000 a month without affiliate markeetting How an ugly single page website makes $5000 a month without affiliate markeetting How an ugly single page website makes $5000 a month without affiliate markeetting"
            }
            publishDate={"2nd Feb 2024"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
