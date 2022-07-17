const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

async function fetchCmsApi(query: string, { variables }: { variables?: any } = {}) {
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
        allPosts(orderBy: createdAt_DESC){
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

export async function homePage() {
	const data = await fetchCmsApi(
		`{
      homePage {
        title_en: title(locale: en),
        title_pt: title(locale: pt),
        description_en: description(locale: en),
        description_pt: description(locale: pt)
      }
    }`,
	);
	return data;
}

export async function aboutPage() {
	const data = await fetchCmsApi(
		`{
      aboutPage {
        title_pt: pageTitle(locale: pt)
        title_en: pageTitle(locale: en)
        description_pt: pageDescription(locale: pt)
        description_en: pageDescription(locale: en)
        name: myName
        text_pt: aboutMeText(locale: pt)
        text_en: aboutMeText(locale: en)
        icons {
          image {
            alt_pt: alt(locale: pt)
            alt_en: alt(locale: en)
            url
          }
          title
        }
        srcImage {
          alt_pt: alt(locale: pt)
          alt_en: alt(locale: en)
          url
        }
      }
    }`,
	);
	return data;
}
