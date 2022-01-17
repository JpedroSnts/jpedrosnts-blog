import { createContext, useState } from "react";

type lang = "pt-BR" | "en-US";
type theme = "dark" | "light";

export const ContextApp = createContext({
  lang: "en-US" as lang,
  setLang: (lang: lang) => {},
  theme: "dark" as theme,
  setTheme: (theme: theme) => {},
});

interface ContextProviderProps {
  children: JSX.Element;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [lang, setLang] = useState("en-US" as lang);
  const [theme, setTheme] = useState("dark" as theme);
  return (
    <ContextApp.Provider value={{ lang, setLang, theme, setTheme }}>
      {children}
    </ContextApp.Provider>
  );
}
