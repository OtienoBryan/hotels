import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <div className='hidden lg:w-full md:w-full h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-cafnoir flex items-center justify-between bg-gray-800 text-white fixed bottom-0'>
      <Link href="/"> 
        <p className='text-xs md:text-sm font-semibold'>CIT Logistics</p>
      </Link>
      <p className='text-[10px] md:text-sm'>© 2024 Urban Point Restaurants. All Rights Reserved</p>
    </div>
  );
};

export default Footer;