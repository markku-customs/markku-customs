import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="my-2 leading-8 text-zinc-400">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h2 className="my-6 text-2xl font-semibold leading-8">{children}</h2>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h3 className="my-4 text-xl font-semibold leading-8">{children}</h3>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h4 className="my-2 text-lg font-semibold leading-8">{children}</h4>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h5 className="my-1 text-base font-semibold leading-8">{children}</h5>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="my-4 list-inside list-disc marker:text-zinc-600">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="my-4 list-inside list-decimal marker:text-zinc-600">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="list-item">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            className: `text-zinc-400 inline-block leading-8 my-0"`,
          })
        )}
      </li>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 h-px border-none bg-zinc-800" />,
    [BLOCKS.TABLE]: (node, children) => (
      <table className="my-4 w-full text-left text-sm">
        <tbody>{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="border-b border-zinc-700 bg-zinc-800">{children}</tr>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="bg-zinc-900 px-6 py-4">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            className: 'text-zinc-200 leading-8 my-0',
          })
        )}
      </th>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="px-6 py-4">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            className: 'text-zinc-400 leading-8 my-0',
          })
        )}
      </td>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="my-4 border-l-4 border-red-600 bg-zinc-800 p-4">
        <p className="font-semibold italic">{children}</p>
      </blockquote>
    ),
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a
        href={data.uri}
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-red-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

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
