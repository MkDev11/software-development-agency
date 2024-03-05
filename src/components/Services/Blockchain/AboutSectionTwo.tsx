import Image from "next/image";

const AboutSectionTwo = () => {
  const sectionData = [
    [
      {
        title: "E-Commerce",
        description:
          "We create e-commerce systems that can boost up your sales to the next level.",
      },
      {
        title: "Fintech",
        description:
          "We have created more than 10+ Fintech platforms. The count is increasing each day.",
      },
      {
        title: "E-Learning",
        description:
          "Ease of Learning from any place and time is today’s need. Our products satisfy this.",
      },
      {
        title: "Real Estate",
        description:
          "This is the time to add a touch of application layer in Real Estate. We excel at it.",
      },
    ],
    [
      {
        title: "Food & Beverages",
        description:
          "We are at the forefront of tech adoption in the food & beverage business.",
      },
      {
        title: "Healthcare",
        description:
          "Contact us to utilize our expertise for building your next Healthcare platform.",
      },
      {
        title: "Ondemand",
        description:
          "When it’s about our favorite niche, you can guess the quality you’ll get from us.",
      },
      {
        title: "Social Network",
        description:
          "Brilliant networking is the key to success; our expert team also ensures that.",
      },
    ],
    [
      {
        title: "Entertainment",
        description:
          "Our tech stack and designs make a cakewalk for you to build entertainment apps.",
      },
      {
        title: "News",
        description:
          "We know how to satisfy the App's demand for a high level of precision and design.",
      },
      {
        title: "Travel",
        description:
          "When it is a Travel app, our designers are just what’s required to capture the attention.",
      },
      {
        title: "Sports",
        description:
          "We make sure that sportspersons utilize apps that correspond to their energy level.",
      },
    ],
    [
      {
        title: "Transports",
        description:
          "App’s demand for a high level of precision and design, we know how to satisfy.",
      },
      {
        title: "Classified",
        description:
          "Our expertise in data management is the requirement for classified platforms.",
      },
      {
        title: "Manufacturing",
        description:
          "We are pro players in the game of building tech platforms for manufacturing.",
      },
      {
        title: "Retail",
        description:
          "Removing back-office tasks to provide the ideal POS solution. We handle everything.",
      },
    ],
  ];
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {sectionData.map((data, index) => {
            return (
              <div className="w-full px-4 lg:w-1/4" key = {index}>
                <div className="max-w-[470px]">
                  <div className="mb-9">
                    <h3 className="mb-4 flex items-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-cast"
                        >
                          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                          <line x1="2" y1="20" x2="2.01" y2="20"></line>
                        </svg>
                      </span>
                      {data[0].title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      {data[0].description}
                    </p>
                  </div>
                  <div className="mb-9">
                    <h3 className="mb-4 flex items-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-monitor"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </span>
                      {data[1].title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    {data[1].description}
                    </p>
                  </div>
                  <div className="mb-9">
                    <h3 className="mb-4 flex items-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-monitor"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </span>
                      {data[2].title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    {data[2].description}
                    </p>
                  </div>

                  <div className="mb-1">
                    <h3 className="mb-4 flex items-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-monitor"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </span>
                      {data[3].title}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    {data[3].description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
