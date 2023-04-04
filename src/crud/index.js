import React, { Component } from "react";
import FormComponent from "./FormComponent";
import NavbarComponent from "./NavbarComponent";
import TabelComponent from "./TabelComponent";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        datas: [
          ...this.state.datas,
          {
            id: this.state.datas.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const dataselaindipilih = this.state.datas
        .filter((data) => data.id !== this.state.id)
        .map((filterdata) => {
          return filterdata;
        });

        this.setState({
            datas: [
              ...dataselaindipilih,
              {
                id: this.state.datas.length + 1,
                nama: this.state.nama,
                deskripsi: this.state.deskripsi,
                harga: this.state.harga,
              },
            ],
          });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const datadipilih = this.state.datas
      .filter((data) => data.id === id)
      .map((filterdata) => {
        return filterdata;
      });
    this.setState({
      nama: datadipilih[0].nama,
      deskripsi: datadipilih[0].deskripsi,
      harga: datadipilih[0].harga,
      id: datadipilih[0].id,
    });
  };

  hapusData = (id) => {
    const databaru = this.state.datas
      .filter((data) => data.id !== id)
      .map((filterdata) => {
        return filterdata;
      });

      this.setState({
        datas: databaru
      })
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-5">
          <h2>Halo Dunia</h2>
          <TabelComponent datas={this.state.datas} editData={this.editData} hapusData={this.hapusData} />
        </div>
        <div className="container mt-5">
          <FormComponent
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
