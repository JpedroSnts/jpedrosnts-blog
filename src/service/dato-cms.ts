const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

async function fetchCmsApi(
  query: string,
  { variables }: { variables?: any } = {},
) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function allPosts() {
  const data = await fetchCmsApi(
    `{
        allPosts {
          id
          title_pt: title(locale: pt)
          title_en: title(locale: en)
          _createdAt
          slug
        }
      }`,
  );
  return data;
}

export async function postBySlug(slug: string | string[] | undefined) {
  const data = await fetchCmsApi(
    `{
        post(filter: {slug: {eq: "${slug}"}}) {
          title_en: title(locale: en)
          title_pt: title(locale: pt)
          content_en: content(locale: en)
          content_pt: content(locale: pt)
          _updatedAt
          _createdAt
        }
    }`,
  );
  return data;
}
