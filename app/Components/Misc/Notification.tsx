import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const Notification = ({ notif, sendNotif }: { notif: string; sendNotif: Function }) => {
    useEffect(() => {
        if (!notif) return;
        setTimeout(() => {
            sendNotif("");
        }, 2000);
    }, [notif]);

    return (
        <AnimatePresence>
            {notif && (
                <motion.div exit={{ y: -80 }} initial={{ y: -80 }} animate={{ y: 0 }} className="notif">
                    <div>{notif}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
