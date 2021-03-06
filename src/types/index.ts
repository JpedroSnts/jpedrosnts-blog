export type textLang = { "pt-BR": string; "en-US": string };

export interface NavbarProps {
  "pt-BR": string[];
  "en-US": string[];
  links: string[];
}

export interface AboutDataProps {
  title: textLang;
  description: textLang;
  image: {
    src: string;
    alt: textLang;
  };
  name: string;
  icons: Array<{
    title: string;
    src: string;
    alt: textLang;
  }>;
  text: textLang;
}

export interface HomeDataProps {
  title: textLang;
  description: textLang;
}

export interface DisplayData {
  about: {
    title: {
      "pt-BR": string;
      "en-US": string;
    };
    description: textLang;
    image: {
      src: string;
      alt: textLang;
    };
    name: string;
    icons: Array<{
      title: string;
      src: string;
      alt: textLang;
    }>;
    text: textLang;
  };
}

export type PostDbData = {
  id: string;
  title_en: string;
  content_en: string;
  title_pt: string;
  content_pt: string;
  slug: string;
  _createdAt: string;
  _updatedAt: string;
};

export type PostData = {
  id: string;
  title: {
    "en-US": string;
    "pt-BR": string;
  };
  content: {
    "en-US": string;
    "pt-BR": string;
  };
  date: {
    "en-US": string;
    "pt-BR": string;
  };
  updatedAt: {
    "en-US": string;
    "pt-BR": string;
  };
  slug: string;
};
