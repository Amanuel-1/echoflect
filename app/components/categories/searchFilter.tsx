import Box from '@/app/components/shared/Box';
import { MdFilter } from 'react-icons/md';


const SearchFilter = () => {
  return (
    <div className="flex justify-center align-middle items-center w-full bg-inherit">
        <Box className="flex flex-gap-4 rounded-[10px] items-center  ">
        <input className='relative w-[100%] py-4 px-6 border rounded-xl bg-[#ffffff] dark:bg-gray-900 focus:outline-none border-none' type='text' placeholder='search here ' />
        <button className='absolute right-0 h-full px-2'><MdFilter size={30} /></button>
        <button className=' h-full px-4 py-2 bg-amber-400 rounded-[10px]'>search</button>
        </Box>        
    </div>
  )
}

export default SearchFilter