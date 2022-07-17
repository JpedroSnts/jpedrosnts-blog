import { PostDbData } from "../types";
import { aboutPage, allPosts, homePage, postBySlug } from "./dato-cms";

function getDatePt(date: string) {
	var dt = new Date(date);
	const day = dt.getDate() <= 9 ? `0${dt.getDate()}` : dt.getDate();
	const month = dt.getMonth() + 1 <= 9 ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1;
	const year = dt.getFullYear();
	const date_frm = `${day}/${month}/${year}`;
	return date_frm;
}

function getDateEn(date: string) {
	var dt = new Date(date);
	const day = dt.getDate();
	const month = dt.getMonth() + 1;
	const year = dt.getFullYear();
	const date_frm = `${month}/${day}/${year}`;
	return date_frm;
}

export async function getAllPosts() {
	const { allPosts: data } = await allPosts();
	const posts = data.map((post: PostDbData) => ({
		id: post.id,
		title: {
			"en-US": post.title_en,
			"pt-BR": post.title_pt,
		},
		date: {
			"en-US": getDateEn(post._createdAt),
			"pt-BR": getDatePt(post._createdAt),
		},
		slug: post.slug,
	}));
	return { posts };
}

export async function getPostBySlug(slug: string | string[] | undefined) {
	const { post } = await postBySlug(slug);
	const Post = {
		title: {
			"en-US": post.title_en,
			"pt-BR": post.title_pt,
		},
		content: {
			"en-US": post.content_en,
			"pt-BR": post.content_pt,
		},
		date: {
			"en-US": getDateEn(post._createdAt),
			"pt-BR": getDatePt(post._createdAt),
		},
		updatedAt: {
			"en-US": getDateEn(post._updatedAt),
			"pt-BR": getDatePt(post._updatedAt),
		},
	};
	return { post: Post };
}

export async function getHomeData() {
	const { homePage: data } = await homePage();
	return {
		home: {
			title: {
				"pt-BR": data.title_pt,
				"en-US": data.title_en,
			},
			description: {
				"pt-BR": data.description_pt,
				"en-US": data.description_en,
			},
		},
	};
}

export async function getAboutData() {
	const { aboutPage: data } = await aboutPage();
	const icons = [];
	for (const icon of data.icons) {
		icons.push({
			title: icon.title,
			src: icon.image.url,
			alt: {
				"pt-BR": icon.image.alt_pt,
				"en-US": icon.image.alt_en,
			},
		});
	}
	return {
		about: {
			title: {
				"pt-BR": data.title_pt,
				"en-US": data.title_en,
			},
			description: {
				"pt-BR": data.description_pt,
				"en-US": data.description_en,
			},
			image: {
				src: data.srcImage.url,
				alt: {
					"pt-BR": data.srcImage.alt_pt,
					"en-US": data.srcImage.alt_en,
				},
			},
			name: data.name,
			icons,
			text: {
				"pt-BR": data.text_pt,
				"en-US": data.text_en,
			},
		},
	};
}
