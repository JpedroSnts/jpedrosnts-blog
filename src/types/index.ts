export type textLang = { "pt-BR": string; "en-US": string };

export interface DisplayData {
  navbar: {
    "pt-BR": {
      items: string[];
      links: string[];
    };
    "en-US": {
      items: string[];
      links: string[];
    };
  };
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
