export default Header;
import link from "next/link"
import Image from "next/image";


function Header(){
    return(
        <div>
            <nav className="flex w-full bg-emerald-800 h-18">
           
           

<div className="flex justify end item centre w-8/12 "></div>
                
<div className="bg-emerald-600 h-10 w-44 rounded-lg p-4 flex justify-center items-center"> New Car</div>
<div className="bg-emerald-500 h-10 w-44 rounded-lg p-4 flex justify-center items-center">Used Car</div>
<div className="bg-emerald-600 h-10 w-44 rounded-lg p-4 flex justify-center items-center">Bike</div>
<div className="bg-emerald-500 h-10 w-44 rounded-lg p-4 flex justify-center items-center">Auto Store</div>
<div className="bg-emerald-600 h-10 w-44 rounded-lg p-4 flex justify-center items-center">Video</div>
<div className="bg-emerald-500 h-10 w-44 rounded-lg p-4 flex justify-center items-center">More</div>

            
            </nav>
        </div>


    )
}

