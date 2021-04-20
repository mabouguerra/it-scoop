import markdownStyles from "../components/markdown-styles.module.css";
import cn from "classnames";

export default function PostBody({ content }) {
  return (
    <div className="mt-12 sm:mt-20 lg:mt-24 sm:pb-36 pb-28 lg:pb-40">
      <div
        className="prose prose-red sm:prose-sm lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
