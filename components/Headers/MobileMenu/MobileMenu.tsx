"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onToggle = () => setIsMenuOpen(v => !v);
    window.addEventListener("mobile-menu:toggle", onToggle);
    return () => window.removeEventListener("mobile-menu:toggle", onToggle);
  }, []);

  return (
    <div className={`fixed top-[81px] md:hidden flex flex-col gap-2 w-dvw bg-gray-500 py-2 ${!isMenuOpen ? "-translate-y-[105px]" : ""}`}>
        <p>asdasdasdad</p>
        <p>asdasdasdad</p>
        <p>asdasdasdad</p>
      </div>
  );
};

export default MobileMenu;
