import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#f7fbfc] border-t border-[#e5ecec] pt-8 sm:pt-10 pb-3 sm:pb-4 px-2 sm:px-4 md:px-16 lg:px-32 text-[#22343d]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo */}
        <div className="mb-4 sm:mb-6 md:mb-0 flex-shrink-0 flex items-center justify-center md:justify-start">
          <img src='./logo.png' alt="Finpay Logo" className="h-8 sm:h-10 mr-2" />
        </div>
        {/* Navigation Columns */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-16 md:gap-32 w-full md:w-auto items-center md:items-start justify-center md:justify-between text-center sm:text-left">
          <div>
            <h3 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Solutions</h3>
            <ul className="space-y-1 text-[#6b7a87] text-sm sm:text-base">
              <li>Small Bussiness</li>
              <li>Freelancers</li>
              <li>Customers</li>
              <li>Taxes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Company</h3>
            <ul className="space-y-1 text-[#6b7a87] text-sm sm:text-base">
              <li>About Us</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">Learn</h3>
            <ul className="space-y-1 text-[#6b7a87] text-sm sm:text-base">
              <li>Blog</li>
              <li>Ebooks</li>
              <li>Guides</li>
              <li>Templates</li>
            </ul>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end gap-1 sm:gap-2 mt-4 md:mt-0">
          <span className="text-[#6b7a87] mb-1 sm:mb-2 text-sm sm:text-base">Follow us on</span>
          <div className="flex gap-2 sm:gap-3">
            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="hover:opacity-70">
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#22343d"/><path fill="#fff" d="M20.1 11.1c.01.15.01.3.01.45 0 4.6-3.5 9.9-9.9 9.9-1.97 0-3.8-.58-5.34-1.58.27.03.54.05.82.05 1.64 0 3.15-.56 4.35-1.5-1.53-.03-2.82-1.04-3.27-2.43.21.04.43.07.66.07.32 0 .63-.04.92-.12-1.6-.32-2.8-1.74-2.8-3.44v-.04c.47.26 1.01.42 1.58.44-.94-.63-1.56-1.7-1.56-2.91 0-.64.17-1.24.47-1.76 1.7 2.08 4.25 3.45 7.12 3.6-.06-.26-.09-.53-.09-.8 0-1.95 1.58-3.53 3.53-3.53 1.02 0 1.94.43 2.59 1.12.81-.16 1.57-.45 2.26-.86-.27.84-.84 1.54-1.58 1.98.72-.09 1.41-.28 2.05-.57-.48.72-1.09 1.36-1.8 1.87z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#22343d"/><path fill="#fff" d="M10.5 19h-2.5v-7h2.5v7zm-1.25-8.1c-.8 0-1.3-.53-1.3-1.2 0-.68.52-1.2 1.33-1.2.8 0 1.3.52 1.3 1.2 0 .67-.5 1.2-1.33 1.2zm9.25 8.1h-2.5v-3.6c0-.9-.32-1.5-1.13-1.5-.62 0-.99.42-1.15.83-.06.15-.08.36-.08.57v3.7h-2.5s.03-6 0-7h2.5v1c.33-.5.92-1.2 2.25-1.2 1.64 0 2.87 1.07 2.87 3.37v3.83z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:opacity-70">
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#22343d"/><path fill="#fff" d="M15.7 19v-4.1h1.4l.2-1.6h-1.6v-1c0-.5.1-.8.8-.8h.8v-1.5c-.1 0-.6-.1-1.2-.1-1.6 0-2.2.7-2.2 2v1.4h-1.1v1.6h1.1V19h2.1z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e5ecec] mt-6 sm:mt-8 pt-3 sm:pt-4 text-center text-[#6b7a87] text-xs sm:text-sm">
        ©Finpay 2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
