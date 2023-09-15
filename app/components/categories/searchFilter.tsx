import Box from '@/app/components/shared/Box';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { MdFilter } from 'react-icons/md';


const SearchFilter = () => {
  return (
    <div className="flex  align-middle justify-center items-center min-w-screen bg-inherit ">
        <Box className="flex gap-[4rem] rounded-[10px] items-center p-0 w-full drop-shadow-none md:w-[40%]  border-none transition-all duration-700 ease-in-out  ">
        <input className='relative w-[100%] py-4 px-6 border rounded-l-[10px] bg-[#ffffff] dark:bg-gray-900 focus:outline-none focus:bg-neutral-50 border-2 border-neutral-100' type='text' placeholder='search here ' />
        <button className='absolute right-[15%] h-full '><HiAdjustmentsHorizontal size={30} /></button>
        <button className=' h-full px-4 py-2 bg-amber-400 rounded-[10px]'>search</button>
        </Box>        
    </div>
  )
} 

export default SearchFilter