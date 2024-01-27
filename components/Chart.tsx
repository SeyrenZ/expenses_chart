"use client";
import { LogoIcon } from "@/public";
import React, { useState, useEffect } from "react";

interface MoneyItem {
  amount: number;
}

const Chart = () => {
  const [divHover, setDivHover] = useState(-1);
  const [moneyValue, setMoneyValue] = useState<MoneyItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const query = await fetch("/data.json");
      const response = await query.json();
      console.log(response);
      setMoneyValue(response);
    } catch (error) {
      console.error("Error fetching JSON data", error);
    }
  };

  const minAmount = Math.min(...moneyValue.map((item) => item.amount));
  const maxAmount = Math.max(...moneyValue.map((item) => item.amount));

  const heightRatio = 7 / (maxAmount - minAmount);

  return (
    <div className="w-[570px] sm:w-[370px]  flex flex-col gap-y-5">
      {/* My Balance div */}
      <div className="w-full h-28 p-8 rounded-xl bg-[#eb755d] flex items-center justify-between">
        <div className="flex flex-col gap-y-1.5">
          <div className="text-sm text-white">My balance</div>
          <div className="text-3xl sm:text-2xl text-white font-semibold">
            $921.48
          </div>
        </div>
        <LogoIcon />
      </div>
      {/* Chart div */}
      <div className="w-full h-auto p-8 rounded-xl bg-[#fffaf5] flex flex-col gap-y-4">
        <div className="text-2xl font-bold text-[#382314]">
          Spending - Last 7 Days
        </div>
        {/* Chart */}
        <div className="w-auto flex items-end justify-center gap-x-4 sm:gap-x-2">
          {moneyValue.map((item: any, index: any) => (
            <div key={index} className="flex flex-col items-center gap-y-1">
              <div className="h-58 flex flex-col items-center gap-y-2">
                <div
                  className={`w-14 sm:w-10 p-2 sm:p-1 rounded-md text-sm sm:text-[10px] text-white bg-[#382314] flex item-center justify-center ${
                    index == divHover ? "opacity-100" : "opacity-0"
                  }`}
                >
                  ${item.amount}
                </div>
                <div
                  className={`w-14 sm:w-10 rounded-lg ${
                    item.amount === maxAmount ? "bg-[#76b5bc]" : "bg-[#eb755d]"
                  }`}
                  style={{
                    background: "",
                    height: `${(item.amount + minAmount) * heightRatio}rem`,
                    opacity: 1,
                    transition: "height 0.3s ease, opacity 0.3s ease",
                  }}
                  onMouseEnter={() => setDivHover(index)}
                  onMouseLeave={() => setDivHover(-1)}
                ></div>
              </div>

              <div className="text-sm text-[#93867b]">{item.day}</div>
            </div>
          ))}
        </div>
        {/* Total balance this month */}
        <div className="my-4">
          <hr />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <div className="text-md text-[#93867b]">Total this month</div>
            <div className="text-4xl sm:text-3xl font-bold text-[#382314]">
              $478.33
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg sm:text-[15px] font-bold text-[#382314] text-right leading-4">
              +2.4%
            </div>
            <div className="text-md sm:text-[14px] text-[#93867b]">
              from last month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
