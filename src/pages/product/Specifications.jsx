import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { RICH_TEXT_OPTIONS } from '@/constants';

const Specifications = ({ specifications }) => {
  return (
    <section className="specifications-container">
      <div className="specifications">
        {documentToReactComponents(specifications, RICH_TEXT_OPTIONS)}
      </div>
    </section>
  );
};

export default Specifications;
