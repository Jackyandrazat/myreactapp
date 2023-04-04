import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React from "react";

const FormComponent = ({nama, deskripsi, harga, handleChange, handleSubmit, id}) => {
  return (
    <><h2>{id ? "Edit Data " : "Tambah Data"}</h2><Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicData">
              <Form.Label>Nama Data</Form.Label>
              <Form.Control
                  type="text"
                  name="nama"
                  placeholder="Enter data"
                  value={nama}
                  onChange={(event) => handleChange(event)} />
              <Form.Text className="text-muted">
                  We'll never share your data with anyone else.
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicDeskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                  as="textarea"
                  form="3"
                  name="deskripsi"
                  placeholder="Enter data"
                  value={deskripsi}
                  onChange={(event) => handleChange(event)} />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicHarga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                  type="number"
                  name="harga"
                  placeholder="Enter Harga"
                  value={harga}
                  onChange={(event) => handleChange(event)} />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form></>
  );
};

export default FormComponent;
