const { createClient } = require('contentful');

exports.handler = async () => {
  try {
    const client = createClient({
      // space: process.env.VITE_CONTENTFUL_SPACE_ID,
      // accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,

      space: process.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN_PREVIEW,
      host: 'preview.contentful.com',
    });

    const entries = await client.getEntries({
      content_type: 'product',
      locale: '*',
      order: 'fields.price',
    });

    return {
      statusCode: 200,
      body: JSON.stringify(entries),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: {
          'en-US': 'An unexpected error occured on the server.',
          'fi-FI': 'Palvelimella tapahtui odottamaton virhe.',
        },
        error,
      }),
    };
  }
};
