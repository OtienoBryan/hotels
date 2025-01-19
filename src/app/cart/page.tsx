"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/checkout");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        router.push(`/CheckoutPage/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-indigo-950 mt-20">
      {/* PRODUCTS CONTAINER */}
      <div className="flex flex-col gap-4 p-4 lg:w-2/3 2xl:w-1/2">
        {products.map((item) => (
          <div
            className="flex flex-row sm:flex-row items-center sm:items-start p-2 border border-gray-300 rounded-lg shadow-md gap-4"
            key={item.id}
          >
            {/* Product Image */}
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={100}
                height={100}
                className="object-contain"
              />
            )}
            {/* Product Details */}
            <div className="flex flex-col flex-1 text-start sm:text-left">
              <h1 className="uppercase text-xs font-medium mb-2">
                {item.title} (x{item.quantity})
              </h1>
              <span className="text-gray-500">{item.optionTitle}</span>

              <h2 className="font-bold text-sm mb-2 sm:mb-0">Ksh. {item.price}</h2>
            </div>
            {/* Product Price */}
            
            {/* Remove from Cart Button */}
            <button onClick={() => removeFromCart(item)}>
              <Image
                src="https://ik.imagekit.io/bja2qwwdjjy/trash%20(1)_C3ZG3vzL2.png"
                alt="Remove"
                width={35}
                height={35}
                className="cursor-pointer"
              />
            </button>
          </div>
        ))}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="flex flex-col gap-2 p-4 bg-fuchsia-50 text-xs lg:text-lg rounded-lg lg:w-1/3 2xl:w-1/2 ">
        <div className="flex justify-between text-xs lg:text-lg font-medium">
          <span>Sub Total ({totalItems} items)</span>
          <span>Ksh {totalPrice}</span>
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="flex justify-between text-xs lg:text-lg  font-bold">
          <span>TOTAL (VAT INCL)</span>
          <span>Ksh {totalPrice}</span>
        </div>
         
        <span className="font-bold text-center text-red-700">Choose Service Type</span>

        <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2 bg-white p-2 rounded-md border-2 border-gray-300 cursor-pointer"  onClick={() => router.push("/checkout")}>
        <Image
          src="/scan.png"
          alt="Logo"
          width={50}
          height={30}
          className="mx-auto max-w-full object-contain"
        />
        <span className="font-bold text-center">Scan Table</span>
          </div>

          {/* <div className="flex flex-col gap-2 bg-white p-2 rounded-md border-2 border-gray-300" onClick={handleCheckout}> */}
          <div className="flex flex-col gap-2 bg-white p-2 rounded-md border-2 border-gray-300 cursor-pointer">

          <Link
      href={`/tableScan`}>
        <Image
          src="/room_service.png"
          alt="Logo"
          width={50}
          height={30}
          className="mx-auto max-w-full object-contain"
        />
        <span className="font-bold text-center">Room Service</span>
        </Link>
          </div>

        <div className="flex flex-col gap-2 bg-white p-2 rounded-md border-2 border-gray-300 cursor-pointer" onClick={() => router.push("/schedule")}>
        <Image
          src="/deliver.png"
          alt="Logo"
          width={50}
          height={30}
          className="mx-auto max-w-full object-contain"
        />
        <span className="font-bold text-center">Home Delivery</span>
          </div>
          
           
        </div>
        
      </div>
      
    </div>
  );
};

export default CartPage;
