import {
  Admin,
  Resource,
  Layout,
  CustomRoutes,
  useTranslate,
  ListGuesser,
  EditGuesser,
} from "react-admin";

import restProvider from "ra-data-simple-rest";
import {
  CreateMateriel,
  EditMateriel,
  ListMateriel,
  CreatePersonel,
  EditPersonel,
  ListPersonel,
  CreateEtablissement,
  EditEtablissement,
  ListEtablissement,
  CreateCentre,
  EditCentre,
  ListCentres,
  CreateEquipement,
  EditEquipement,
  ListEquipement,
  CreateUser,
  EditUser,
  FilterUser,
  ListUsers,
} from "./components/index";
import {
  auth,
  CustomLogin,
  Dashboard,
  Route,
  IntlProvider,
  MyAppBar,
  polyglotI18nProvider,
  frenchMessages,
  arabicMessages,
} from "./collect";

import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaBoxesPacking } from "react-icons/fa6";
import { MainMenu } from "./MainMenu";
import ListBesoin from "./components/besoins/ListBesoin";
import CreateBesoin from "./components/besoins/CreateBesoin";
import EditBesoin from "./components/besoins/EditBesoin";
import Index from "./landingPage";
import Hero from "./landingPage/Hero/Hero";
import Navbar from "./landingPage/Navbar";
import ListGenreMateriel, {
  GenrematerielList,
} from "./components/genreMateriel/ListGenreMateriel";
import { GenrematerielEdit } from "./components/genreMateriel/EditGenreMateriel";
import CreategenreMateriel from "./components/genreMateriel/CreategenreMateriel";

const messages = {
  fr: frenchMessages,
  ar: arabicMessages,
};

const i18nProvider = polyglotI18nProvider(
  (locale) => (locale === "fr" ? frenchMessages : arabicMessages),
  "ar", // Default locale
  [
    { locale: "ar", name: "العربية" },
    { locale: "fr", name: "Français" },
  ]
);

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

function App(props) {
  const translate = useTranslate();
  return (
    <IntlProvider locale="fr" messages={messages.ar}>
      <Admin
        authProvider={auth}
        {...props}
        dataProvider={restProvider("https://api-inventaire-x8sq.onrender.com")}
        loginPage={CustomLogin}
        dashboard={Dashboard}
        i18nProvider={i18nProvider}
        layout={MyLayout}
        menu={MainMenu}
      >
        <CustomRoutes noLayout>
          {/* <Route path="/LandingPage" element={<Navbar />} /> */}
          <Route path="/LandingPage" element={<Hero />} />
        </CustomRoutes>
        <Resource
          name="users"
          list={ListUsers}
          create={CreateUser}
          edit={EditUser}
          icon={FaUser}
          options={{ label: translate("ra.resources.users.name") }}
        />

        <Resource
          name="personnels"
          list={ListPersonel}
          create={CreatePersonel}
          edit={EditPersonel}
          options={{ label: translate("ra.resources.personnels.name") }}
          icon={FaUsers}
        />
        <Resource
          name="etablissements"
          list={ListEtablissement}
          create={CreateEtablissement}
          edit={EditEtablissement}
          options={{ label: translate("ra.resources.etablissements.name") }}
          icon={FaBuilding}
        />
        <Resource
          name="centres"
          list={ListCentres}
          create={CreateCentre}
          edit={EditCentre}
          icon={MdMapsHomeWork}
          options={{ label: translate("ra.resources.centres.name") }}
        />
        <Resource
          name="materiels"
          list={ListMateriel}
          create={CreateMateriel}
          edit={EditMateriel}
          options={{ label: translate("ra.resources.materiels.name") }}
          icon={FaBoxesStacked}
        />
        <Resource
          name="genreMateriel"
          list={GenrematerielList}
          create={CreategenreMateriel}
          edit={GenrematerielEdit}
          options={{ label: translate("ra.resources.materiels.name") }}
          icon={FaBoxesStacked}
        />
        <Resource
          name="equipements"
          list={ListEquipement}
          create={CreateEquipement}
          edit={EditEquipement}
          options={{ label: translate("ra.resources.equipements.name") }}
          icon={FaBoxesPacking}
        />
        <Resource
          name="besoins"
          list={ListBesoin}
          create={CreateBesoin}
          edit={EditBesoin}
          options={{ label: translate("ra.resources.equipements.name") }}
          icon={FaBoxesPacking}
        />
      </Admin>
    </IntlProvider>
  );
}

export default App;
