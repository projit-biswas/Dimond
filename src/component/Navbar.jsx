import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='w-full font-pop pt-11 text-white relative z-10 bg-orange-400'>
        <div className='w-[254px] h-[47px] mx-auto bg-white text-teal-800 text-center mb-2'>
                <p>logo</p>
        </div>

        <div className='pb-1    '>
            <ul className='flex justify-center gap-14'>
                <li className='p-2 rounded-xl border '><a href="#">Home</a></li>
                <li className='p-2 rounded-md'><a href="">About Us</a></li>
                <li className='p-2 rounded-md'><a href="">Order decorations & medals</a></li>
                <li className='p-2 rounded-md'><a href="">Fine gifts</a></li>
                <li className='p-2 rounded-md'><a href="">jewellery</a></li>
                <li className='p-2 rounded-md'><a href="">Restoration</a></li>
                <li className='p-2 rounded-md'><a href="">Articles</a></li>
                <li className='p-2 rounded-md'><a href="">Contact Us</a></li>
            </ul>
        </div>


    </nav>
    
    </>
  )
}

export default Navbar