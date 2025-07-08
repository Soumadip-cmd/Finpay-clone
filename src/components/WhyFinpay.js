import { ArrowLeftRight } from "lucide-react";

export default function WhyFinpay() {
  return (
    <section className="bg-white py-16 px-6 md:px-20" id="why-us">
      <div className="text-center mb-14">
        <p className="text-sm text-teal-700 font-medium uppercase tracking-widest">WHY US</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-2">Why they prefer Finpay</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-[#F3F8FA] rounded-2xl p-10">
          <h3 className="text-6xl font-bold text-[#1F9CA9] mb-4">3k+</h3>
          <p className="text-xl text-gray-900 font-medium leading-snug">
            Businesses already running <br /> on Finpay
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F3F8FA] rounded-2xl p-10 flex flex-col justify-between">
          <p className="text-xl text-gray-900 font-medium leading-snug mb-8">
            Instant Withdraw your funds <br /> at any time
          </p>
          <div className="flex items-center gap-6 mt-auto">
            <div className="bg-[#1F9CA9] p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M4 2L20 12L4 22V2Z" />
              </svg>
            </div>
            <ArrowLeftRight className="text-gray-500 w-6 h-6" />
            <div className="bg-[#001E3C] p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
