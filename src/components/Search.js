import React, { useState } from "react";

const Search = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    const [tsYear, settsYear] = useState();


    const MonthLov = [
        { key: "", value: "Select Month" },
        { key: "1", value: "Jan" },
        { key: "2", value: "Feb" },
        { key: "3", value: "Mar" },
        { key: "4", value: "Apr" },
        { key: "5", value: "May" },
        { key: "6", value: "Jun" },
        { key: "7", value: "Jul" },
        { key: "8", value: "Aug" },
        { key: "9", value: "Sep" },
        { key: "10", value: "Oct" },
        { key: "11", value: "Nov" },
        { key: "12", value: "Dec" },
    ];


    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div class="col-md-4 mb-3">
                    <label for="userRole">Category</label>
                    <select
                        class="form-control is-valid"
                        value={tsYear}
                        id="tsYear"
                        name="tsYear"
                        onChange={(e) => {
                            settsYear(e.target.value);
                        }}
                        required
                    >
                        <option value="">Select Years</option>
                        {MonthLov.map((data) => (
                            <option key={data.ID} value={data.ID}>
                                {data.YEAR}
                            </option>
                        ))}
                    </select>
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "31px", marginBottom: "40px" }}
                >
                    Filter
                </Button>
            </div>
        </form>
    );
};

export default Search;