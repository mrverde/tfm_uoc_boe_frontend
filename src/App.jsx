/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.scss";
import "./i18n";

import PageTableBoe from "./pages/PageTableBoe/PageTableBoe";

import { useTranslation } from "react-i18next";

const App = () => {
  const [count, setCount] = useState(0);
  const [lang, setLang] = useState("es");

  const { t, i18n } = useTranslation();

  const changeToSpanish = () => {
    i18n.changeLanguage("es");
    setLang("es");
  };

  const changeToEnglish = () => {
    i18n.changeLanguage("en");
    setLang("en");
  };


  return (
    <div className="app">
      <PageTableBoe />
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>{t("firstParagraph")}</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            {t("buttonText")} {count}
          </button>
        </p>
        <p>{t("secondParagraph")}</p>
        <p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            {t("linkText")}
          </a>
          {" | "}
          <a
            className="app-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            {t("linkText2")}
          </a>
        </p>
        <button onClick={lang === "es" ? changeToEnglish : changeToSpanish}>
          {t("changeLangBtn")}
        </button>
      </header>
    </div>
  );
};

export default App;
