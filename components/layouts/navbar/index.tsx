"use client";

import Grid from "@/components/ui/grid";
import Link from "next/link";
import arrowOrange from "@/public/arrowOrange.svg";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ScrambleText from "@/components/animation/scrambleText";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = (slug: string) => pathname === `/${slug}`;
  console.log(isActive);
  return (
    <Grid>
      <nav className="fixed top-0 left-0 bg-white pt-5 pl-4 uppercase flex flex-col font-normal font-ppMontreal">
        <Link href="/" className="col-start-1 mb-4 flex flex-col">
          <ScrambleText text="PIERRE DOK" trigger="hover" />
          <ScrambleText text="FULLSTACK DEVELOPER" trigger="hover" />
        </Link>
        <NavItem
          label="Works"
          href="/"
          slug="works"
          hovered={hovered}
          onHover={setHovered}
        />
        <NavItem
          label="About"
          href="/about"
          slug="about"
          hovered={hovered}
          onHover={setHovered}
        />
      </nav>
    </Grid>
  );
}
