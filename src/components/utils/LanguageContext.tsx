import React, { createContext, useContext, useState } from "react";

// Definimos los idiomas disponibles
type Language = "es" | "en";

// Definimos el contexto
interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

// Creamos el contexto con un valor por defecto
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Proveedor del contexto
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
};
