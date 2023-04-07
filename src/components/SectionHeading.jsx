const SectionHeading = ({ heading }) => {
  return (
    <h2 className="font-heading text-4xl md:text-6xl mb-8">
      <span className="text-red-600 mr-4">#</span>
      {heading}
    </h2>
  );
};

export default SectionHeading;
