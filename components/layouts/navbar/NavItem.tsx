"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import arrowOrange from "@/public/arrowOrange.svg";
import { useEffect, useState } from "react";

type NavItemProps = {
  label: string;
  href: string;
  slug: string;
  onHover: (slug: string | null) => void;
  hovered: string | null;
  className?: string;
};

export default function NavItem({
  label,
  href,
  slug,
  hovered,
  onHover,
  className = "",
}: NavItemProps) {
  const pathname = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);
  const isActive = pathname === href || (href === "/" && pathname === "/works");
  const isHovered = hovered === slug;

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const showArrow = isDesktop ? isHovered : isActive || isHovered;

  return (
    <Link
      href={href}
      onMouseEnter={() => onHover(slug)}
      onMouseLeave={() => onHover(null)}
      className={`${className} flex items-center relative`}
    >
      <motion.div
        animate={{
          opacity: showArrow ? 1 : 0,
          x: showArrow ? 0 : -20,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mr-2 w-4"
      >
        <div className="lg:hidden">
          {isActive && <Image src={arrowOrange} alt="" />}
        </div>
        <div className="hidden lg:block">
          {isHovered && <Image src={arrowOrange} alt="" />}
        </div>
      </motion.div>

      <motion.span
        animate={{ x: showArrow ? 10 : -23 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.span>
    </Link>
  );
}
