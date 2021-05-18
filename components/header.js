import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-30 h-16 bg-white bg-opacity-50 dark:bg-opacity-50 firefox:bg-opacity-90 dark:firefox:bg-opacity-90 dark:bg-gray-900 xl:px-8 backdrop-filter backdrop-blur">
      {mounted && (
        <div className="flex items-center justify-between max-w-6xl px-4 py-3 mx-auto border-b border-gray-200 dark:border-gray-800 xl:px-0 lg:px-8 sm:px-6 ">
          <Link href="/">
            <a className="focus:outline-none">
              {theme === "dark" ? (
                <img className="h-8 lg:h-10" src="/logo-white.png" />
              ) : (
                <img className="h-8 lg:h-10" src="/logo-colored.png" />
              )}
            </a>
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="p-2 bg-gray-200 rounded-md dark:hover:bg-gray-700 focus:ring-2 ring-gray-900 dark:ring-gray-200 dark:bg-gray-800 hover:bg-gray-300 focus:outline-none"
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-100 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-900 stroke-current"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </header>
  );
}
