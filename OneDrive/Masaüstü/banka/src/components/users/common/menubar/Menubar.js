import React from "react";
import { Button, Nav } from "react-bootstrap";
import logo from "../../../../assets/img/logo/garantilogo.svg";
import { BiSearchAlt } from "react-icons/bi";
import style from "./Menubar.module.scss";

const Menubar = () => {
  return (
    <>
      <Nav
        // activeKey="/home"
        // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className={style.navContainer}
      >
        <Nav.Item className={style.navContainer__navItem1}>
          <Nav.Item>
            <img src={logo} className={style.navContainer__navItem1__logo} />
          </Nav.Item>
          <Nav.Item className={style.navContainer__navItem1__link1}>
            <Nav.Link className={style.navContainer__navItem1__link1}>
              KENDİM İÇİN
            </Nav.Link>
            <Nav.Link className={style.navContainer__navItem1__link1}>
              İŞİM İÇİN
            </Nav.Link>
          </Nav.Item>
        </Nav.Item>

        <Nav.Item className={style.navContainer__navItem2}>
          <Nav.Item className={style.navContainer__navItem2__link2}>
            <Nav.Link className={style.navContainer__navItem2__link2}>
              <BiSearchAlt className={style.navContainer__navItem2__icon} />
              Arama Yap
            </Nav.Link>
            <Nav.Link className={style.navContainer__navItem2__link2}>
              Müşteri ol
            </Nav.Link>
          </Nav.Item>

          <Button className={style.navContainer__navItem__button}>
            Giriş Yap
          </Button>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Menubar;
