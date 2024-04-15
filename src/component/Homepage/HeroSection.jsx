import React from 'react'
import "./style.css"

function HeroSection() {

  const handelClick = () => {
    console.log(e.target);
  }

  return (
    <>
        <section className="w-full h-[996px] font-pop absolute top-0 left-0 text-white hero">
            <div className='w-[1036px] h-[744px] my-auto absolute top-[156px] flex flex-col justify-center ml-32'>
                <h1 className='text-[48px] leading-[60px] font-enco'>W E L C O M E</h1>
                <p className='text-[40px] leading-[47px]'>Medallist & Gift Makers to Royalties & Heads of State</p>
            </div>
            <div className='relative top-[710px] left-[128px]  inline-block'>
              <button 
              className='decoration-solid'
              onClick={handelClick}>
                <span
                className='text-[30px] decoration-solid'>Discover more</span>
                </button>
              </div>


        </section>
    
    
    </>
  )
}

export default HeroSection