"use client"
import { motion } from "framer-motion";

function Loading () {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-center"
      >
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-700">Loading...</p>
      </motion.div>
    </div>
  );
};

export default Loading;