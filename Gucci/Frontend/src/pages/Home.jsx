import { useEffect } from 'react';
import hm from'../assets/Home.jpg'
import Pics from '../component/Pics';
import GucciLayout from '../layout/GucciLayout';
import {gsap} from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
const Home=()=>{
    gsap.registerPlugin(useGSAP);

    const container = useRef();
    
    useGSAP(
        () => {
            // gsap code here...
            gsap.to('#h1', { y:-5, duration:1,scale:2 }); // <-- automatically reverted
        },
        { scope: container }
    );

    return(
    <GucciLayout>

<div id='page' className='' ref={container}>
    <img src={hm} alt="" className='h-full brightness-90'/>
    <h1 id='h1' className='absolute  bottom-20 h-16 left-1/3 text-white  text-5xl text-3xl font-serif'>Gucci Tennis Collection</h1>
    <div  className='flex '>
    <button id='btn' type="button" class="text-black bg-white  focus:ring-4  font-medium  text-sm px-5 py-2.5 me-2 mb-2 absolute  bottom-4 left-1/2">FOR HER</button>
    <button id='btn' type="button" class="text-black bg-white  focus:ring-4  font-medium  text-sm px-5 py-2.5 me-2 mb-2 absolute  bottom-4 right-1/2">FOR HIM</button>
    </div>
</div>
<Pics/>







    
        </GucciLayout>

    )
}
export default Home;