import {Outlet} from "react-router-dom";
import NavBar from "../components/nav_bar/nav_bar";
import Footer from "../components/footer/footer"
import 'bootstrap/dist/css/bootstrap.css';

const Layout = () => {
    return (
        <div class="bg-dark">
            {/* header goes here */}
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
};

export default Layout;