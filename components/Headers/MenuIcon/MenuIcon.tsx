"use client";

import { Menu } from "lucide-react";

const MenuIcon = () => {
  const toggle = () => {
    window.dispatchEvent(new CustomEvent("mobile-menu:toggle"));
  };

  return (
    <Menu width={30} height={30} color="black" className="cursor-pointer md:hidden" onClick={toggle} />
  );
};

export default MenuIcon;
