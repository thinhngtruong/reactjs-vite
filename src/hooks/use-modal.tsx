import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggle = () => {
    setIsShowing(!isShowing);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if(!body) return;
    if(isShowing) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  })

  return {
    isShowing,
    toggle,
    modalContent,
    setModalContent
  }
};
