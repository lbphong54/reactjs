import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';

import SanPham from "./san-pham";

function Content(){
      const renderSanPham = (products) => {
        return products.map((product) => (
          
           <div className="col location">
            <NavLink to={`/product-detail/${product.id}`} activeClassName="" >
              <SanPham        
                hinh_anh={product.hinh_anh}
                ten={product.ten}
                gia={product.gia}
              />
              </NavLink>
           </div> 
            
            
            
          
        ));
      };
      return (
        <div>
          {ds_LoaiSanPham.map((loaiSanPham) => (
            <div class ="shopify-section index-section">
                <h2 class="section-header__title">
                            {loaiSanPham.ten}
                            </h2>
            <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">        
                    {renderSanPham(loaiSanPham.ds_SanPham)}
            </div>
            </div>
          ))}
        </div>
      );
       
}

export const ds_LoaiSanPham=[
    {
        'ten':'Ao dep ne',
        'ds_SanPham':[
           {
            'id':'01',
            'hinh_anh':'./Banner_images/banner-meo-04.jpg',
            'ten':'Ao xanh xanh',
            'gia':100000
           }, 
           {
            'id':'02',
            'hinh_anh':'./Banner_images/banner-meo-04.jpg',
            'ten':'Ao dodo',
            'gia':300000
           },
           {
            'id':'04',
            'hinh_anh':'./Banner_images/banner-meo-04.jpg',
            'ten':'Ao vang vang',
            'gia':200000
           } 
        ]
        
    },
    {
        'ten':'Quan dep ne',
        'ds_SanPham':[
           {
            'id':'032',
            'hinh_anh':'./quan_img/quan_1.jpg',
            'ten':'Quần xanh xanh',
            'gia':10000
           }, 
           {
            'id':'0123',
            'hinh_anh':'./quan_img/quan_2.jpg',
            'ten':'Quần dodo',
            'gia':20000
           },
           {
            'id':'019',
            'hinh_anh':'./quan_img/quan_3.jpg',
            'ten':'Quần vang vang',
            'gia':30000
           } 
        ]
    }

]



export default Content;
