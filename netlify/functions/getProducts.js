import { createClient } from "contentful";

exports.handler = async function (event, context) {
    try {
        const client = createClient({
            space: process.env.VITE_CONTENTFUL_SPACE_ID,
            accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
        });

        const entries = await client.getEntries({ content_type: "product", locale: "*" })

        return {
            statusCode: 200,
            body: JSON.stringify(entries)
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }
};