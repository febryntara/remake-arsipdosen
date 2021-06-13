import React, { Component } from "react";
import "../Global-Component/GlobalComp.css";
import { Link } from "react-router-dom";

export default class FormComp extends Component {
  render() {
    const {handleSubmit, handleChange, profile, nim, url, status, statusAbs} = this.props;
    return (
      <div className="container">
        <div className="box-content">
          <p className="box-title">http://arsipdosen.com</p>
          <button
            onClick={() => alert("Inputkan kelas - Nama - Nim & Url Website")}
          >
            Cara Isi Form
          </button>
          <h2>{status ? 'Pendaftaran Alamat Website' : 'Pengeditan Alamat Website'}</h2>
          <table className="core-content">
            <tbody align="justify" valign="top">
              <tr>
                <td>
                  <label htmlFor="nama">Kelas & Nama Mahasiswa</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="profile"
                    id="nama"
                    value={profile}
                    onChange={(event) => handleChange(event)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="nim">Nim</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="nim"
                    id="nim"
                    value={nim}
                    onChange={(event) => handleChange(event)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="website">Url Website</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="url"
                    id="website"
                    value={url}
                    onChange={(event) => handleChange(event)}
                  />
                  <p>contoh ▶▶▶ http://mediakita.byethost9.com</p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <button type="submit" onClick={handleSubmit}>
            Simpan
          </button>
          <span> </span>
          <button onClick={statusAbs}>Batal</button>
        </div>
        <button>
          <Link to="data-website">Data Pendaftar</Link>
        </button>
      </div>
    );
  }
}
