import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-opacity-50 xl:px-8 backdrop-filter backdrop-blur">
      <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto border-b border-gray-200 lg:my-1 xl:px-0 lg:px-8 sm:px-6 ">
        <Link href="/">
          <a className="focus:outline-none">
            <img className="h-8 lg:h-10" src="/logo-colored.png" />
          </a>
        </Link>
        <button className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none">
          <svg
            className="w-4 h-4 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
