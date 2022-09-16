import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Card, Col, Container, Row } from "react-bootstrap/esm";
import { useStore } from "../store";
import { Form } from "formik";

const Calculate = () => {
 const { userState, dispatchUser, odemeState, dispatchOdeme } = useStore();
 const { krediTutari, taksitSayisi, karOrani, taksitAraligi, vergiOrani } =
   userState;

  const initialValues = {
    krediTutari: krediTutari,
    taksitSayisi: taksitSayisi,
    karOrani: karOrani,
    taksitAraligi: taksitAraligi,
    vergiOrani: vergiOrani,
  };

  const validationSchema = Yup.object({
    krediTutari: Yup.string().required("Lütfen firma adı giriniz."),
    taksitSayisi: Yup.string().required("Lütfen yetkili kişi giriniz."),
    karOrani: Yup.string().email().required("Lütfen email adresinizi giriniz."),
    taksitAraligi: Yup.string().required("Lütfen telefon numaranızı giriniz."),
    //  .test(
    //    "includes_",
    //    "Please enter a valid phone number",
    //    (value) => value && !value.includes("_")
    //  ),
    vergiOrani: Yup.string().required(
      "Lütfen iletişime geçmek istediğiniz konuyu giriniz."
    ),
  });

  const onSubmit = (values) => {
    console.log(values);
    //    setLoading(true);
    //    setLoading(false);
    //    toast("Teklifiniz gönderildi.");
    //    navigate("/projeler");
    //   // .catch(err => {
    //    //   setLoading(false);
    //    //   toast("Teklifiniz gönderilemedi.Bilgilerinizi kontrol ediniz.")
    //    // });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card>
            <Card.Body>
              <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Kredi Tutari</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    {...formik.getFieldProps("firstName")}
                    isInvalid={!!formik.errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.krediTutari}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Kar oranı</Form.Label>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("karOrani")}
                    isInvalid={!!formik.errors.karOrani}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.karOrani}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Taksit aralığı</Form.Label>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("taksitAraligi")}
                    isInvalid={!!formik.errors.taksitAraligi}
                  />
                  <Form.Select>
                    <option>Aylık</option>
                    <option>Haftalık</option>
                    <option>Yıllık</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.taksitAraligi}
                  </Form.Control.Feedback>
                </Form.Group>

                <hr />

                <Form.Group className="mb-3">
                  <Form.Label>Taksit sayısı</Form.Label>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("taksitSayisi")}
                    isInvalid={!!formik.errors.taksitSayisi}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.taksitSayisi}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>VERGİ ORANI</Form.Label>
                  <Form.Control
                    type="text"
                    {...formik.getFieldProps("vergiOrani")}
                    isInvalid={!!formik.errors.vergiOrani}
                  />
                  <Form.Select>
                    <option>bsmv</option>
                    <option>kkdf</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.vergiOrani}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                  GÖNDER
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculate;
