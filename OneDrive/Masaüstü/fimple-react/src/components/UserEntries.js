import React, { useRef, useState } from "react";

import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useStore } from "../store";
import {
  setCapital,
  setInstallment,
  setProfitRate,
  setInstallmentInterval,
  setTaxRate,
} from "../store/userEntries/userEntriesAction";

import "../style.css";
import Input from "./Input";
import {
  installments,
  taxRates,
  installmentIntervals,
} from "../config/constants";
import Select from "./Select";
import ModalPages from "./ModalPages";

const UserEntries = () => {
  const inputRef = useRef();

  const { userEntriesState, dispatchUserEntries } = useStore();
  const { capital, installment, profitRate, installmentInterval, taxRate } =
    userEntriesState;
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Input
              ref={inputRef}
              label={`Capital : ${capital}`}
              placeholder="TL"
              value={capital}
              onChange={(e) => {
                dispatchUserEntries(setCapital(e.target.value));
              }}
            />
          </Col>
          <Col md={3}>
            <Select
              label={`Installment : ${installment}`}
              value={installment}
              placeholder="Select"
              options={installments}
              onChange={(e) => {
                dispatchUserEntries(setInstallment(e.target.value));
              }}
            />
          </Col>
          <Col md={3}>
            <Select
              className="mb-3"
              label={`Installment Interval:${installmentInterval}`}
              placeholder="Select"
              value={installmentInterval}
              options={installmentIntervals}
              onChange={(e) => {
                dispatchUserEntries(setInstallmentInterval(e.target.value));
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Input
              label={`Profit Rate (%) : ${profitRate}`}
              placeholder=""
              value={profitRate}
              onChange={(e) => {
                dispatchUserEntries(setProfitRate(e.target.value));
              }}
            />
            
          </Col>

          <Col md={4}>
            <Select
              label={`Tax Rate: ${taxRate}`}
              placeholder="Select"
              options={taxRates}
              value={taxRate}
              onChange={(e) => {
                dispatchUserEntries(setTaxRate(e.target.value));
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Input
              label="Total Refund Amount"
              placeholder="TL"
              value={capital}
              onChange={(e) => {
                dispatchUserEntries(setCapital(e.target.value));
              }}
            />
          </Col>

          <Col md={4}>
            <Input
              label="Monthly Installment Amount"
              placeholder="TL"
              value={capital}
              onChange={(e) => {
                dispatchUserEntries(setCapital(e.target.value));
              }}
            />
          </Col>

          <Col md={4}>
            <Input
              label="Total Tax Amount"
              placeholder="TL"
              value={capital}
              onChange={(e) => {
                dispatchUserEntries(setCapital(e.target.value));
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Button className="mb-3" variant="primary" type="submit">
              Calculate
            </Button>
          </Col>
          <Col md={4}>
            <Button variant="primary" onClick={handleShow} data-toggle="modal">
              Payment Plan
            </Button>
          </Col>
        </Row>
      </Form>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PAYBACK TABLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalPages />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserEntries;
