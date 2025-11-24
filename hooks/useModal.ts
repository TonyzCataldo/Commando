"use client";
import { useEffect, useState } from "react";

const useModal = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  useEffect(() => {
    if (modalIsVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalIsVisible]);

  return { modalIsVisible, setModalIsVisible };
};

export default useModal;
