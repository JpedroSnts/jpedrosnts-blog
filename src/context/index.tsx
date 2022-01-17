import { createContext, useEffect, useState } from "react";

type lang = "pt-BR" | "en-US";
type theme = "dark" | "light";

export const ContextApp = createContext({
  lang: "" as lang,
  setLang: (lang: lang) => {},
  theme: "" as theme,
  setTheme: (theme: theme) => {},
});

interface ContextProviderProps {
  children: JSX.Element;
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [lang, setLang] = useState("en-US" as lang);
  const [theme, setTheme] = useState("dark" as theme);

  useEffect(() => {
    const lsLang = localStorage.getItem("lang");
    const lsTheme = localStorage.getItem("theme");
    if (lsLang === "en-US" || lsLang === "pt-BR") setLang(lsLang);
    if (lsTheme === "dark" || lsTheme === "light") setTheme(lsTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ContextApp.Provider value={{ lang, setLang, theme, setTheme }}>
      {children}
    </ContextApp.Provider>
  );
}
