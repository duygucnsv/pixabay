import React from "react";
import { Container } from "react-bootstrap";

const Table = () => {
  return (
    <Container>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th>Taksit Tutarı</th>
            <th>Ana Para</th>
            <th>Kalan Ana Para</th>
            <th>Kar Oranı</th>
            <th>KKDF</th>
            <th>BSMV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
