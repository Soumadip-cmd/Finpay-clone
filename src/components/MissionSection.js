import React from "react";

const MissionSection = () => {
  return (
    <section className="text-center py-20 bg-white">
      <p className="text-sm text-[#147389] font-medium uppercase tracking-wide mb-2">
        Our Mission
      </p>
      <h2 className="text-4xl font-semibold text-gray-900 mb-2">
        We’ve helped <br className="md:hidden" />
        <span className="font-semibold">innovative companies</span>
      </h2>
      <p className="text-gray-500 text-lg max-w-xl mx-auto mb-12">
        Hundreds of all sizes and across all industries <br className="hidden md:block" />
        have made a big improvements with us.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
        <div>
          <h3 className="text-4xl font-bold text-[#0B1232]">24%</h3>
          <p className="text-gray-600 mt-2">Revenue business</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#0B1232]">180K</h3>
          <p className="text-gray-600 mt-2">In annual revenue</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-[#0B1232]">10+</h3>
          <p className="text-gray-600 mt-2">Months of runway</p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
