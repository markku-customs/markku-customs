const { createClient } = require('contentful');

exports.handler = async (event) => {
  try {
    const client = createClient({
      space: process.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    const { id } = event.queryStringParameters;

    const entry = await client.getEntry(id, {
      content_type: 'product',
      locale: '*',
    });

    return {
      statusCode: 200,
      body: JSON.stringify(entry),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
