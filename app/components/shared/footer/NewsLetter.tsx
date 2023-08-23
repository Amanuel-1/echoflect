import React from 'react'

const NewsLetter = () => {
  return (

    <div>
      <ul className="flex flex-col gap-6 justify-center w-full transition-all duration-700 ease-in-out">
        <li><label className=' text-3xl font-bold ' htmlFor="newsletter">News Letter</label></li>
        <li><input className='py-3 px-10 border-b-2 focus:border-red-700 rounded-lg' id='newsletter' type='email' placeholder='Your Email' /></li>
        <li className='flex justify-center w-full '><button className='justify-center py-4 w-full bg-gradient-to-r from-pink-950 hover:from-slate-600 via-red-600 hover:via-indigo-600 to-pink-800 rounded-xl text-gray-300 text-xl  font-extrabold transition-all duration-700 ease-in-out'>Subscribe</button></li>
      </ul>
    </div>
  )
};

export default NewsLetter
