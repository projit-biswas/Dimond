import React from "react";

function Footer() {
  return (
    <div className="w-full h-[550px] bg-black text-white font-pop p-2 ">
      <div className="border h-[482px] w-[95%] mx-auto flex p-3">
        <div className="w-[25%]">logo</div>

        <div className="flex w-[75%] justify-around ml-3 ">
          <p>Contact</p>
          <p>Address</p>
          <p>Address</p>
        </div>
      </div>
      <div className="pl-14 text-[12px] mt-[11px]">
        <p>
          Copyright © Viable Diamonds. All rights reserved. | Privacy
          Policy | Terms of Use
        </p>
      </div>
    </div>
  );
}

export default Footer;
