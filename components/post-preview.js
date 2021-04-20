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
    <div className="flex py-4 items-top">
      <div className="flex-shrink-0 hidden ml-4 w-36 h-36 md:h-44 md:w-44 sm:block ">
        <CoverImage src={coverImage} title={title} url={url} />
      </div>
      <div>
        <DateFormatter dateString={date} />
        <h2 className="mt-2 text-xl font-bold leading-tight text-gray-900 hover:text-gray-800 sm:text-2xl lg:text-3xl ">
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </h2>
        <div>
          <Avatar author={author} />
        </div>
        <p className="mt-4 text-sm font-medium text-gray-700 sm:text-base lg:mt-6 line-clamp-3 sm:line-clamp-none">
          {excerpt} <span>...</span>
        </p>
        <Link href={url}>
          <a className="block mt-2 text-base font-bold text-red-600 hover:text-red-500 sm:text-lg">
            طالع المزيد ←
          </a>
        </Link>
      </div>
    </div>
  );
}
