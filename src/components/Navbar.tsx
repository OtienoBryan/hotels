import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;
  return (
 
      <div className="navbar fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white shadow-md z-50">
     
      {/* LEFT LINKS */}

      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">

      <Image src="/search.png" alt="" height={14} width={14}/>
      <input type="text" placeholder="Search ..." className="w-[300px] p-2 bg-transparent outline-none"/>
      </div>

      <div className="hidden md:flex gap-4 flex-1">
        {/* <Link href="/">Homepage</Link> */}
         
      </div>
          {/* LOGO */}
          
      <div className="flex justify-start items-start text-xl md:font-bold flex-1">
  
      <Link href="/">
      <h2 className="font-bold text-red-700">Maa Hotel & Suites
        </h2>
      {/* <Image 
      src="/urban.svg" 
      alt="logo" 
      width={150} 
      height={150} 
      className="object-contain" /> */}
      
      </Link>
      </div>


      {/* MOBILE MENU */}
      <div className="md:hidden flex items-end px-10 h-auto w-auto object-contain" ><CartIcon /></div>
      {/* <Link href="/orders">Orders</Link> */}
      <div className="md:hidden">
        <Menu />
        
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center  cursor-pointer bg-bggreen px-1 rounded-md">
          {/* <Image src="/phone.png" alt="" width={20} height={20} /> */}
          {/* <Link href="/register">Sign up</Link> */}
        </div>
        {/* <UserLinks/> */}
        <CartIcon />

        <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">John Doe</span>
            </div>
            <Image src="/avatar.png" alt="" height={36} width={36} className="rounded-full"/>
      </div>
    </div>
  );
};

export default Navbar;