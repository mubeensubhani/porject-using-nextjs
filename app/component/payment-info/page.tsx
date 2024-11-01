import Link from "next/link";

export default function PaymentInfo() {
  return (
    <div className="flex flex-col bg-emerald-200 min-h-screen">
      <form className="mt-4 flex gap-5 justify-center items-center flex-col">
        <input
          type="text"
          className="p-2 rounded-2xl w-2/5 border border-black"
          placeholder="Enter your Name"
          required
        />
        <input
          type="email"
          className="p-2 rounded-2xl w-2/5 border border-black"
          placeholder="Enter your Email"
          required
        />
        <input
          type="text"
          className="p-2 rounded-2xl w-2/5 border border-black"
          placeholder="Enter your Payment Option (Cash/Payorder)"
          required
        />
        <Link href="/component/greeting" legacyBehavior>
          <button type="submit" className="py-3 px-7 rounded-lg bg-blue-500 text-white">
            PROCEED
          </button>
        </Link>
      </form>
    </div>
  );
}

  