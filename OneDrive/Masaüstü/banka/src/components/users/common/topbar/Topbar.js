import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import style from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <section className={style.section}>
      <ButtonGroup className={style.section__buttonGroup}>
        <Button>Şube ve ATM'ler</Button>
        <Button>Ürün ve Hizmet Ücretleri</Button>
        <Button>EN</Button>
      </ButtonGroup>
    </section>
  );
};

export default Topbar;
