import React from "react";
import Layout from "../layout/Layout";
import "../style/pajakKendaraan.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function PajakKendaraan() {
  return (
    <div>
      <Layout>
        <div className="indexKendaraan">
          <div className="breadcrumbs">
            <Link to="/menu"> Menu </Link>
            <NavigateNextIcon />
            <Link to="/menu/pajak"> Pajak </Link>
            <NavigateNextIcon />
            Pajak Kendaraan
          </div>
          <div className="containing">
            <div className="judul">
              <h1>Judul Bikin di Sini</h1>
            </div>
            <div className="vidio">
                
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus. Curabitur
                tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
                a convallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat
                ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus
                lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
                amet magna non ligula vestibulum eleifend. Nulla varius volutpat
                turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed
                nec ante dictum sem condimentum ullamcorper quis venenatis nisi.
                Proin vitae facilisis nisi, ac posuere leo. Nam pulvinar blandit
                velit, id condimentum diam faucibus at. Aliquam lacus nisi,
                sollicitudin at nisi nec, fermentum congue felis. Quisque mauris
                dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae
                mauris nec ante pretium finibus. Donec nisl{" "}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default PajakKendaraan;
