import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FormGroup, Input, Label } from "reactstrap";
import "../style.css";

const UserEntries = () => {
  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicAnapara">
            <Form.Label>Kredi Tutarı</Form.Label>
            <Form.Control placeholder="             TL" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicTaksit">
            <Form.Label>Vade</Form.Label>

            <Form.Select>
              <option>Vade miktarını seçiniz</option>
              <option>3 AY</option>
              <option>6 AY</option>
              <option>9 AY</option>
              <option>12 AY</option>
              <option>15 AY</option>
              <option>18 AY</option>
              <option>21 AY</option>
              <option>24 AY</option>
              <option>36 AY</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Button className="mb-3" variant="primary" type="submit">
            Hesapla
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicKar">
            <Form.Label>Kâr Oranı (%)</Form.Label>
            <Form.Control type="number" placeholder="Kâr oranı giriniz.%2.28" />
          </Form.Group>
        </Col>

        {/* <Form.Group className="mb-3" controlId="formBasicTaksitAraligi">
          <Form.Label>Taksit Aralığı Seçimi</Form.Label>

          <Form.Select>
            <option>Taksit aralığı seçiniz</option>
            <option>Haftalık</option>
            <option>Aylık</option>
            <option>Yıllık</option>
          </Form.Select>
        </Form.Group> */}
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicVergi">
            <Form.Label>Vergi Oranı</Form.Label>

            <Form.Select>
              <option>Vergi oranı seçiniz</option>
              <option>KKDF</option>
              <option>BSMV</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Button className="mb-3" variant="primary" type="submit">
            Ödeme Planı
          </Button>
        </Col>
      </Row>

      <Col xs={12} md={4} lg={3}>
        <Button variant="primary" type="submit">
          Hemen Başvur
        </Button>
      </Col>
    </Form>
  );
};

export default UserEntries;
