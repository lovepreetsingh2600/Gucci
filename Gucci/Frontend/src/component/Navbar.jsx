import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


const Navbar=()=>{
    return(<>
    

<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 
<div class="text-center">
   <button class="text-dark  font-medium rounded-lg text-sm px-5 py-2.5 mb-2" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
   + Contact Us
   </button>
</div>

<div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-5/12 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
    
   <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class=" bg-gray text-white-400 bg-transparent hover:bg-gray-200  rounded-lg  w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
<div className="text-xs">
   <h2 className="text-3xl  mt-6 ml-5">CONTACT US</h2>
  
   <p className="mt-6 pt-5 text-xs ml-5 font-bold flex gap-2 underline">
   <FaPhone className="font-xs mt-1"/> CALL US +1.877.482.2430</p>
   <p className="text-xs ml-5 mt-2 ">Monday - Saturday from 9 AM to 11 PM (EST). <br />
   Sunday from 10 AM to 9 PM (EST).</p>
   <p className=" mt-6 ml-5 font-bold flex gap-2 underline pt-5"><FaWhatsapp className="mt-1 font-xs "/>WHATSAPP US</p>
   <p className="text-xs  ml-5 mt-2">Monday - Saturday from 9 AM to 8 PM (EST). <br />
   Sunday from 10 AM to 7 PM (EST).</p>
   <p className="mt-6 text-xs ml-5 font-bold flex gap-2 underline pt-5">
   <FaDotCircle className=" font-xs mt-1 " /> Live Chat</p>
   <p className="text-xs  ml-5 mt-2 ">Monday - Saturday from 9 AM to 11 PM (EST). <br />
   Sunday from 10AM to 9PM (EST).</p>
   <p className="mt-6 ml-5">Do you need further assistance?</p>

   </div>
</div>


  <div class="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-black  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><IoBagOutline/></button>
      

<button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
 <IoPersonOutline/>
</button>

<div id="dropdownDotsHorizontal" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-4/12 dark:bg-gray-700 dark:divide-gray-600">
    <ul class="py-2 text-lg text-black-700 dark:text-black-200" aria-labelledby="dropdownMenuIconHorizontalButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">SIGN IN</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">MY ORDERS</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ACCOUNT SETTINGS</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> ADRESS BOOK</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> WALLET</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> SAVED ITEMS</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> MY APPOINTMENTS</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
    </div>
</div>

<button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" class="text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><CiSearch/> <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdownSearch" class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700 w-7/12">
    <div class="p-3">
      <p className="text-xs">what are you looking for ?</p>
      <label for="input-group-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <div className="grid  grid-cols-2 gap-4">
          <div className=""><input type="text" id="input-group-search" class="flex block w-full p-2  ps-10 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-100" placeholder="Search user"/>
          </div>
          <div className=""><button className="mt-2 text-sm underline underline-offset-4">CANCEL</button></div>
        </div>
        
      </div>
    </div>
 <div className=" grid grid-cols-3 gap-4 mt-6">
  <div className=" text-xs ml-3 " >
    <p className="flex  "> TRENDING SEARCH</p>
    <p className="flex mt-4 gap-1 font-serif  underline underline-offset-2"><CiSearch className=""/> Handbags</p>
    <p className="flex mt-2 gap-1 font-serif  underline underline-offset-2"><CiSearch /> Shoes</p>
    <p className="flex mt-2 gap-1 font-serif  underline underline-offset-2"><CiSearch /> Belts</p>
    <p className="flex mt-2 gap-1 font-serif underline underline-offset-2"><CiSearch /> Bags</p> <br /><br /><br /><br /><br /><br />
  </div>
  <div className="text-xs "> 
    <p className="font-serif ">WHATS NEW ?</p>
    <p className="flex mt-4 gap-1 font-serif underline underline-offset-2 "><CiSearch/> Women</p>
    <p className="flex mt-2 gap-1 font-serif underline underline-offset-2"><CiSearch/>  Men</p>
  </div>
  </div> 
    
</div>



       
      
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <p className="text-5xl font-serif tracking-wide">GUCCI</p>
      </li>
     
    </ul>
  </div>
  </div>
</nav>

    </>)
}
export default Navbar;