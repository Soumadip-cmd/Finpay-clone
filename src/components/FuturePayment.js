import React from "react";
import { RefreshCw, Building2, Shield } from "lucide-react";

const FuturePayment = () => {
  return (
    <div className="  bg-gray-100 px-4 py-8 md:px-8 lg:px-16">
      <section className="py-16 bg-white shadow-lg rounded-2xl  text-gray-900">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold uppercase text-gray-500 tracking-widest">
              FUTURE PAYMENT
            </h2>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">
              Experience that grows with your scale.
            </h1>
            <p className="mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
              Design a financial operating system that works for your business
              and streamlines cash flow management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl shadow-md bg-gray-50">
              <RefreshCw className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free transfers</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Create a financial experience and automate repeat purchases by
                scheduling recurring payments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl shadow-md bg-gray-50">
              <Building2 className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Multiple account</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Run your operations with cash from your account and generate
                yield on funds stored in your account.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl shadow-md bg-gray-50">
              <Shield className="w-8 h-8 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unmatched security</h3>
              <p className="text-base leading-relaxed text-gray-600">
                Securely manage your finances with organization-wide MFA,
                card-locking, and account-level controls.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuturePayment;
