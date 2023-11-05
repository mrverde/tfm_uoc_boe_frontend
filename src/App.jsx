/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/es';
import "./App.scss";
import "./i18n";

import PageTableBoe from "./pages/PageTableBoe/PageTableBoe";

import { useTranslation } from "react-i18next";

const App = () => {
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
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        {false &&
        <button onClick={lang === "es" ? changeToEnglish : changeToSpanish}>
          {t("changeLangBtn")}
        </button>}
      <PageTableBoe />
      </LocalizationProvider>
    </div>
  );
};

export default App;
