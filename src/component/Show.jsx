import axios from "axios";
import React, { useState } from "react";

const Show = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button
        onClick={getProducts}
        className="px-3 py-2 bg-orange-500 mt-4 rounded-sm text-white text-sm"
      >
        Get Products
      </button>
      <hr />
      <ul>
        {products.length > 0
          ? products.map((item, index) => (
            <div>

              <li key={index} className="rounded p-5 mb-2 bg-orange-200">
                Product Name: {item.title}
              </li>
              <img src={item.image} alt={item.title} width="100" />
              <p>Price: {item.price}</p>
              <p>Description: {item.description}</p>
            </div>
            ))
          : "Loading....!!"}
      </ul>
    </>
  );
};

export default Show;
