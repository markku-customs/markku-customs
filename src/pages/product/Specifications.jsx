import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { options } from '@/constants';

const Specifications = ({ specifications }) => {
  return (
    <section className="specifications-container">
      <div className="specifications">
        {documentToReactComponents(specifications, options)}
      </div>
    </section>
  );
};

export default Specifications;
