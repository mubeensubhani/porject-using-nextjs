import Link from "next/link";
import Image from "next/image";

import cultus from "../public/images/cultus.png";
export default function Home() {
    return (
      <div className="flex flex-col items-center bg-emerald-200 min-h-screen">

<Link href="/component/suzuki/cultus" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              <Image src="/images/cultus.png" alt="Cultus Image" width={400} height={200} />
              <h2 className="text-xl font-bold text-emerald-900 mb-2">
            SUZUKI CULTUS
          </h2>
              </a>
            </Link>


        </div>
    )
}