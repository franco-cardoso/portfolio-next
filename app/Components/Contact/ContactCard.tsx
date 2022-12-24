import { ReactNode, useContext } from "react";
import { GlobalContext } from "../../../pages/contact";
import { useTranslation } from "react-i18next";

type PropTypes = {
    title: string;
    subtitle: string;
    icon: ReactNode;
};

const ContactCard = (props: PropTypes) => {
    const gContext = useContext(GlobalContext);
    const { t } = useTranslation();

    return (
        <div
            className="contactCard"
            onClick={() => {
                navigator.clipboard.writeText(props.subtitle);
                gContext.sendNotif(t("notif.clipboard"));
            }}
        >
            {props.icon}
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    );
};

export default ContactCard;
