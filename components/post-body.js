import markdownStyles from "../components/markdown-styles.module.css";
import cn from "classnames";

export default function PostBody({ content }) {
  return (
    <div className="mt-12 sm:mt-20 lg:mt-24 ">
      <div
        className="prose break-words sm:dark:prose-lg-dark dark:prose-dark prose-red sm:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
