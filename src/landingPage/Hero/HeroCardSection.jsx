import React from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";

const HeroCardSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full bg-[#E9F8F3B2] py-8 px-4">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold text-center">
            {t("service")}
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {/* Card 1 */}
          <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl">
            <img
              src="https://img.freepik.com/vecteurs-libre/recruter-agent-analysant-candidats_74855-4565.jpg?w=1060&t=st=1699712552~exp=1699713152~hmac=883efbbfa5921567f8454f9c5e90baab6a972382bd2e60f907ca5eeeda6-b7721"
              className="h-40 w-full object-cover"
            />
            <div className="p-5 border border-b">
              <h1 className="py-2 truncate">{t("rh")}</h1>
            </div>
            <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
              {t("rh")}
            </div>
          </div>

          {/* Card 2 */}
          <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl">
            <img
              src="https://img.freepik.com/vecteurs-libre/illustration-concept-analyse-donnees_114360-8073.jpg?w=740&t=st=1699712436~exp=1699713036~hmac=639397c415bd6ded5938b5158af3acd3726f1188e64d81d390bad8b38043b4e1"
              className="h-40 w-full object-cover"
            />
            <div className="p-5 border border-b">
              <h1 className="py-2 truncate">{t("Statistiques")}</h1>
            </div>
            <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
              {t("Statistiques")}
            </div>
          </div>

          {/* Card 3 */}
          <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl">
            <img
              src="https://img.freepik.com/vecteurs-libre/personnel-entrepot-uniforme-chargement-boite-colis-verification-du-produit-depuis-entrepot-livraison-logistique-stockage-transport-par-camion-livraison-logistique-industrie-livraison-commerciale_1150-60909.jpg?w=1060&t=st=1699714828~exp=1699715428~hmac=bf90776a0a2321c513d25f3b09bd49a19e044693d28fe019cfdc1400a2988675"
              className="h-40 w-full object-cover"
            />
            <div className="p-5 border border-b">
              <h1 className="py-2 truncate">{t("Materiels")}</h1>
            </div>
            <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
              {t("Materiels")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSection;
