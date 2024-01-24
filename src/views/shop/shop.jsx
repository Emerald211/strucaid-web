import { Outlet } from "react-router-dom";
import AuthNavbar from "/src/components/auth-navbar/authNavbar";


const Shop = () => {
  return (
      <div>
          <AuthNavbar />

          <Outlet />
    </div>
  )
}

export default Shop;