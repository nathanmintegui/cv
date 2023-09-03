import { createContext, useState } from "react";

export const LanguageContext = createContext("");

const Context = ({ children }) => {
  const [language, setLanguage] = useState("English");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Context;
