import React from "react";

import { hero } from "../../assets/index";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="px-4">
      <div className="w-full bg-white py-24">
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
          <div className="flex flex-col justify-start gap-4">
            <p className="py-2 text-2xl text-[#20B486] font-medium">
              {t("title")}
            </p>
            <h1 className="md:leading-[72px] py-12 md:text-6xl text-5xl font-semibold">
              {t("acces")} <span className="text-[#20B486]">{t("stocks")}</span>{" "}
              <br /> {t("et")}
              <span className="text-[#20B486]"> {t("personnels")}</span> <br />
              {t("etplus")}
              {/* {t("hero")} */}
            </h1>

            {/* <button className="px-3 py-5 rounded-md bg-[#20B486] text-white font-bold">
              Sign Up For Free
            </button> */}
          </div>

          <img src={hero} className="md:order-last  order-first" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
