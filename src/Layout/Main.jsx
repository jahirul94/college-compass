import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";

const Main = () => {
    return (
        <div className="w-3/4 mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;