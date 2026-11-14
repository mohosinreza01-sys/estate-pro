
import { TrendingUp } from "lucide-react";

export default function MarketAnalysis() {
    return (
        <section className="border-t border-gray-200 py-8 sm:py-10">
            <h2 className="text-xl font-bold tracking-tight">Market insights</h2>

            <p className="mt-2 text-sm text-gray-500">
                Understand the local housing market.
            </p>

            <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-gray-500">Estimated home value</p>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight">$659,000</h3>
                        <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                            <TrendingUp size={15} /> 5.8% over last year
                        </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                        Growing market
                    </span>
                </div>

                <div className="mt-6 rounded-xl bg-gray-50 px-2 pt-3">
                    <svg
                        viewBox="0 0 600 160"
                        className="w-full"
                        fill="none"
                        role="img"
                        aria-label="Estimated home values have trended upward over the past year"
                    >
                        <path
                            d="M0 125 C60 110 90 130 140 85 S220 110 270 65 S350 100 410 45 S510 65 600 15"
                            stroke="#16a34a"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M0 145 C80 130 120 140 180 115 S280 135 340 90 S470 110 600 75"
                            stroke="#eab308"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="5 5"
                        />
                        <path
                            d="M0 125 C60 110 90 130 140 85 S220 110 270 65 S350 100 410 45 S510 65 600 15 L600 160 L0 160Z"
                            fill="#16a34a"
                            opacity=".07"
                        />
                    </svg>
                </div>

                <div className="flex justify-between px-2 pb-3 text-[11px] text-gray-400 sm:text-xs">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span>Dec</span>
                </div>
            </div>
        </section>
    );
}
