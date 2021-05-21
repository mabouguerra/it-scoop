import DateFormatter from "@/components/date-formatter";
import Avatar from "./avatar";

export default function PostHeader({ title, author, date }) {
  return (
    <div className="mt-8 sm:mt-16 lg:mt-24">
      <h1 className="text-4xl text-gray-900 font-cursive dark:text-gray-100 sm:text-5xl lg:text-6xl ">
        {title}
      </h1>
      <div className="flex items-center mt-4 text-xs text-gray-700 sm:mt-6 dark:text-gray-300 lg:text-sm lg:mt-8 ">
        <Avatar author={author} />
        <div className="mx-2">&#183;</div>
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
