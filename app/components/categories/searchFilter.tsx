import Box from '@/app/components/shared/Box';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { MdFilter } from 'react-icons/md';


const SearchFilter = () => {
  return (
    <div className="flex  align-middle justify-center items-center min-w-screen bg-inherit ">
        <Box className="flex gap-4 rounded-[10px] items-center p-0 w-full drop-shadow-none shadow-none  border-none transition-all duration-700 ease-in-out  ">
        <div className=" w-full flex gap-0 justify-center md:px-[10rem] ">
            <div className="relative w-full md:w-3/4">
            <input className=' w-full  py-4 px-6  rounded-l-[10px] bg-[#ffffff] dark:bg-gray-900 outline-none  border-neutral-100 dark:border-stone-900 focus:bg-neutral-50 border-2' type='text' placeholder='search here ' />
            <button className='absolute right-0 px-4 h-full hover:text-gray-600'><HiAdjustmentsHorizontal size={35} /></button>
            </div>
            <button className=' px-4 md:px-8 bg-amber-400 rounded-r-[10px]'>search</button>
        </div>
        </Box>        
    </div>
  )
} 

export default SearchFilter