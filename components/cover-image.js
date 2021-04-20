import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ src, title, url }) {
  const image = (
    <Image
      src={src}
      alt={`صورة الغلاف لمقال ${title}`}
      layout="fill"
      objectFit="contain"
      objectPosition="top"
      className=""
    />
  );
  return (
    <div className="relative w-full h-full">
      {url ? (
        <Link href={url}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
