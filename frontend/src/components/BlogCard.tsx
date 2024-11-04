interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishDate,
}: BlogCardProps) => {
  return (
    <div className=" p-4 border-b border-slate-200 pb-4">
      <div className="flex">
        <Avatar name={authorName} />
        <div className=" font-extralight pl-2 text-sm flex justify-center flex-col ">
          {authorName}
        </div>
        <div className=" flex justify-center flex-col pl-2">
          <Circle />
        </div>
        <div className=" pl-2 font-light text-slate-500 text-sm flex justify-center flex-col">
          {publishDate}
        </div>
      </div>
      <div className=" text-xl font-semibold pt-2">{title}</div>
      <div className=" text-md font-normal">
        {content.slice(0, 100) + "..."}
      </div>
      <div className=" text-slate-500 text-sm font-thin pt-2">{`${Math.floor(
        content.length / 100
      )} minute(s) read`}</div>
    </div>
  );
};

const Circle = () => {
  return <div className=" h-1 w-1 rounded-full bg-slate-500"></div>;
};

export const Avatar = ({ name, size=6 }: { name: string; size?: number }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-600 rounded-full`}
    >
      <span className=" text-xs font-extralight text-gray-300 ">{name[0]}</span>
    </div>
  );
};

export default BlogCard;
