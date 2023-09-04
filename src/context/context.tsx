import { useState } from "react";

import { LANGUAGES, LanguageContext } from "./languageContext";

interface IContextProps {
  children: React.ReactNode;
}

const Context: React.FC<IContextProps> = ({ children }: IContextProps) => {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.ENGLISH);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Context;
