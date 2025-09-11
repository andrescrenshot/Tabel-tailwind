import React from "react";
import { Table } from "react-bootstrap";

const Tabeltailwind = () => {
  const data2 = [
    {
      id: 1,
      nama_lengkap: "Andre cryoculus",
      nama_belakang: "Musume",
      username: "Andre",
    },
    {
      id: 2,
      nama_lengkap: "Ambareno Hayha",
      nama_belakang: "Hayha",
      username: "Moreno",
    },
    {
      id: 3,
      nama_lengkap: "Ayaas Celestial",
      nama_belakang: "Celestial",
      username: "Ayyas",
    },
  ];
  return (
    <div className="grid grid-cols-3 -gap-4">
      <div style={{ width: "350px", marginLeft: "10%" }}>
        <h5>Tabel 1</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full_name</th>
              <th>last_name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div style={{ width: "350px", marginLeft: "10%" }}>
        <h5>Tabel 9</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full_name</th>
              <th>last_name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div style={{ width: "350px", marginLeft: "10%" }}>
        <h5>Tabel </h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full_name</th>
              <th>last_name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div style={{ width: "350px", marginLeft: "10%" }}>
        <h5>Tabel 4</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full_name</th>
              <th>last_name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div style={{ width: "350px", marginLeft: "10%" }}>
        <h5>Tabel 5</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full_name</th>
              <th>last_name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Tabeltailwind;
