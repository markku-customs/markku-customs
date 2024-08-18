const { createClient } = require('contentful');

const { LNG } = require('@/constants');

exports.handler = async (event) => {
  try {
    const client = createClient({
      space: process.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    const { slug } = event.queryStringParameters;

    const entry = await client.getEntries({
      content_type: 'page',
      locale: '*',
      'fields.slug': slug,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(entry.items[0]),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: {
          [LNG.en]: 'An unexpected error occured on the server.',
          [LNG.fi]: 'Palvelimella tapahtui odottamaton virhe.',
        },
        error,
      }),
    };
  }
};
