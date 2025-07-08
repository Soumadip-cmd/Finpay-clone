import React, { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src="logo.png" alt="Logo" className="h-8 sm:h-12 lg:h-[3.7rem] mr-4 sm:mr-8 lg:mr-[46px]" />

              {/* Navigation - Hidden on mobile */}
              <nav className="hidden md:flex space-x-6 lg:space-x-10">
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 font-semibold text-sm lg:text-base"
                >
                  Products
                </a>
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 font-semibold text-sm lg:text-base"
                >
                  Customers
                </a>
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 font-semibold text-sm lg:text-base"
                >
                  Pricing
                </a>
                <a
                  href="/"
                  className="text-gray-700 hover:text-gray-900 font-semibold text-sm lg:text-base"
                >
                  Learn
                </a>
              </nav>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-gray-700 hover:text-gray-900 p-2 relative z-50"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>

            {/* Auth buttons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 p-4 lg:p-8">
              <button className="text-gray-700 border border-gray-300 px-4 lg:px-10 py-2 lg:py-3 rounded-xl hover:text-gray-900 hover:border-gray-400 font-medium text-sm lg:text-lg transition-colors">
                Login
              </button>
              <button className="bg-teal-500 text-white px-4 lg:px-10 py-2 lg:py-3 rounded-xl hover:bg-teal-600 font-medium text-sm lg:text-lg transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6 pt-20">
            {/* Navigation Links */}
            <nav className="space-y-6">
              <a
                href="/"
                className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Products
              </a>
              <a
                href="/"
                className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Customers
              </a>
              <a
                href="/"
                className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              <a
                href="/"
                className="block text-gray-700 hover:text-gray-900 font-semibold text-lg py-3 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Learn
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="mt-8 space-y-4">
              <button className="w-full text-gray-700 border border-gray-300 px-6 py-3 rounded-xl hover:text-gray-900 hover:border-gray-400 font-medium text-lg transition-colors">
                Login
              </button>
              <button className="w-full bg-teal-500 text-white px-6 py-3 rounded-xl hover:bg-teal-600 font-medium text-lg transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Get paid early
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] leading-[1] font-semibold text-gray-800">
                save automatically
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] leading-[1] font-semibold text-gray-800">
                all your pay.
              </p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-6 lg:mt-[20px] text-gray-600 leading-relaxed">
              Supports small businesses with simple invoicing, powerful
              integrations, and cash flow management tools.
            </p>

            {/* Email signup */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 relative max-w-lg mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base sm:text-lg"
              />
              <button className="bg-teal-600 sm:absolute sm:right-[1px] sm:top-[2.6px] text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl hover:bg-teal-700 font-medium text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3">
                <span>Get Started</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Partner logos */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 lg:space-x-12 pt-8 sm:pt-10 lg:pt-12">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Klarna.</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">coinbase</div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 flex items-center">
                <span className="text-teal-600 mr-1">★</span>instacart
              </div>
            </div>

            {/* Mobile Auth buttons - Removed since they're now in the hamburger menu */}
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Phone container */}
              <div className="w-full">
                {/* Phone screen */}
                <div className="bg-gray-100 p-3 sm:p-4 lg:p-6 rounded-lg lg:rounded-none lg:bg-transparent lg:p-0">
                  {/* Credit card */}
                  <img
                    src="assets/front_img1.png"
                    alt="front"
                    className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-none lg:h-[500px] lg:w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

