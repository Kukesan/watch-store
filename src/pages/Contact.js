import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import MessageContainer from "../components/contact/message-container/MessageContainer";
import Countries from "../components/contact/countries/Countries";

function Contact(){
    return(
        <>
            <Header />
            <MessageContainer />
            <Countries />
            <Footer />
        </>
    )
}

export default Contact;