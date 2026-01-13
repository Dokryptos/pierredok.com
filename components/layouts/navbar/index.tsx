"use client";

import Grid from "@/components/ui/grid";
import Link from "next/link";
import arrowOrange from "@/public/arrowOrange.svg";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ScrambleText from "@/components/animation/scrambleText";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <Grid>
      <nav className="fixed top-0 left-0 bg-white pt-5 pl-4 uppercase flex flex-col font-normal font-ppMontreal">
        <Link href="/" className="col-start-1 mb-4 flex flex-col">
          <ScrambleText text="PIERRE DOK" trigger="hover" />
          <ScrambleText text="FULLSTACK DEVELOPER" trigger="hover" />
        </Link>
        <Link
          href="/"
          className="flex pb-[1.5]"
          onMouseEnter={() => setHovered("home")}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            <Image
              src={arrowOrange}
              alt="Logo Pierre Dok"
              className={`${hovered === "home" ? "block " : "hidden x-[-10]"} w-4 mr-2`}
            />
          </AnimatePresence>
          <div>Works</div>
        </Link>
        <Link
          href="/about"
          className="flex"
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
        >
          <Image
            src={arrowOrange}
            alt="Logo Pierre Dok"
            className={`${hovered === "about" ? "block" : "hidden"} ${pathname === "/about" ? "block" : ""} w-4 mr-2`}
          />
          <div>About</div>
        </Link>
      </nav>
    </Grid>
  );
}
