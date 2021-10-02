import axios from 'axios';

//const initState = {
// products: [
//     { id: 1, ctg: 1, vid: 1, name: 'Split Yellow Moong Dal', image: '1.jpg', price: 200, discount: 2, discountPrice: 200 - 2 / 100 * 200, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 2, ctg: 1, vid: 1, name: 'Whole Masoor Dal', image: '2.jpg', price: 30, discount: 5, discountPrice: 30 - 5 / 100 * 30, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 3, ctg: 1, vid: 1, name: 'Split Orange Masoor Dal', image: '3.jpg', price: 15, discount: 3, discountPrice: 15 - 3 / 100 * 15, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 4, ctg: 1, vid: 1, name: 'Whole Green Moong Dal', image: '4.jpg', price: 50, discount: 4, discountPrice: 50 - 4 / 100 * 50, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 5, ctg: 1, vid: 1, name: 'Split Green Moong Dal', image: '5.jpg', price: 25, discount: 2, discountPrice: 25 - 2 / 100 * 25, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 6, ctg: 1, vid: 1, name: 'Whole Black Urad Dal', image: '6.jpg', price: 60, discount: 6, discountPrice: 60 - 6 / 100 * 60, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 7, ctg: 1, vid: 1, name: 'Split Black Urad Dal ', image: '7.jpg', price: 35, discount: 2, discountPrice: 35 - 2 / 100 * 35, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 8, ctg: 1, vid: 1, name: 'Split Chana Dal/ Bengal Gram Dal', image: '8.jpg', price: 80, discount: 7, discountPrice: 80 - 7 / 100 * 80, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 9, ctg: 1, vid: 1, name: 'Red Kidney Beans/Rajma ', image: '9.jpg', price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 10, ctg: 1, vid: 1, name: 'Black Eyed Peas/ Lobia ', image: '10.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 11, ctg: 1, vid: 1, name: 'Moth Beans/ Matki ', image: '11.jpg', price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 12, ctg: 1, vid: 1, name: 'Whole White Urad Dal ', image: '12.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },

//     { id: 13, ctg: 2, vid: 1, name: 'oil 5 ltr ', image: '13.jpg', price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 14, ctg: 2, vid: 1, name: 'Atta/Godihittu - Whole Wheat ', image: '14.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 15, ctg: 2, vid: 1, name: 'Sona Masoori Raw Rice/Akki ', image: '15.jpg', price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 16, ctg: 2, vid: 1, name: 'Pure Ghee/Tuppa ', image: '16.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 17, ctg: 2, vid: 1, name: 'Tata Salt ', image: '17.jpg', price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 18, ctg: 2, vid: 1, name: 'Sugar/Sakkare - Refined ', image: '18.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 19, ctg: 2, vid: 1, name: 'Fortune Premium Kachi Ghani Pure Mustard Oil', image: '19.jpg', price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 20, ctg: 2, vid: 1, name: 'Ghee', image: '20.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 21, ctg: 2, vid: 1, name: 'Organic Jaggery/Bella Powder ', image: '21.jpg', price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 22, ctg: 2, vid: 1, name: 'Basmati Rice/Basmati Akki - Feast Rozzana ', image: '22.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 23, ctg: 2, vid: 1, name: 'Thick Poha ', image: '23.jpg', price: 95, discount: 4, discountPrice: 95 - 4 / 100 * 95, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },
//     { id: 24, ctg: 2, vid: 1, name: 'Chakki-Fresh-Wheat-Atta/Godihittu - Fortified ', image: '24.jpg', price: 120, discount: 3, discountPrice: 120 - 3 / 100 * 120, quantity: 1, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?" },

// ],
//product: {}
//}

let rows = [];

const products = { id: "", ctg: "", vid: "", name: "", image: "", vendorPrice: 0, price: 0, discount: 0, discountPrice: 200 - 2 / 100 * 200, quantity: 0, desc: "" };
    
const getData = () => {
    axios
        .get("http://localhost:3003/getPRoductData",)
        .then((res) => {
            //console.log(res.data);
            for (let i = 0; i < res.data.length; i++) {
                rows.push(products);
                rows[i] = { id: res.data[i].PRODUCT_ID,    ctg: res.data[i].CATEGORY_ID,    vid: res.data[i].VENDOR_ID,    name: res.data[i].PRODUCT_NAME,    image: 'http://localhost:3003/'+ res.data[i].PRODUCT_IMAGE,    vendorPrice: res.data[i].VENDOR_PRICE,    price: res.data[i].PRODUCT_PRICE,    discount: res.data[i].DISCOUNT,    discountPrice: res.data[i].PRODUCT_PRICE - res.data[i].DISCOUNT / 100 * res.data[i].PRODUCT_PRICE,    quantity: res.data[i].PRODUCT_QTY,    desc: res.data[i].PRODUCT_DESC }
                //console.log(rows)
            }
            console.log(rows)
            //this.afterSubmit(res.data);
        });
}
getData();

const initState = {
    products: rows,
    product: {}
}

const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return { ...state, product: state.products.find(product => product.id === parseInt(action.id)) }
        default:
            return state;
    }
}
export default ProductsReducer;