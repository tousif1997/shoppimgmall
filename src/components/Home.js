import React, { useState, useMemo } from 'react'
import CarouselContainer from "./CarouselContainer"
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom"
const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    const [prodData, setProdData] = useState(products);

    const [cat, setCat] = useState()

    const [catList, setCatList] = useState([
        { key: "1", value: "beans" },
        { key: "2", value: "oil" }]
    );

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
                            <option value="">Select Category</option>
                            {catList.map((data) => (
                                <option key={data.key} value={data.key}>
                                    {data.value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "31px", marginBottom: "40px" }}
                        onClick={() => filterData()}
                    >
                        Filter
                    </button>
                </div>
            </form>
            <div className="container">
                <div className="row">
                    {prodData.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`/details/${product.id}`}><img src={`/images/${product.image}`} alt="image name" /></Link>
                                </div>
                                <div className="product__name">
                                    {product.name}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">
                                            <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> <span className="discount">{product.discount}%</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount__price">
                                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
