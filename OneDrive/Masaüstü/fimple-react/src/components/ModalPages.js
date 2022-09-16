import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { tableEntries } from "../config/tableEntries";
import { useStore } from "../store";

const ModalPages = () => {
  // const { userState, dispatchUser, odemeState, dispatchOdeme } = useStore();
  // const { odeme } = odemeState;
  return (
    <Container lg={8}>
      <Row>
        <Table>
          <Col>
            <tbody>
              <th>#</th>
              <th>Installment</th>
              <th>Capital</th>
              <th>Remaning</th>
              <th>Interest</th>
              <th>KKDF</th>
              <th>BSMV</th>
            </tbody>
            {tableEntries.map((entries) => (
              <Table key={entries}>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th>hhdhg</th>
                    <th>dsa</th>
                    <th>dsf</th>
                    <th>Jacob</th>
                    <th>Thornton</th>
                    <th>@fat</th>
                  </tr>
                </tbody>
              </Table>
            ))}
          </Col>
        </Table>
      </Row>
    </Container>
  );
};

export default ModalPages;
