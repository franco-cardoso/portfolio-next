import { motion, AnimatePresence } from "framer-motion";

const MobileMenuSvg = (props: { showMenu: boolean }) => {
  const { showMenu } = props;

  return (
    <AnimatePresence>
      {!showMenu && (
        <motion.svg
          viewBox="0 0 24 24"
          height="40"
          width="40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          exit={{ pathLength: 0 }}
          transition={{ delay: 0.02, duration: 0.4 }}
        >
          <motion.line
            x1="10%"
            x2="90%"
            y1="3"
            y2="3"
            strokeWidth={2.3}
            stroke="#fff"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{ delay: 0.02, duration: 0.4 }}
          ></motion.line>
          <motion.line
            x1="10%"
            x2="90%"
            y1="8"
            y2="8"
            strokeWidth={2.3}
            stroke="#fff"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{ delay: 0.04, duration: 0.4 }}
          ></motion.line>
          <motion.line
            x1="10%"
            x2="90%"
            y1="13"
            y2="13"
            strokeWidth={2.3}
            stroke="#fff"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            exit={{ pathLength: 0 }}
            transition={{ delay: 0.06, duration: 0.4 }}
          ></motion.line>
        </motion.svg>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuSvg;
