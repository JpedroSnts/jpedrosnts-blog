import { PostDbData } from "../types";
import { allPosts, postBySlug } from "./dato-cms";

export async function getAllPosts() {
  function formatDate(data: string, lang: string) {
    return (
      new Date(data).toLocaleDateString(lang) +
      " - " +
      new Date(data).toLocaleTimeString(lang)
    );
  }

  const { allPosts: data } = await allPosts();
  const posts = data.map((post: PostDbData) => ({
    id: post.id,
    title: {
      "en-US": post.title_en,
      "pt-BR": post.title_pt,
    },
    date: {
      "en-US": formatDate(post._createdAt, "en-US"),
      "pt-BR": formatDate(post._createdAt, "pt-BR"),
    },
    slug: post.slug,
  }));
  return { posts };
}

export async function getPostBySlug(slug: string | string[] | undefined) {
  function formatDate(data: string, lang: string) {
    return (
      new Date(data).toLocaleDateString(lang) +
      " - " +
      new Date(data).toLocaleTimeString(lang)
    );
  }
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
      "en-US": formatDate(post._createdAt, "en-US"),
      "pt-BR": formatDate(post._createdAt, "pt-BR"),
    },
  };
  return { post: Post };
}

export function getDisplayData() {
  return {
    about: {
      title: {
        "pt-BR": "Sobre - JpedroSnts",
        "en-US": "About - JpedroSnts",
      },
      description: {
        "pt-BR": "Descubra quem é JpedroSnts suas competências e habilidades.",
        "en-US": "Find out who is JpedroSnts your skills and abilities.",
      },
      image: {
        src: "/profile.png",
        alt: {
          "pt-BR": "Foto de JpedroSnts",
          "en-US": "Picture of JpedroSnts",
        },
      },
      name: "JpedroSnts",
      icons: [
        {
          title: "HTML",
          src: "/html.svg",
          alt: {
            "pt-BR": "Ícone HTML",
            "en-US": "Icon HTML",
          },
        },
        {
          title: "CSS",
          src: "/css.svg",
          alt: {
            "pt-BR": "Ícone CSS",
            "en-US": "Icon CSS",
          },
        },
        {
          title: "JavaScript",
          src: "/javascript.svg",
          alt: {
            "pt-BR": "Ícone JavaScript",
            "en-US": "Icon JavaScript",
          },
        },
        {
          title: "TypeScript",
          src: "/typescript.svg",
          alt: {
            "pt-BR": "Ícone TypeScript",
            "en-US": "Icon TypeScript",
          },
        },
        {
          title: "React.js",
          src: "/react.svg",
          alt: {
            "pt-BR": "Ícone React.js",
            "en-US": "Icon React.js",
          },
        },
        {
          title: "Vue.js",
          src: "/vue.svg",
          alt: {
            "pt-BR": "Ícone Vue.js",
            "en-US": "Icon Vue.js",
          },
        },
      ],
      text: {
        "pt-BR":
          "Olá meu nome é João Pedro, tenho 16 anos e atualmente estou cursando técnico em desenvolvimento de sistemas integrado ao ensino médio, ao entrar neste curso a cerca de 1 ano eu não fazia idéia do que iria fazer, e então me apaixonei por este mundo!",
        "en-US":
          "Hello my name is João Pedro, I'm 16 years old and I'm currently studying a technician in systems development integrated to high school, when I entered this course about 1 year ago I had no idea what I was going to do, and then I fell in love with this world!",
      },
    },
  };
}
