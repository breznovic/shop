import React from "react"
import { useSelector } from "react-redux"
import Header from "../Header/Header"

const Layout = () => {
    const showCart = useSelector((state) => state.cartUi.cartIsVisible);
    return (
        <div>
            <Header />
            {showCart && <Carts />}
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;