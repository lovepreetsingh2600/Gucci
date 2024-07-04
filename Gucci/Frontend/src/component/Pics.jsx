import { Fa3 } from 'react-icons/fa6';
import sa from '../assets/bag.avif'
import fa from '../assets/img1.webp'

const Pics=()=>{
    return(<>
<div className='columns-2  p-5'>
    <div className="flex justify-center">
    <button id='btn' type="button" class=" text-black brightness-50   focus:ring-4  font-medium  text-sm px-5 py-2 .5 me-2 mb-2 absolute mt-5 ">FOR HER</button>
    <img src={fa} alt="" />
    
    </div>
    <div className=" flex justify-center">
        <button id='btn' type="button" class=" text-black brightness-50   focus:ring-4  font-medium  text-sm px-5 py-2 .5 me-2 mb-2 absolute mt-5 ">FOR HIM</button>
    <img src={sa} alt="" />
    
    </div>
    <h1 class="text-white  w-5/12 bg-inherit   font-medium  text-sm  px-5 py-2.5 me-2 mb-2 relative bottom-52  left-1/3">Men's Falls Winter 2024 COllection</h1>
    <button id='btn' type="button" class="text-white  w-5/12 bg-inherit  border-2 border-white font-medium  text-sm px-5 py-2.5 me-2 mb-2 relative bottom-32  left-1/3"> EXPLORE THE NEW STYLES</button>
</div>

    </>)
}
export default Pics;