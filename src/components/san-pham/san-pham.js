import React from "react";

import Ten from "./tenSP";
import Gia from "./gia";
import HinhAnh from "./hinh-anh";   

const SanPham = ({ hinh_anh, ten, gia }) => {
    return (
      <>
      <div className="card my-custom-card">
       <HinhAnh src={hinh_anh} />
       <div className="card-body">      
        <Ten ten={ten} />
        <Gia gia={gia} />
       </div>
      </div>
      </>
    );
  };

export default SanPham;