import React, { useState, useEffect } from 'react'
import CarouselContainer from "./CarouselContainer"
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom"
const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    const [prodData, setProdData] = useState(products);
    const [roleLov, setRoleLov] = useState([]);

    const [cat, setCat] = useState()

    // const [catList, setCatList] = useState([
    //     { key: "1", value: "Beans" },
    //     { key: "2", value: "Beverages" },
    //     { key: "3", value: "Oil" },
    //     { key: "4", value: "Cleaning Supplies" },
    //     { key: "5", value: "Baby Care" },]
    // );

    const filterData = () => {
        let computedComments = products;

        if (cat) {
            computedComments = computedComments.filter(
                (comment) =>
                    comment.ctg.includes(cat) || comment.ctg.toLowerCase().includes(cat)
            );
            console.log("Filterd ", computedComments);
            setProdData(computedComments);
        } else setProdData(products);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //getData();
    };

    useEffect(() => {
        filterData();
    }, [cat])

    const getRoleLovData = () => {
        fetch("http://localhost:3003/getCategoryData", {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setRoleLov(response);
            });
        return roleLov;
    };

    useEffect(() => {
        getRoleLovData();
    }, []);

    return (
        <div>
            <CarouselContainer />
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div class="col-md-4 mb-3">
                        <label for="userRole">Category</label>
                        <select
                            class="form-control is-valid"
                            value={cat}
                            id="cat"
                            name="cat"
                            onChange={(e) => {
                                setCat(e.target.value);
                            }}
                            required
                        >
                            <option key="" value="">
                                Select Category
                            </option>
                            {roleLov.map((data) => (
                                <option key={data.CATEGORY_ID} value={data.CATEGORY_NAME}>
                                    {data.CATEGORY_NAME}
                                </option>
                            ))}
                        </select>
                    </div>

                    { /*<button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "31px", marginBottom: "40px" }}
                        onClick={() => filterData()}
                    >
                        Filter
                  </button>*/}
                </div>
            </form>
            <div className="container">
                <div className="row">
                    {prodData.map(product => (
                        <>
                            {product.quantity > 0 ? <div className="col-3" key={product.id}>
                                <div className="product">
                                    <div className="product__img">
                                        <Link to={`/details/${product.id}`}><img src={product.image} alt="img name" /></Link>
                                    </div>
                                    <div className="product__name">
                                        {product.name}
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="product__price">
                                                {product.discount !== 0 ? <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'INR' })}</span> : null}
                                                <span className="discount">{product.discount}%</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="product__discount__price">
                                                {currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> : null}</>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
