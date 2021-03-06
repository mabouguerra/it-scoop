import Link from "next/link";

export default function Paginator({ currentPage, pageCount }) {
  return (
    <div className="grid grid-cols-2 mt-6 font-bold text-gray-900 dark:hover:text-gray-300 hover:text-gray-700 dark:text-gray-100 sm:text-lg ">
      {currentPage !== pageCount && (
        <Link href={`/page/${currentPage + 1}`}>
          <a className="col-start-1 place-self-start"> → المنشورات اﻷقدم</a>
        </Link>
      )}
      {currentPage !== 1 && (
        <Link href={`/page/${currentPage - 1}`}>
          <a className="col-start-2 place-self-end">المنشورات اﻷحدث ←</a>
        </Link>
      )}
    </div>
  );
}
