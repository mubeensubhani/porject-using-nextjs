import Link from "next/link";
import Image from "next/image";

import corolla from "../public/images/corolla.jpg";
export default function Home() {
    return (
      <div className="flex flex-col items-center bg-emerald-200 min-h-screen">

<Link href="/component/toyota/corolla" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              <Image src="/images/corolla.jpg" alt="Corolla Image" width={400} height={200} />
              <h2 className="text-xl font-bold text-emerald-900 mb-2">
            TOYOTA COROLLA
          </h2>
              </a>
            </Link>


        </div>
    )
}