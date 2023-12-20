import * as React from "react";
import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";
import SubMenu from "./SubMenu";
import {
  FaBoxesPacking,
  FaBoxesStacked,
  FaBuilding,
  FaCreditCard,
  FaFileInvoice,
  FaFileInvoiceDollar,
  FaUser,
  FaUserTie,
  FaUsers,
} from "react-icons/fa6";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import { MdMapsHomeWork } from "react-icons/md";
import { useTranslation } from "react-i18next";

export const MainMenu = () => {
  const { t, i18n } = useTranslation();
  const permission = "admin";
  return (
    <Menu>
      <Menu.DashboardItem />
      <SubMenu
        primaryText={t("ra.resources.personnels.name")}
        leftIcon={<BookIcon />}
      >
        <>
          <Menu.Item
            to="users"
            primaryText={t("ra.resources.users.name")}
            leftIcon={<FaUser />}
          />
          {/* Add more Menu.Item components for admin here if needed */}
        </>

        <Menu.Item
          to="personnels"
          primaryText={t("ra.resources.personnels.name")}
          leftIcon={<FaUsers />}
        />
      </SubMenu>

      <SubMenu
        primaryText={t("ra.resources.materiels.name")}
        leftIcon={<BookIcon />}
      >
        <Menu.Item
          to="genreMateriel"
          primaryText={t("ra.resources.materiels.fields.categorie_materiel")}
          leftIcon={<FaBoxesStacked />}
        />
        <Menu.Item
          to="materiels"
          primaryText={t("ra.resources.materiels.name")}
          leftIcon={<FaBoxesStacked />}
        />
        <Menu.Item
          to="equipements"
          primaryText={t("ra.resources.equipements.name")}
          leftIcon={<FaBoxesPacking />}
        />
      </SubMenu>
      <SubMenu
        primaryText={t("ra.resources.etablissements.name")}
        leftIcon={<BookIcon />}
      >
        <Menu.Item
          to="etablissements"
          primaryText={t("ra.resources.etablissements.name")}
          leftIcon={<FaBuilding />}
        />
        <Menu.Item
          to="centres"
          primaryText={t("ra.resources.centres.name")}
          leftIcon={<MdMapsHomeWork />}
        />
      </SubMenu>
      <Menu.Item
        to="besoins"
        primaryText={t("ra.resources.besoins.name")}
        leftIcon={<BiSolidMessageRoundedCheck />}
      />
    </Menu>
  );
};
