import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";

export default function ProductItem({ product, addToCartHandler }) {
  const ratingChanged = () => { };

  return (
    // <div className="card">
    //   <Link href={`/product/${product.slug}`}>
    //     <span>
    //       <Image
    //         src={product.image}
    //         alt={product.name}
    //         className="rounded shadow object-cover w-full h-64 object-top"
    //         height="400"
    //         width="400"
    //       />
    //     </span>
    //   </Link>
    //   <div className="flex flex-col items-center justify-center p-5">
    //     <Link href={`/product/${product.slug}`}>
    //       <h2 className="text-lg">{product.name}</h2>
    //     </Link>
    //     <p className="mb-2">{product.brand}</p>
    //     <ReactStars
    //       count={5}
    //       onChange={ratingChanged}
    //       size={24}
    //       activeColor="#ffd700"
    //       value={product.rating}
    //       edit={false}
    //     />
    //     <p>{product.price}₹</p>
    //     <button
    //       className="primary-button"
    //       type="button"
    //       onClick={() => addToCartHandler(product)}
    //     >
    //       Add to cart
    //     </button>
    //   </div>
    // </div>
    <div className="card bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
      <Link href={`/product/${product.slug}`}>
        <span className="block relative">
          <Image
            src={product.image}
            alt={product.name}
            className="rounded-t-lg object-cover w-full h-64 object-top border"
            height={400}
            width={400}
          />
        </span>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg font-semibold mb-2 antialiased  leading-relaxed text-inherit">{product.name}</h2>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          value={product.rating}
          edit={false}
        />
        <p className="text-lg font-semibold mb-2">{product.price}₹</p>
        <button type="button" onClick={() => addToCartHandler(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</button>


      </div>
    </div>

  );
}
