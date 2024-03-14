import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import CatalogCards from "../components/catalog/CatalogCards";

function Catalog() {
    return(
        <>
            <Header />
            <CatalogCards />
            <Footer />
        </>
    )
}

export default Catalog;