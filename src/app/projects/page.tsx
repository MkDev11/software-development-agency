import SingleBlog from "@/components/Projects/SingleProject";
import blogData from "@/components/Projects/projectsData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | CodeMonster",
  description: "This is Projects Page",
  // other metadata
};

const Projects = () => {
  return (
    <>
      <Breadcrumb
        pageName="Projects"
        description="Find all of our projects that we have built before"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center ">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
