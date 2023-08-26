import { Images } from '@/public/resources';
import Image from 'next/image';
import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { FaCamera, FaCameraRetro } from 'react-icons/fa';
import { RiCamera2Line } from 'react-icons/ri';
import styles from '@/styles/app.module.css'
import { FiEdit2, FiSettings } from 'react-icons/fi';
import { data } from 'autoprefixer';

const user  = {
  name : "selam Woldeyes",
  email: "selamwolde@gmail.com",
  image: Images.author,
  cover:Images.cover,
  
}



const Profile =() => {
  return (
    <section className=" min-h-screen text-black md:px-20">
     <div className="relative flex flex-col gap-[4rem] container mx-auto w-full bg-yellow-500 min-h-[15rem]">
          <Image src={Images.cover} alt='cover' layout="fill" objectFit="cover"/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:left-1/6">
          <Image className='relative rounded-full border-8 border-gray-700' src={Images.author} alt='author' height={200} width={200}/>
          <button className='absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 bg-gradient-to-t from-amber-800 via-[rgba(100,100,20,.1)] to-transparent p-[5rem] h-[1rem]  text-3xl text-white rounded-b-full transition-opacity duration-300 ease-in' ><AiOutlineCamera/></button>
          </div>
     </div>
    <div className="w-full flex gap-4 mt-[5rem] justify-center md:justify-end bg-gray-100">
      <button className={`${styles.filled} px-4 py-2 rounded-xl text-2xl`}><FiEdit2/></button>
      <button className={`${styles.filled} px-4 py-2 rounded-xl text-2xl`}><FiSettings/></button>
    </div>
    </section>
  );
};

export default Profile;