import Navbar from "../component/Navbar";
import Pics from "../component/Pics";


function GucciLayout(props){
    return( 
        <>
        <div className="container-fluid">

            
                <div >
                  <Navbar/>

                  {props.children}
                </div>

            
                </div>

              
    
    </>)
}
export default GucciLayout;