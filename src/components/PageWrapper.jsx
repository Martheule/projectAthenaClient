import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const SimplePageWrapper = ({ children, pageKey }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🔁 Page Content Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pageKey}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* 🔵 Overlay Klein Blue Circle Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`overlay-${pageKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
        >
          {/* 🔵 Circle fills screen */}
          <motion.div
            initial={{ scale: 0, borderRadius: "50%" }}
            animate={{ scale: 0 }}
            exit={{
              scale: 30, // expand to fill screen
              borderRadius: "0%",
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            }}
            className="absolute bottom-0 left-1/2 w-32 h-32 -translate-x-1/2 translate-y-16 origin-bottom"
            style={{ backgroundColor: "#002FA7" }}
          />

          {/* 🔵 Collapse upward (curtain effect) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{
              scaleY: 1,
              transition: {
                delay: 0.5,
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-0 left-0 w-full h-full origin-bottom"
            style={{ backgroundColor: "#002FA7" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

SimplePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pageKey: PropTypes.string.isRequired,
};

export default SimplePageWrapper;
