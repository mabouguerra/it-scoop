import DateFormatter from "@/components/date-formatter";
import CoverImage from "@/components/cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  url,
}) {
  return (
    <div className="flex items-center py-8 lg:py-10">
      <div className="flex-shrink-0 hidden ml-6 w-36 h-36 md:h-44 md:w-44 sm:block ">
        <CoverImage src={coverImage} title={title} url={url} />
      </div>
      <div>
        <div className="text-xs text-gray-700 dark:text-gray-300 lg:text-sm ">
          <DateFormatter dateString={date} />
        </div>
        <h2 className="mt-2 text-2xl text-gray-900 font-cursive lg:mt-4 dark:text-gray-100 dark:hover:text-gray-300 hover:text-gray-700 sm:text-4xl lg:text-5xl ">
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </h2>
        <div
          className="mt-4 text-sm font-medium text-gray-700 dark:text-gray-200 sm:text-base lg:mt-8 line-clamp-3 sm:line-clamp-none"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
        <Link href={url}>
          <a className="inline-block mt-4 text-sm font-bold text-red-600 lg:mt-6 dark:text-red-400 dark:hover:text-red-600 hover:text-red-500 sm:text-base">
            طالع المزيد ←
          </a>
        </Link>
      </div>
    </div>
  );
}
