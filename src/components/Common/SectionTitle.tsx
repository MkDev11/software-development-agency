const SectionTitle = ({
  title,
  paragraph,
  width = "630px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ marginBottom: mb }}
      >
        <h4 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-3xl">
          {title}
        </h4>
        <p className="text-wrap text-base !leading-relaxed text-body-color text-wrap md:text-lg text-balance">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
