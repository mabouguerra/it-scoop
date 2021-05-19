import DateFormatter from "@/components/date-formatter";
import Avatar from "./avatar";

export default function PostHeader({ title, author, date }) {
  return (
    <div className="mt-8 sm:mt-16 lg:mt-24">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl lg:text-4xl ">
        {title}
      </h1>
      <div className="mt-4 text-sm font-medium text-gray-800 dark:text-gray-200 lg:text-base lg:mt-6 lg:mb-1">
        {author}
      </div>
      <div className="mt-2 ">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
