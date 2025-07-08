
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 200000 },
  { name: 'Feb', value: 500000 },
  { name: 'Mar', value: 800000 },
  { name: 'Apr', value: 1000000 },
  { name: 'May', value: 1500000 },
  { name: 'Jun', value: 1876580 },
];

export default function NoAssetVolatility() {
  return (
    <div className='bg-white px-4 py-8 md:px-8 lg:px-16'>
    <section className="bg-[#F3F8FA] p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">No asset volatility</h2>
        <p className="text-gray-500 text-lg leading-relaxed">
          Generate returns on your <br />
          cash reserves without making <br />
          any investments.
        </p>
      </div>

      {/* Right Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-gray-500">Summary</p>
            <p className="text-2xl font-semibold text-gray-900">$1,876,580</p>
          </div>
          <button className="text-sm text-gray-500">6 Months ▼</button>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#94A3B8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#14B8A6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
    </div>
  );
}
