
import {
    BedDouble,
    Bath,
    Maximize,
    MapPin,
} from "lucide-react";

const stats = [
    { icon: BedDouble, value: "4", label: "Beds" },
    { icon: Bath, value: "4", label: "Baths" },
    { icon: Maximize, value: "3,824", label: "Sqft" },
];

export default function PropertyOverview() {
    return (
        <section className="border-b border-[#e6dfd0] py-7 sm:py-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d6c594] bg-[#f2ecdc] px-3 py-1 text-xs font-semibold text-[#765f2f]">
                        <span className="h-2 w-2 rounded-full bg-[#a98b4d]" aria-hidden="true" />
                        House for sale
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight text-[#173a2b] sm:text-4xl">
                        $659,000
                    </h1>

                    <p className="mt-2 flex items-center gap-1.5 text-sm text-[#777465]">
                        <MapPin size={15} className="text-[#927747]" aria-hidden="true" />
                        4430 Brighton Ct, Harrisburg, PA 17112
                    </p>
                </div>

                <div className="flex w-full justify-between gap-3 sm:w-auto sm:gap-7">
                    {stats.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="min-w-[72px] text-center">
                            <Icon className="mx-auto mb-2 text-[#927747]" size={21} aria-hidden="true" />
                            <p className="text-lg font-semibold text-[#173a2b] sm:text-xl">{value}</p>
                            <p className="text-xs text-[#777465]">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 rounded-2xl border border-[#e8e1d2] bg-[#f5f2e8] p-4 text-sm sm:grid-cols-4 sm:p-5">
                <div>
                    <p className="text-xs text-[#858174]">Est. payment</p>
                    <p className="mt-1 font-semibold">$4,370/mo</p>
                </div>
                <div>
                    <p className="text-xs text-[#858174]">Property type</p>
                    <p className="mt-1 font-semibold leading-5">Single Family Residence</p>
                </div>
                <div>
                    <p className="text-xs text-[#858174]">Year built</p>
                    <p className="mt-1 font-semibold">2018</p>
                </div>
                <div>
                    <p className="text-xs text-[#858174]">Lot size</p>
                    <p className="mt-1 font-semibold">0.36 Acres</p>
                </div>
            </div>
        </section>
    );
}
