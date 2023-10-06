import React,{ useState, useNavigate } from "react";

import { useParams,useHistory } from 'react-router-dom';
import { ds_LoaiSanPham } from './loaiSanPham';
import Header from "../pages/header";


const getSanPhamById = (productId)=>{
    for (const loaiSanPham of ds_LoaiSanPham) {
        // Duyệt qua danh sách sản phẩm trong mỗi loại
        for (const sanPham of loaiSanPham.ds_SanPham) {
          // Kiểm tra nếu productId trùng khớp
          if (sanPham.id === productId) {
            return sanPham; // Trả về thông tin sản phẩm nếu tìm thấy
          }
        }
      }
    return null;
}

function ProductDetails() {

    const { productId } = useParams();
    const sanPham = getSanPhamById(productId);

    const [quantity, setQuantity] = useState(1);
    const [image, selectedImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [cartItemsState, setCartItemsState] = useState([]);

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };
    const navigate = useNavigate();
    const handleAddToCart = () => {
      const item = {
        sanPham,
        quantity,
        size: selectedSize
      };
      setCartItemsState([...cartItemsState, item]);
    };
    
    const handleCheckout = () => {
      navigate('/thanh-toan', { cartItems: cartItemsState });
    };
   
    

    

    return (
        
           <>
           <Header/>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={sanPham.hinh_anh} alt={sanPham.ten} className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h2>Thông tin chi tiết sản phẩm:</h2>
                  <p>Tên: {sanPham.ten}</p>
                  <p>Giá: {sanPham.gia}</p>
        
                  <div>
                    <label htmlFor="quantity">Số lượng:</label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="form-control"
                    />
                  </div>
        
                  <div>
                    <label htmlFor="size">Kích thước:</label>
                    <select
                      value={selectedSize}
                      onChange={handleSizeChange}
                      className="form-control"
                    >
                      <option value="">Chọn kích thước</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      {/* Render các tùy chọn kích thước ở đây */}
                    </select>
                  </div>
        
                  <button
                    className="btn btn-primary"
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ hàng
                  </button>
                  <button className="btn btn-success" onClick={handleCheckout}>
                    Thanh toán ({cartItemsState.length})
                  </button>

                </div>
              </div>
            </div>
            <div>

            </div>
            {/* <ProductDetails/> */}
            </>
          );

          
    };




export default ProductDetails;