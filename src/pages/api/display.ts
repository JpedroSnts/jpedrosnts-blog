import type { NextApiRequest, NextApiResponse } from "next";
import { DisplayData } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DisplayData>,
) {
  res.status(200).json({
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
          "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.",
        "en-US":
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    },
  });
}
