import React, { useState } from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useStore } from "../store";
import { setKarOrani, setKrediTutari, setTaksitAraligi, setTaksitSayisi, setVergiOrani } from "../store/user/userAction";

import "../style.css";

const UserEntries = () => {
  const { userState, dispatchUser, odemeState, dispatchOdeme } = useStore();
  const { krediTutari, taksitSayisi } = userState;
  const [kredi, setKredi] = useState("");

  return (
    <Container
      className="user-entries border border-dark"
      xs={12}
      md={4}
      lg={3}
    >
      <Form>
        <Row>
          <Col md={4}>
            <Form.Group
              className="mb-3"
              controlId="formBasicAnapara"
              name="anapara"
            >
              <Form.Label>Kredi Tutarı</Form.Label>
              <Form.Control
                placeholder="TL"
                type="text"
                value={kredi}
                onChange={(e) => {
                  setKredi(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group
              className="mb-3"
              controlId="formBasicTaksit"
              name="vade"
              value={kredi}
              onChange={(e) => {
                setTaksitSayisi(e.target.value);
              }}
            >
              <Form.Label>Vade</Form.Label>
              <Form.Select>
                <option>Seçiniz</option>
                <option>3</option>
                <option>6</option>
                <option>9</option>
                <option>12</option>
                <option>15</option>
                <option>18</option>
                <option>21</option>
                <option>24</option>
                <option>36</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group
              className="mb-3"
              controlId="formBasicTaksitAraligi"
              value={kredi}
              onChange={(e) => {
                setTaksitAraligi(e.target.value);
              }}
            >
              <Form.Label>Taksit</Form.Label>

              <Form.Select>
                <option>Seçiniz</option>
                <option>Haftalık</option>
                <option>Aylık</option>
                <option>Yıllık</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicKar" name="kar">
              <Form.Label>Kâr Oranı (%)</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                value={kredi}
                onChange={(e) => {
                  setKarOrani(e.target.value);
                }}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group
              className="mb-3"
              controlId="formBasicVergi"
              name="vergi"
              value={kredi}
              onChange={(e) => {
                setVergiOrani(e.target.value);
              }}
            >
              <Form.Label>Vergi Oranı</Form.Label>

              <Form.Select>
                <option>Vergi oranı seçiniz</option>
                <option>KKDF</option>
                <option>BSMV</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicGeriÖdeme">
              <Form.Label>Toplam Geri Ödeme Tutarı</Form.Label>
              <Form.Control placeholder=" TL" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicAylıkTaksit">
              <Form.Label>Aylık Taksit Tutarı</Form.Label>
              <Form.Control placeholder=" TL" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicAylıkToplamVergi">
              <Form.Label>Toplam Vergi Tutarı</Form.Label>
              <Form.Control placeholder=" TL" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Button
              className="mb-3"
              variant="primary"
              type="submit"
              onClick={() => dispatchUser(setKrediTutari(kredi))}
            >
              Hesapla
            </Button>
          </Col>
          <Col md={4}>
            <Button className="mb-3" variant="primary" type="submit">
              Ödeme Planı
            </Button>
          </Col>
        </Row>
        {console.log(krediTutari)}

        {/* <Col xs={12} md={4} lg={3}>
        <Button variant="primary" type="submit">
          Hemen Başvur
        </Button>
      </Col> */}
      </Form>
    </Container>
  );
};

export default UserEntries;
