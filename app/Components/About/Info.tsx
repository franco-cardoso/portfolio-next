import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import InfoHeader from "./InfoHeader";


const Info = () => {
    const infoRef = useRef(null);
    const infoInView = useInView(infoRef);
    const { t } = useTranslation();

    return (
        <section className="info">
            <div className="infoWrapper" ref={infoRef}>
                <AnimatePresence>
                    {infoInView && (
                        <>
                            <InfoHeader />
                            <motion.div
                                className="infoText"
                                initial="hidden"
                                animate="visible"
                                variants={textVar}
                                exit={{ opacity: 0 }}
                            >
                                <p>
                                    <Trans i18nKey="myKey" defaults={t("about.info.p1") as string} components={{ b: <b /> }} />
                                </p>
                                <p>{t("about.info.building")}</p>
                                <p>{t("about.info.graduated")}</p>

                                <div className="certificate" ref={infoRef}>
                                    <img
                                        src="https://raw.githubusercontent.com/franco-cardoso/portfolio/main/src/Assets/img/cert.webp"
                                        alt=""
                                        width="280px"
                                        height="190px"
                                    />
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Info;

const textVar = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1.8 } },
};
