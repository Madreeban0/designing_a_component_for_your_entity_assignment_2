// write product card here

import React from "react";
import ViewProductButton from "../components/button";
import image from "../assets/productLap.jpg"

const Productcard = () => {
  // Static product details
//   const productImage = {image}; // Replace with actual image URL
  const productName = "HP Victus";
  const productPrice = "$99.99";

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border p-4">
      <img className="w-full   border-4 border-white object-cover" src={image} alt={productName} />
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{productName}</h2>
        <p className="text-gray-600 text-lg">{productPrice}</p>
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
