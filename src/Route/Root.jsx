import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
     <Nav />
     <Outlet />
     <Footer />
    </div>
  );
};

export default Root;