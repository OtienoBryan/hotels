import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/products",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

const Featured = async () => {

  
  const featuredProducts:ProductType[] = await getData()

  return (
    <div className="w-screen overflow-x-scroll text-indigo-950">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[20vh] border-2 border-black-200 m-3 flex flex-row items-center justify-around p-2 hover:bg-bggreen transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[20vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
               <div className="w-full h-30 md:h-48 lg:h-56 flex items-center justify-center">
               <Image
                 src={item.img || '/place.png'}
                 alt={item.title || 'Default Image'}
                 layout="intrinsic"
                 width={200} // Set a reasonable width for better scaling
                 height={200}
                 className="object-cover rounded-t-md"
               />
             </div>
            )}
            {/* TEXT CONTAINER */}

        <div className="w-full text-center mt-1 flex flex-col items-center">
        <h1 className="uppercase font-bold text-xs md:text-base">{item.title}</h1>
        <span className="text-xs font-medium">KSh {item.price}</span>
        <button className="uppercase bg-red-700 text-white p-2 rounded-md w-24 text-xs lg:text-sm mt-2">
          Order
        </button>
        {/* Uncomment the description if needed */}
        {/* <p className="text-xs md:text-sm mt-1 text-gray-500">{sub_category.desc}</p> */}
      </div>
            {/* <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-sm font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
              <span className="text-xl font-bold">KSh {item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md"
                >
                Add to Cart
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;