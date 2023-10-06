import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";

function PaymentPage() {
  const products = [
    { id: 1, name: "Sản phẩm 1", price: 10, quantity: 2, size: "M" },
    { id: 2, name: "Sản phẩm 2", price: 20, quantity: 1, size: "L" },
    { id: 3, name: "Sản phẩm 3", price: 30, quantity: 3, size: "S" },
  ];

  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="container payment-container">
      <h2>Trang thanh toán</h2>
      <div>
        <h3>Thông tin sản phẩm:</h3>
        <ul className="list-group">
          {products.map((product) => (
            <li key={product.id} className="list-group-item">
              <div>
                <strong>Tên:</strong> {product.name}
              </div>
              <div>
                <strong>Giá:</strong> {product.price} đ
              </div>
              <div>
                <strong>Số lượng:</strong> {product.quantity}
              </div>
              <div>
                <strong>Kích thước:</strong> {product.size}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Tổng số tiền phải chả:</h3>
        <p>{totalPrice} đ</p>
      </div>
      
    </div>
  );
}

export default PaymentPage;