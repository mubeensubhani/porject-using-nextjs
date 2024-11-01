import Link from "next/link";
import Image from "next/image";
import toyotaLogo from "../public/images/logotoyota.png";
import hondaLogo from "../public/images/logohonda.png";
import suzukiLogo from "../public/images/logosuzuki.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-emerald-200 min-h-screen">

      {/* First Row */}
      <h2 className="flex w-full justify-center text-xl font-bold text-emerald-950 mb-4">PURCHASE NEW</h2>
      <div className="flex w-full justify-center mb-4">
        <div className="bg-emerald-600 h-60 w-8/12 flex flex-col justify-center items-center rounded-lg p-4">
          <h2 className="text-xl font-bold text-emerald-900 mb-4">SELECT</h2>
          <div className="flex space-x-4 mb-5">
            <Link href="/component/toyota" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={toyotaLogo} alt="Toyota Logo" className="w-20 h-20 mr-6" />
              </a>
            </Link>
            <Link href="/component/honda" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={hondaLogo} alt="Honda Logo" className="w-20 h-20 mr-6" />
              </a>
            </Link>
            <Link href="/component/suzuki" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Image src={suzukiLogo} alt="Suzuki Logo" className="w-20 h-20 mr-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>


      {/* Second Row */}
      <div>
      <h2 className="flex w-full justify-center text-xl font-bold text-emerald-900 mb-4">OR</h2>
      <div className="flex w-full justify-center mb-4">
      
        <div className="bg-emerald-600 h-60 w-80 flex flex-col justify-center items-center mx-20 rounded-lg p-4 text-white">
          <h2 className="text-xl font-bold text-emerald-950 mb-2">
            Post Your Ad On Wheel Deal
          </h2>
          <ul className="text-white text-sm space-y-1">
            <li className="flex items-center">
              <span className="mr-2">✓</span> Post your Ad in 3 Easy Steps
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span> Get Genuine Offer from Verified Buyers
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span> Sell your car Fast at the Best Price
            </li>
          </ul>
          
        </div>
        <div className="bg-emerald-600 h-60 w-80 flex flex-col justify-center items-center mx-20 rounded-lg p-4 text-white">
          <h2 className="text-xl font-bold text-emerald-950 mb-2">
            Try Wheel Deal Sell It For Me
          </h2>
          <ul className="text-white text-sm space-y-1">
            <li className="flex items-center">
              <span className="mr-2">✓</span> Dedicated Sales Expert to sell your Car
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span> We Bargain for You and Share the Best Offer
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span> We Ensure Safe & Secure Transaction
            </li>
          </ul>
        </div>
      </div>

    </div>
    </div>
  );
}
