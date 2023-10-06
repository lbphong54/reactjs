import { NavLink } from "react-router-dom";

function Header()
{
    return(
        <>
    <header className="site-header site-header--heading-style site-header--stuck site-header--opening">
      <div className="page-width">
      <div className="header-layout header-layout--center-split">
        <div height="50px" >
          <NavLink to ="/" className="nav-link active"></NavLink>
        </div>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      
          <li className="nav-item">
            <NavLink to ="/" className="nav-link active">Trang chủ</NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to ="/Vechungtoi" className="nav-link active">Về chúng tôi</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to ="/Sanpham" className="nav-link active">Sản phẩm</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to ="/Tintuc" className="nav-link active">Tin tức</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to ="/Lienhe" className="nav-link active">Liên hệ</NavLink>
          </li>
          
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Nhập tên sản phẩm" aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Đăng ký</button>
          <button type="button" className="btn btn-warning">Đăng nhập</button>
        </div>
      </div>
    </div>
  </header>
        </>
    )
}export default Header;