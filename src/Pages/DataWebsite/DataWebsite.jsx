import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DataWebsite.css";

export default class DataWebsite extends Component {
  render() {
    const {status, deleteData} = this.props;
    return (
      <div className="dbwb-container">
        <div className="dbwb-title">
          <h2>Data Website</h2>
          <button>
            <Link to="/" className="dbwb-link-reset">
              Tambah Data
            </Link>
          </button>
        </div>
        <table border="1" cellSpacing="0" cellPadding="5">
          <tbody align="center" valign="top">
            <tr>
              <td>No</td>
              <td>Kelas - Nama Mahasiswa</td>
              <td>Nim Mahasiswa</td>
              <td>Url Website</td>
              <td>Aksi</td>
            </tr>
            {this.props.websites.map((website, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{website.profile}</td>
                <td>{website.nim}</td>
                <td>{website.url}</td>
                <td>
                  <button onClick={()=> status(website.id)}><Link to='/' className='dbwb-link-reset'>Edit</Link></button>
                  <button onClick={()=> deleteData(website.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
