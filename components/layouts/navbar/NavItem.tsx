"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import arrowOrange from "@/public/arrowOrange.svg";

type NavItemProps = {
  label: string;
  href: string;
  slug: string;
  onHover: (slug: string | null) => void;
  hovered: string | null;
};

export default function NavItem({
  label,
  href,
  slug,
  hovered,
  onHover,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href === "/" && pathname === "/works");
  const isVisible = hovered === slug || isActive;

  return (
    <Link
      href={href}
      className="flex items-center"
      onMouseEnter={() => onHover(slug)}
      onMouseLeave={() => onHover(null)}
    >
      <AnimatePresence>
        <motion.div
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : -10,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mr-2 w-4"
        >
          <Image src={arrowOrange} alt="Arrow" />
        </motion.div>
      </AnimatePresence>

      <motion.span
        animate={{ x: isVisible ? 10 : -23 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.span>
    </Link>
  );
}
