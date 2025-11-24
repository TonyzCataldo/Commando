"use client";

import { useEffect, useState } from "react";

const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onToggle = () => setIsMenuOpen((v) => !v);
    window.addEventListener("mobile-menu:toggle", onToggle);
    return () => window.removeEventListener("mobile-menu:toggle", onToggle);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setIsMenuOpen(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { isMenuOpen };
};

export default useMobileMenu;
