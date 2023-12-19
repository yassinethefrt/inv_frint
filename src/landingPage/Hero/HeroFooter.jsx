import { useTranslation } from "react-i18next";
import { logo } from "../../assets/index";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const HeroFooter = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          <img src={logo} className="h-[25px] items-center" />
        </div>

        <div className="max-[780px]:col-span-2">
          <h3 className="text-2xl font-bold ">{t("contactus")}</h3>
          <h3 className="py-2 text-[#6D737A]">{t("call")}: +123 400 123</h3>
          <h3 className="py-2 text-[#363A3D]">
            {t("email")}: example@mail.com
          </h3>
        </div>

        <div className="max-[780px]:col-span-2">
          <h3 className="text-2xl font-bold">{t("Subscribe")}</h3>

          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded"
              placeholder="Email here"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
