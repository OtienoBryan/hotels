"use client"
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {
  const { data: session, status } = useSession();

  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(()=>{
    useCartStore.persist.rehydrate()
  },[])
  return (
    <Link href={session?.user.isAdmin ? "/add" : "/cart"}>
      <div className="flex relative items-right">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
        
         <Image src="/shopping-cart.png" alt="" height={20} width={20}/>
          
        </div>
        {/* {session?.user.isAdmin ? (
          <button className="p-1 bg-customGreen text-indigo-950 rounded-md">Add product</button>
        ) : (
          <span>Cart ({totalItems})</span>
        )} */}
        <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">{totalItems}</div>
        
      </div>
    </Link>
  );
};

export default CartIcon;