import React from "react";
import './countries.css';

const countries = [
    {
        "id": 1,
        "flagUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rrV1uE35UOTi-dcGv-2CAb0ICmNmk3DtfA&usqp=CAU",
        "heading": "Countries We Ship To",
        "text": "We ship to the following countries"
    },
    {
        "id": 2,
        "flagUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SaPycH8HZvJbtyCdZG_KK490wPuph8fKaQ&usqp=CAU",
        "heading": "Countries We Ship To",
        "text": "We ship to the following countries"
    },
    {
        "id": 3,
        "flagUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa8mVSeVj91qq3cK_mWemSmPN2Hh4bkavyw&usqp=CAU",
        "heading": "Countries We Ship To",
        "text": "We ship to the following countries"
    },
    {
        "id": 4,
        "flagUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_XBJFvWL7YOlyi4Sxoq4LX20EtvxAqTn1w&usqp=CAU",
        "heading": "Countries We Ship To",
        "text": "We ship to the following countries"
    }
]

function Countries() {
    return (
        <div className="country-container">
            <p className="message-text">Our Stores Over the World</p>
            <div className="countries">
                {countries.map((country) => (
                    <div key={country.id} className="country-card">
                        <img className="country-img" src={country.flagUrl} />
                        <p className="country-head">{country.heading}</p>
                        <p className="country-text">{country.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Countries;