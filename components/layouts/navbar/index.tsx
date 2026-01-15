"use client";

import Grid from "@/components/ui/grid";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ScrambleText from "@/components/animation/scrambleText";
import NavItem from "./NavItem";
import darkModeButton from "@/public/darkModeButton.svg";

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 bg-white pt-5 pl-4 uppercase flex flex-col font-normal font-ppMontreal w-full">
      <Grid className="">
        <Link href="/" className="col-start-1 col-span-2 mb-4 flex flex-col">
          <ScrambleText text="PIERRE DOK" trigger="hover" />
          <ScrambleText text="FULLSTACK DEVELOPER" trigger="hover" />
        </Link>
        <NavItem
          label="Works"
          href="/"
          slug="works"
          className="col-start-1 lg:col-start-3"
          hovered={hovered}
          onHover={setHovered}
        />
        <NavItem
          label="About"
          href="/about"
          slug="about"
          className="col-start-1 lg:col-start-3"
          hovered={hovered}
          onHover={setHovered}
        />
        <div className="col-start-1">
          <button className="flex mt-6 cursor-pointer">
            <Image src={darkModeButton} alt="Dark mode" className="mr-2 " />
            <span className="text-[6px]">Dark mode</span>
          </button>
        </div>
      </Grid>
    </nav>
  );
}
