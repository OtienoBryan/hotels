"use client"

import React, { useState } from "react";

const BottomNavigation = () => {
  const Menus = [
    { name: "Home", icon: "/home.png" },
    { name: "Profile", icon: "/cart.png" },
    { name: "Call", icon: "/call.png" },
    { name: "Photos", icon: "/shopping-cart.png" },
    { name: "Settings", icon: "/more.png" },
  ];
  const [active, setActive] = useState(2); // Initialize active to 2, which corresponds to the "Message" item
  
  return (
    <div className=" md:hidden lg:hidden xl:hidden bg-white max-h-[4.0rem] rounded-t-xl fixed bottom-0 w-full px-2 shadow-full overflow-hidden ">
      <ul className="flex justify-between relative h-full items-center"> {/* Added items-center for vertical centering */}
        {/* <span
          className={`bg-green-500 opacity-70 duration-500 transform transition-transform ${active !== null ? `translate-x-${active * 16}` : "translate-x-0"} border-2 border-gray-900 h-16 w-16 absolute -top-3 rounded-full`}
        >
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
          <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
        </span> */}
        {Menus.map((menu, i) => (
          <li key={i} className="flex-1 text-center"> {/* flex-1 for equal width distribution */}
            <a
              className="flex flex-col p-6"
            //   onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${i === active ? "-mt-6 text-white" : "text-black"}`}
              >
                <img src={menu.icon} alt={menu.name} className="w-7 h-7" />
              </span>
              <span
                className={`transition-transform duration-700 ${active === i ? "translate-y-4 opacity-100" : "opacity-0 translate-y-10"}`}
              >
                {/* {menu.name} */}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNavigation;