import React from "react";
import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
        <Header />
        <Outlet /> // Content of Outlet will be changed in page and other will remain as it is.
        <Footer />
        </>
    )
}

export default Layout;