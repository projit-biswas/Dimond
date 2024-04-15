import React from "react";
import "./style.css";

function Capabilities() {
  return (
    <>
      <div className="w-full h-screen font-pop text-white capa">
        <h1 className="text-[64px] text-right pt-[34px] mr-24 font-enco">
          Our Capabilities
        </h1>
        <div className="border w-[1313px] h-[573px] mx-auto mt-16 flex justify-between p-1 items-center">
         <div >
          <img 
          className="w-[362px] h-[542px]"
          src="src\component\Homepage\assets\pic1.png" alt="" />
         </div >
         <div >
          <img 
          className="w-[362px] h-[542px]"
          
          src="src\component\Homepage\assets\pic2.png" alt="" />
         </div>
         <div>
          <img
          className="w-[362px] h-[542px] bg-center"
          src="src\component\Homepage\assets\pic3.png" alt="" />
         </div>
        </div>
      </div>
    </>
  );
}

export default Capabilities;
