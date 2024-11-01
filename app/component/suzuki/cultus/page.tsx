import Link from "next/link";
import Image from "next/image";
import cultus from "../public/images/cultusspecs.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-emerald-200 min-h-screen">

      <a target="_blank" rel="noopener noreferrer">
        <Image src="/images/cultusspecs.png" alt="Cultus Image" width={800} height={500} />
        <h2 className="text-xl font-bold text-emerald-900 mb-2">
          SUZUKI CULTUS
        </h2>
      </a>

      {/* BUY NOW Button */}
      <Link href="/component/payment-info" passHref>
        <button className="bg-emerald-600 text-white rounded-full px-8 py-4 mt-8 font-bold shadow-lg hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
      </Link>
    </div>
  );
}
