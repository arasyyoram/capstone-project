import Layout from "../layout/Layout";
import "../style/kalkulatorPajak.css";
import PajakKendaraan from "../assets/PajakKendaraan.png";
import Button from "@mui/material/Button";
import { useState } from "react";

function KalkulatorPajak() {
  const [penghasilan, setPenghasilan] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [tanggungan, setTanggungan] = useState(0);
  const [hasil, setHasil] = useState(0);
  const [omzetValue, setOmzetValue] = useState(0);
  const [omzetResult, setOmzetResult] = useState(0);

  const handleTanggungan = (e) => {
    const jenis = e.target.value;
    switch (jenis) {
      case "TK/0":
        setTanggungan(0);
        break;
      case "K/0":
        setTanggungan(4500000);
        break;
      case "K/1":
        setTanggungan(9000000);
        break;
      case "K/2":
        setTanggungan(13500000);
        break;
      case "K/3":
        setTanggungan(18000000);
        break;
      default:
        setTanggungan(0);
        break;
    }
  };

  const hitungHasil = () => {
    let gajiBersih = parseInt(penghasilan) + parseInt(bonus);
    let tanggunganAkhir = parseInt(tanggungan) + 54000000;
    let total = gajiBersih - tanggunganAkhir;

    if (gajiBersih < 54000000) {
      setHasil(0);
    }
    // console.log(gajiBersih);
    // console.log(setHasil);

    if (total <= 50000000) {
      setHasil(total * 0.05);
    } else if (total <= 300000000) {
      setHasil((total - 50000000) * 0.15 + 2500000);
    } else if (total <= 750000000) {
      setHasil((total - 300000000) * 0.25 + 25000000 + 37500000);
    } else {
      setHasil((total - 750000000) * 0.3 + 25000000 + 37500000 + 125000000);
    }
  };

  const handleOmzet = () => {
    if (omzetValue < 4800000000) {
      setOmzetResult(omzetValue * 0.5);
    }
  };

  return (
    <div>
      <Layout>
        <div className="indexPajak">
          <div className="textPajak">
            <h1> Kalkulator Pajak </h1>
            <p>
              {" "}
              Hitung kisaran pajak yang harus kamu bayarkan di Kalkulator Pajak!{" "}
            </p>
          </div>

          <div className="containing">
            <div className="box">
              <div className="karyawanSection">
                <h1>Pajak Karyawan</h1>
                <label>Penghasilan dalam Setahun :</label>
                <input
                  id="penghasilan"
                  type="number"
                  onChange={(e) => setPenghasilan(e.target.value)}
                />
                <label>Bonus THR dan sebagainya :</label>
                <input
                  id="thr"
                  type="number"
                  onChange={(e) => setBonus(e.target.value)}
                />
                <label>Status Perkawinan/Tanggungan</label>
                <select onChange={handleTanggungan}>
                  <option>TK/0</option>
                  <option>K/0</option>
                  <option>K/1</option>
                  <option>K/2</option>
                  <option>K/3</option>
                </select>
                <div>
                  <Button variant="contained" onClick={hitungHasil}>
                    Jumlah
                  </Button>
                </div>
                <div>
                  <p>Jumlah kisaran pajak yang harus dibayar :</p>
                  <div className="result">Rp. {hasil}</div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="umkmSection">
                <h1>Pajak UMKM</h1>
                <label>Omzet penghasilan dalam setahun :</label>
                <input
                  type="number"
                  onChange={(e) => setOmzetValue(e.target.value)}
                />
                <div>
                  <Button variant="contained" onClick={handleOmzet}>
                    Jumlah
                  </Button>
                </div>
                <div>
                  <p>Jumlah kisaran pajak yang harus dibayar:</p>
                  <div className="result">Rp. {omzetResult}</div>
                </div>
              </div>
            </div>

            <div
              className="box"
              style={{ backgroundImage: `url(${PajakKendaraan})` }}
            >
              <div className="kendaraanSection">
                <h1>Pajak Kendaraan</h1>
                <p>
                  Pajak kendaraan cenderung memiliki nilai pasti yang tidak
                  terpengaruh pada besaran pendapatan pengguna dan sudah
                  ditentukan oleh pihak samsat
                </p>
                <div>
                  <Button variant="contained">
                    <a href="https://e-samsat.id/" target="_blank">
                      Kunjungi E-Samsat
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default KalkulatorPajak;
