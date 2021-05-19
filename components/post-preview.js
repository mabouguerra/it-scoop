import Avatar from "@/components/avatar";
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
        <DateFormatter dateString={date} />
        <h2 className="mt-2 text-xl font-bold leading-tight text-gray-900 lg:mt-4 dark:text-gray-100 dark:hover:text-gray-300 hover:text-gray-700 sm:text-2xl lg:text-3xl ">
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </h2>
        <div className="mt-2 lg:mt-4">
          <Avatar author={author} />
        </div>
        <div
          className="mt-6 text-sm font-medium text-gray-700 dark:text-gray-300 sm:text-base lg:mt-8 line-clamp-3 sm:line-clamp-none"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
        <Link href={url}>
          <a className="inline-block mt-4 text-base font-bold text-red-600 lg:mt-6 dark:text-red-400 dark:hover:text-red-600 hover:text-red-500 sm:text-lg">
            طالع المزيد ←
          </a>
        </Link>
      </div>
    </div>
  );
}
