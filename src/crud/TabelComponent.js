import Table from 'react-bootstrap/Table';
import React from 'react'

const TabelComponent = ({ datas , editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((data, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{data.nama}</td>
            <td>{data.deskripsi}</td>
            <td>{data.harga}</td>
            <td>
                <button className="btn btn-warning " onClick={() => editData(data.id)}>Edit</button>
                {' '}
                <button className="btn btn-danger" onClick={() => hapusData(data.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TabelComponent;
