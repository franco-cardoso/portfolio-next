import { useTranslation } from "react-i18next";
import Wbapp from "./Wbapp";

const WebApps = () => {
  const { t } = useTranslation(); 

  return (
    <div className="container">
      <a href="https://premiumbakery.vercel.app/">
        <Wbapp
          img="https://raw.githubusercontent.com/franco-cardoso/portfolio/main/src/Assets/img/wbappbakery.webp"
          title={t("webapps.titleBakery")}
          subTitle={t("webapps.subBakery")}
          desc={t("webapps.descBakery")}
        />
      </a>
    </div>
  );
};

export default WebApps;
