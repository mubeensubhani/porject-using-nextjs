import Link from "next/link";
import Image from "next/image";

import civic from "../public/images/civic.png";
export default function Home() {
    return (
      <div className="flex flex-col items-center bg-emerald-200 min-h-screen">

<Link href="/component/honda/civic" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              <Image src="/images/civic.png" alt="Civic Image" width={400} height={200} />
              <h2 className="text-xl font-bold text-emerald-900 mb-2">
            HONDA CIVIC
          </h2>
              </a>
            </Link>


        </div>
    )
}