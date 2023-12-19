import React from "react";
import Card from "./Card";

import { services } from "../../data/data";
import { useTranslation } from "react-i18next";

const HeroCardSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full bg-[#E9F8F3B2] py-8  px-4">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold text-center">
            nos <span className="text-[#20B486]">Services</span>
          </h1>
        </div>

        <div className="px-5 grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1">
          {services.map((service, i) => (
            <div key={i}>
              <Card service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCardSection;
