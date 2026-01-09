"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScrambleText from "../scrambleText";

export default function Intro() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const hasSeen = sessionStorage.getItem("hasSeenH1Animate");

    if (!hasSeen) {
      setShowIntro(true);
      sessionStorage.setItem("hasSeenH1Animate", "true");
    }
  }, []);

  if (!mounted) return null;
  if (!showIntro) return null;

  return (
    <div>
      {showIntro && (
        <motion.div
          className={`fixed inset-0 z-45 bg-[#282828] flex items-center justify-center`}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
        >
          <div
            className={`inset-0 z-45 text-white flex flex-col items-center justify-center`}
          >
            <ScrambleText
              text="PIERRE DOK"
              trigger="auto"
              className="text-[15px] desktop:text-[20px]"
            />
            <ScrambleText
              text="FULLSTACK DEVELOPER"
              trigger="auto"
              className="text-[15px] desktop:text-[20px]"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
