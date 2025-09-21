import React from 'react';

const Financials = () => {
  const revenueData = [
    { year: '2019-2020', amount: 113.78, color: 'bg-red-500' },
    { year: '2020-2021', amount: 102.82, color: 'bg-red-500' },
    { year: '2021-2022', amount: 145.03, color: 'bg-red-500' },
    { year: '2022-2023', amount: 107.57, color: 'bg-red-500' },
    { year: '2023-2024', amount: 107.70, color: 'bg-red-500' }
  ];

  const legendItems = [
    { label: 'Granite', color: 'bg-red-500' },
    { label: 'Quartz Slab', color: 'bg-orange-400' },
    { label: 'Other Calcareous', color: 'bg-yellow-400' },
    { label: 'Slate', color: 'bg-yellow-300' },
    { label: 'Marble', color: 'bg-orange-500' },
    { label: 'Travertine', color: 'bg-yellow-500' },
    { label: 'Other Stone', color: 'bg-yellow-400' },
    { label: 'Porcelain', color: 'bg-gray-300' }
  ];

  const maxRevenue = Math.max(...revenueData.map(d => d.amount));

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header */}
      <h1 className="text-4xl font-light text-center mb-8 tracking-wide">FINANCIALS</h1>
      
      {/* Subtitle */}
      <p className="text-sm text-gray-600 italic mb-8">
        The company is growing rapidly in the international market.
      </p>

      {/* Revenue List */}
      <div className="mb-8">
        {revenueData.map((item, index) => (
          <div key={index} className="mb-2 text-sm">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
            In {item.year} FY company achieved the turnover of{' '}
            <span className="font-semibold text-red-600">Rs. {item.amount} Cr.</span>
          </div>
        ))}
      </div>

      {/* Company Description */}
      <div className="mb-8 text-sm text-gray-700 leading-relaxed">
        <p className="mb-4">
          Company also have <span className="font-semibold">overseas offices</span> in various countries like{' '}
          <span className="font-semibold">USA, Mexico, Canada, UAE, Hong Kong, Vietnam, South Korea, China and Australia.</span>
        </p>
        <p>
          Company is continuously planning to open more overseas offices to capture the global market. Also Baba Quartz have planned to open its own warehouse and retail sales network in American Market.
        </p>
      </div>

      {/* Chart Section */}
      <div className="flex items-start gap-8">
        {/* Chart */}
        <div className="flex-1">
          <div className="space-y-4">
            {revenueData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-16 text-xs text-gray-600 text-right mr-4">
                  {item.year.split('-')[0]}
                </div>
                <div className="flex-1 relative">
                  {/* Base bar background */}
                  <div className="h-8 bg-gray-100 rounded relative overflow-hidden">
                    {/* Revenue segments - simplified to show mainly granite (red) with other colors */}
                    <div 
                      className="h-full bg-red-500 absolute left-0 top-0"
                      style={{ width: `${(item.amount / maxRevenue) * 70}%` }}
                    ></div>
                    <div 
                      className="h-full bg-orange-400 absolute top-0"
                      style={{ 
                        left: `${(item.amount / maxRevenue) * 70}%`,
                        width: `${(item.amount / maxRevenue) * 15}%` 
                      }}
                    ></div>
                    <div 
                      className="h-full bg-yellow-400 absolute top-0"
                      style={{ 
                        left: `${(item.amount / maxRevenue) * 85}%`,
                        width: `${(item.amount / maxRevenue) * 10}%` 
                      }}
                    ></div>
                    <div 
                      className="h-full bg-yellow-300 absolute top-0"
                      style={{ 
                        left: `${(item.amount / maxRevenue) * 95}%`,
                        width: `${(item.amount / maxRevenue) * 5}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between mt-4 text-xs text-gray-600 ml-20">
            <span>40M</span>
            <span>80M</span>
            <span>120M</span>
            <span>160M</span>
            <span>200M</span>
            <span>240M</span>
            <span>280M</span>
            <span>320M</span>
            <span>360M</span>
            <span>400M</span>
          </div>

          {/* Source */}
          <p className="text-xs text-gray-500 mt-4 ml-20">
            Source: U.S. International Trade Commission Harmonized Tariff Schedule Analysis
          </p>
        </div>

        {/* Legend */}
        <div className="w-48">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {legendItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${item.color}`}></div>
                <span className="text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;