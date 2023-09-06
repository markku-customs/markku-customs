const { createClient } = require('contentful');

export default async function handler() {
  try {
    const client = createClient({
      space: process.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });

    const entries = await client.getEntries({
      content_type: 'review',
      locale: '*',
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
}
