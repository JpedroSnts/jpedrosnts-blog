export type textLang = { "pt-BR": string; "en-US": string };

export interface NavbarProps {
  "pt-BR": {
    items: string[];
    links: string[];
  };
  "en-US": {
    items: string[];
    links: string[];
  };
}

export interface AboutDataProps {
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
  date_en: string;
  date_pt: string;
  slug: string;
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
  slug: string;
};
