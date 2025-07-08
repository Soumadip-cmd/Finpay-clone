import React from 'react'

const TryitNow = () => {
  return (
    <div className="bg-[#07394A] rounded-3xl px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] mx-auto shadow-lg my-10 sm:my-14 md:my-16 lg:my-20 gap-8 md:gap-0">
      <div className="mb-6 sm:mb-8 md:mb-0 w-full md:w-auto">
        <div className="text-[#7AC0C8] text-xs sm:text-sm font-medium mb-1 sm:mb-2 tracking-widest">TRY IT NOW</div>
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium leading-[1.3] sm:leading-[1.5] md:leading-[2] mb-4 sm:mb-6">
          Ready to level up your<p className='mt-1 sm:mt-2'>payment process?</p>
        </h2>
        <p className="text-[#A3C2CC] text-sm sm:text-base max-w-full sm:max-w-xl">
          Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full md:w-auto justify-start md:justify-end">
        <button className="bg-[#2a8e9e] hover:bg-[#3196a8] text-white text-base sm:text-lg font-medium px-6 sm:px-10 py-3 sm:py-4 rounded-2xl transition-colors duration-200 shadow-md w-full sm:w-auto">
          Get Started Now
        </button>
        <button className="border border-[#2d5c6d] text-white text-base sm:text-lg font-medium px-6 sm:px-10 py-3 sm:py-4 rounded-2xl flex items-center gap-2 hover:bg-[#0b4c5e] transition-colors duration-200 w-full sm:w-auto justify-center">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L6.75 17.25M17.25 6.75h-7.5M17.25 6.75v7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TryitNow
