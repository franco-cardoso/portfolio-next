import { motion } from "framer-motion";
import useWindowSize from "../Utility/useWindowSize";
import MobileMenu from "./MobileMenu";
import NavbarButtons from "./NavbarButtons";
import SocialMedia from "./SocialMedia";
import i18n from "../../i18n/i18n";
import {useTranslation} from "react-i18next"
import { Btn } from "./NavbarButtons";

const Navbar = () => {
  const { width } = useWindowSize();
  const { t } = useTranslation();

  return (
    <>
      {width >= 1024 && (
        <motion.nav
          style={{ position: "relative" }}
          initial={{ left: -600 }}
          animate={{ left: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="navbarContainer">
            <div className="somethingContainer">
              <Btn onClick={() => i18n.changeLanguage("en")}>en</Btn>
              <Btn onClick={() => i18n.changeLanguage("es")}>es</Btn>
            </div>

            <div className="navbarBtnsContainer">
              <NavbarButtons
                btns={[
                  { text: t("navbar.home"), path: "/home" },
                  { text: t("navbar.webapps"), path: "/webapps" },
                  { text: t("navbar.contact"), path: "/contact" },
                ]}
              />
            </div>
                
            <SocialMedia />
          </div>
        </motion.nav>
      )}
      {width < 1024 && <MobileMenu />}
    </>
  );
};

export default Navbar;
