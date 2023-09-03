import { createContext, useState } from "react";

export const LanguageContext = createContext("");

interface IProps {
  children: React.ReactNode;
}

const Context: React.FC<IProps> = ({ children }: IProps) => {
  const [language, setLanguage] = useState("English");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Context;
