import React, { useState, useEffect } from "react";
import "./catalogCards.css";

function CatalogCards() {
    const watchData = [
        {
            id: 1,
            name: "Watch 1",
            description: "description",
            price: 100,
            materials: 0,
            categories: 2,
            collection: 0,
            imgUrl: "https://images.unsplash.com/photo-1612771409641-b0478cab8b69?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 2,
            name: "Watch 2",
            description: "description",
            price: 2000,
            materials: 1,
            categories: 0,
            collection: 2,
            imgUrl: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww"
        },
        {
            id: 3,
            name: "Watch 2",
            description: "description",
            price: 8000,
            materials: 0,
            categories: 2,
            collection: 1,
            imgUrl: "https://www.floro.me/wp-content/uploads/2023/06/df8c0f43-whatsapp-image-2023-06-28-at-11.49.28-pm.jpeg"
        },
        {
            id: 4,
            name: "Watch 2",
            description: "description",
            price: 30000,
            materials: 2,
            categories: 1,
            collection: 0,
            imgUrl: "https://img.fruugo.com/product/8/64/585959648_max.jpg"
        },
        {
            id: 5,
            name: "Watch 2",
            description: "description",
            price: 500,
            materials: 1,
            categories: 3,
            collection: 2,
            imgUrl: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/13036796/2021/1/6/bb6d18c9-39c1-4632-bc4a-f452606965ef1609906124788-WROGN-Men-Silver-Toned-Analogue-Watch-WRG00048A-802160990612-1.jpg"
        }
    ]

    const [price, setPrice] = useState("all");
    const [materials, setMaterials] = useState("all");
    const [categories, setCategories] = useState("all");
    const [collections, setCollections] = useState("all");
    const [relevences, setRelevences] = useState("all");

    const [filteredWatches, setFilteredWatches] = useState(watchData);

    useEffect(() => {
        if (price === "0") {
            const watches = watchData.filter((watch) => watch.price <= 999);
            setFilteredWatches(watches);
        } else if (price === "1") {
            const watches = watchData.filter((watch) => watch.price >= 1000 && watch.price <= 4999);
            setFilteredWatches(watches);
        } else if (price === "2") {
            const watches = watchData.filter((watch) => watch.price >= 5000 && watch.price <= 9999);
            setFilteredWatches(watches);
        } else if (price === "3") {
            const watches = watchData.filter((watch) => watch.price >= 10000);
            setFilteredWatches(watches);
        } else {
            console.log("all");
            setFilteredWatches(watchData);
        }
    }, [price]);

    useEffect(() => {
        if (materials === "0") {
            console.log("Gold");
            const watches = watchData.filter((watch) => watch.materials === 0);
            setFilteredWatches(watches);
        } else if (materials === "1") {
            console.log("Metal");
            const watches = watchData.filter((watch) => watch.materials === 1);
            setFilteredWatches(watches);
        } else if (materials === "2") {
            console.log("Fiber");
            const watches = watchData.filter((watch) => watch.materials === 2);
            setFilteredWatches(watches);
        } else {
            console.log("all");
            setFilteredWatches(watchData);
        }
    }, [materials]);

    useEffect(() => {
        if (categories === "0") {
            console.log("Him");
            const watches = watchData.filter((watch) => watch.categories === 0);
            setFilteredWatches(watches);
        } else if (categories === "1") {
            console.log("Her");
            const watches = watchData.filter((watch) => watch.categories === 1);
            setFilteredWatches(watches);
        } else if (categories === "2") {
            console.log("Unisex");
            const watches = watchData.filter((watch) => watch.categories === 2);
            setFilteredWatches(watches);
        } else {
            console.log("all");
            setFilteredWatches(watchData);
        }
    }, [categories]);

    useEffect(() => {
        if (collections === "0") {
            console.log("TimeLess");
            const watches = watchData.filter((watch) => watch.collection === 0);
            setFilteredWatches(watches);
        } else if (collections === "1") {
            console.log("Vintage");
            const watches = watchData.filter((watch) => watch.collection === 1);
            setFilteredWatches(watches);
        } else if (collections === "2") {
            console.log("Heritage");
            const watches = watchData.filter((watch) => watch.collection === 2);
            setFilteredWatches(watches);
        } else {
            console.log("all");
            const watches = watchData;
            setFilteredWatches(watches);
        }
    }, [collections]);

    useEffect(() => {
        if (relevences === "0") {
            console.log("Price High - Low");
        } else if (relevences === "1") {
            console.log("Price Low - High");
        } else if (relevences === "2") {
            console.log("Name Assending");
        } else if (relevences === "3") {
            console.log("Name Descending");
        }
    }, [relevences]);

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleChangeMaterials = (e) => {
        setMaterials(e.target.value);
    };

    const handleChangeCategories = (e) => {
        setCategories(e.target.value);
    };

    const handleChangeCollections = (e) => {
        setCollections(e.target.value);
    };

    const handleChangeRelevences = (e) => {
        setRelevences(e.target.value);
    };

    return (
        <>
            <div className="catalog-heading">Catalog</div>
            <div className="catalog-filter">
                <div className="catalog-filter-left">
                    <p className="filter-type">Filter by:</p>
                    <select name="prices" id="prices" className="filter-option" onChange={handleChangePrice}>
                        <option value="all" >Price</option>
                        <option value="0">0 - 999</option>
                        <option value="1">1,000 - 4,999</option>
                        <option value="2">5,000 - 9,999</option>
                        <option value="3">10.000 - more</option>
                    </select>
                    <select name="materials" id="materials" className="filter-option" onChange={handleChangeMaterials}>
                        <option value="all" >Materials</option>
                        <option value="0">Gold</option>
                        <option value="1">Metal</option>
                        <option value="2">Fiber</option>
                    </select>
                    <select name="categories" id="categories" className="filter-option" onChange={handleChangeCategories}>
                        <option value="all" >Categories</option>
                        <option value="0">Him</option>
                        <option value="1">Her</option>
                        <option value="2">Unisex</option>
                    </select>
                    <select name="collections" id="collections" className="filter-option" onChange={handleChangeCollections}>
                        <option value="all" >Collections</option>
                        <option value="0">TimeLess</option>
                        <option value="1">Vintage</option>
                        <option value="2">Heritage</option>
                    </select>
                </div>
                <div className="catalog-filter-right">
                    <p className="filter-type">Sort by:</p>
                    <p className="filter-option"></p>
                    <select name="relevences" id="relevences" className="filter-option" onChange={handleChangeRelevences}>
                        <option value="all" >Relevence</option>
                        <option value="0">Price High - Low</option>
                        <option value="1">Price Low - High</option>
                        <option value="2">Name Assending</option>
                        <option value="3">Name Descending</option>
                    </select>
                </div>
            </div>
            <div className="catalog-cards">
                {
                    filteredWatches.map((watch) => {
                    return (
                        <div className="catalog-card" key={watch.id}>
                            <img className="watch-img" src={watch.imgUrl} alt={watch.name} />
                            <div className="card-info">
                                <div className="card-details">
                                    <p className="watch-name">{watch.name}</p>
                                    <p className="watch-description">{watch.description}</p>
                                    <p className="watch-price">${watch.price}</p>
                                </div>
                                <img className="heart-icon" src="https://img.icons8.com/ios/452/like--v1.png" alt="Like" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default CatalogCards;