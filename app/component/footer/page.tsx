import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <nav className="flex w-full bg-emerald-800 h-18 justify-between items-center">
        <div className="flex justify-end items-center w-8/12"></div>
        
        <div className="bg-emerald-600 rounded-full p-3 px-6 flex justify-center items-center mx-2">
          <span className="text-white font-semibold text-sm text-center">THANK YOU PLEASE FOLLOW ME</span>
        </div>

        <div className="bg-emerald-600 rounded-full p-3 px-6 flex justify-center items-center mx-2">
          <a
            href="https://www.linkedin.com/in/mubeen-subhani-58b643284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-sm"
          >
            LINKED IN
          </a>
        </div>
      </nav>
    </div>
  );
}
