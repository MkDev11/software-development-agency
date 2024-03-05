import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, link, tags } = blog;
  return (
    <>
      <div className="group relative mb-8 h-[330px] overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark md:h-[470px]">
        <Link
          href={link}
          target="_blank"
          className="relative block aspect-[37/22] w-full"
        >
          {tags[0] && (
            <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
              {tags[0]}
            </span>
          )}

          {tags[1] && (
            <span className="absolute right-36 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
              {tags[1]}
            </span>
          )}
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={link}
              target="_blank"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <h6>
            <Link
              href={link}
              target="_blank"
              className="mb-4 block text-black hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {paragraph}
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
