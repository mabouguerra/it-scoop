import { DiscussionEmbed } from "disqus-react";
import { useState } from "react";

export default function Comments({ pid, url, title }) {
  const [display, setDisplay] = useState(false);
  const disqusShortname = "it-scoop-1";
  const disqusConfig = {
    url: `https://it-scoop.vercel.app/${url}`,
    identifier: pid,
    title: title,
    language: "ar_DZ",
  };
  return (
    <div className="mt-24 border-t border-gray-100 dark:border-gray-800 sm:pb-36 pb-28 lg:pb-40">
      <button
        className="mb-6 text-lg font-bold text-gray-800 focus:outline-none dark:text-gray-200 lg:text-2xl lg:py-6"
        onClick={() => {
          setDisplay(true);
        }}
      >
        التعليقات ←
      </button>
      {display && (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      )}
    </div>
  );
}
