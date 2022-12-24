import { useTranslation } from "react-i18next";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import ContactCard from "./ContactCard";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className="contactSection">
            <div className="contactContentWrapper">
                <h1>{t("contact.contact")}</h1>
                <div className="contacts">
                    <ContactCard
                        title={t("contact.email")}
                        subtitle="francolkk788@gmail.com"
                        icon={<MdEmail size={60} />}
                    />
                    <ContactCard
                        title={t("contact.phone")}
                        subtitle="+54 9 3446 66-7820"
                        icon={<MdPhone size={60} />}
                    />
                </div>
                <div className="contacts">
                    <a href="https://www.linkedin.com/in/franco-cardoso-854442241/" rel="noreferrer" target={"_blank"}>
                        <ContactCard title="LinkedIn" subtitle="" icon={<IoLogoLinkedin size={60} />} />
                    </a>
                    <a href="https://github.com/franco-cardoso" rel="noreferrer" target={"_blank"}>
                        <ContactCard title="GitHub" subtitle="" icon={<IoLogoGithub size={60} />} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
