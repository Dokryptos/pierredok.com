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
    <nav className="fixed top-0 left-0 bg-white  uppercase flex flex-col font-normal font-ppMontreal w-full">
      <Grid className="items-start pt-5 pl-4 pr-4">
        <Link href="/" className="col-start-1 col-span-2 mb-4 flex flex-col">
          <ScrambleText text="PIERRE DOK" trigger="hover" />
          <ScrambleText text="FULLSTACK DEVELOPER" trigger="hover" />
        </Link>
        <div           className="col-start-1 lg:col-start-3"
>
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
        </div>
        <div className="col-start-1 lg:row-start-2">
          <button className="flex mt-6 lg:mt-2 cursor-pointer">
            <Image src={darkModeButton} alt="Dark mode" className="mr-2 " />
            <span className="text-[6px]">Dark mode</span>
          </button>
        </div>
      </Grid>
    </nav>
  );
}
