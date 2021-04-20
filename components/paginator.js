import Link from "next/link";

export default function Paginator({ currentPage, pageCount }) {
  return (
    <div className="grid grid-cols-2 mt-4 font-bold sm:pb-36 pb-28 lg:pb-40 sm:text-lg ">
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
