import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-6xl">
        <div className="grid items-center grid-cols-2 py-4 mt-12 border-t border-gray-200 dark:border-gray-800 lg:grid-cols-3 lg:mt-20 ">
          <div className="text-xs text-gray-500 dark:text-gray-400 lg:col-span-2 sm:text-xs ">
            <div className="">
              <span className="inline">
                محتوى الموقع منشور تحت رخصة المشاع الإبداعي
              </span>
              <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">
                <img src="/by-nc-sa.svg" className="h-2.5 sm:h-3 inline mr-2" />
              </a>
              <p className="hidden lg:block">
                يُمكنك استخدام محتويات المجلة التقنية بشرط ذكر اسم المؤلف
                والمجلة التقنية والرابط إلى المقالة المعنية بالأمر، ما لم ينص
                صاحب المقال على غير ذلك.
              </p>
            </div>
          </div>
          <div className="text-xs font-medium text-left text-gray-500 hover:text-gray-400 dark:hover:text-gray-300 dark:text-gray-400 sm:text-sm ">
            <Link href="/about">
              <a>عن المجلة التقنية</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
