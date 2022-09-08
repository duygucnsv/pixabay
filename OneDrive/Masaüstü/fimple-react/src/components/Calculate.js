import React from "react";
import { useStore } from "../context/FimpleContext";

const Calculate = () => {
  const {
    setAnapara,
    setTaksitSayisi,
    setKarOrani,
    setTaksitAraligiSecimi,
    setvergiOrani,
  } = useStore();

  const kar = Math.floor();
  const handleClick = () => {};

  return (
    <div>
      <button onClick={handleClick}>HESAPLA</button>
    </div>
  );
};

export default Calculate;
