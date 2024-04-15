import React from "react";

function Products() {
  return (
    <>
      <div className="w-full h-[996px] font-pop text-white bg-black product">
        <h1 className="text-[64px] leading-[75px] pt-[102px] pl-[96px]">
          Our Featured Products
        </h1>

        <div className="flex mx-[266px] gap-44 mt-[305px] text-[36px]">
          <p>Orders, Decorations & Medals</p>
          <p>Fine gifts</p>
          <p>Jewellery</p>
        </div>
      </div>
    </>
  );
}

export default Products;
