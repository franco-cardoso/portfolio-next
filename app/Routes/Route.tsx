import { motion } from "framer-motion";
import { ReactNode } from "react";

const R = (props: { component: ReactNode }) => {
    return (
        <main>
            <motion.div
                style={{ height: "100%", width: "100%" }}
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -1000, opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                {props.component}
            </motion.div>
        </main>
    );
};

export default R;
