import { auth } from "./authProvider";
import CustomLogin from "./login/CustomLogin";
import Dashboard from "./components/Dashboard/Dashboard";

import { Route } from "react-router-dom";

import { IntlProvider } from "react-intl";
import { MyAppBar } from "./MyAppBar";

import polyglotI18nProvider from "ra-i18n-polyglot";

import frenchMessages from "./translations/ra-language-french";
import arabicMessages from "./translations/ra-language-arabic";

export {
  auth,
  CustomLogin,
  Dashboard,
  Route,
  IntlProvider,
  MyAppBar,
  polyglotI18nProvider,
  frenchMessages,
  arabicMessages,
};
