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
