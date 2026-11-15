
import { ChevronDown } from "lucide-react";

const features = [
    ["Property type", "Single Family Residence"],
    ["Heating", "Forced Air"],
    ["Cooling", "Central Air"],
    ["Parking", "2 Car Garage"],
    ["Flooring", "Hardwood"],
    ["Construction", "Custom Homes"],
    ["Roof", "Asphalt Shingle"],
    ["Lot size", "0.36 Acres"],
];

export default function PropertyFeatures() {
    return (
        <section id="property-details" className="scroll-mt-24 py-8">
            <h2 className="text-xl font-semibold tracking-tight text-[#173a2b]">Property details</h2>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-[#e5dece] bg-[#fbf9f2] p-4 sm:grid-cols-4 sm:p-5">
                {features.map(([label, value]) => (
                    <div key={label}>
                        <p className="text-xs text-[#858174]">{label}</p>
                        <p className="mt-1 text-sm font-medium leading-5 text-[#29443c]">{value}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 border-t border-[#e9e3d6] pt-7">
                <h2 className="text-xl font-semibold tracking-tight text-[#173a2b]">What makes it special</h2>

                <div className="mt-5 flex flex-wrap gap-2">
                    {["Full patio", "Master bedroom", "Open concept",
                        "Updated kitchen", "Large walk-in pantry"].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-[#e5dece] bg-[#f2ecdc] px-3 py-2 text-xs font-medium text-[#765f2f]"
                            >
                                {item}
                            </span>
                        ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-[#626c62]">
                    Welcome to this beautiful custom-built home located in a
                    peaceful neighborhood. This stunning residence offers
                    spacious living areas, elegant interiors, modern finishes
                    and thoughtfully designed spaces for comfortable living.
                </p>

                <details className="group mt-2">
                    <summary className="flex w-fit cursor-pointer list-none items-center gap-1 rounded-sm text-sm font-semibold text-[#765f2f] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#927747] [&::-webkit-details-marker]:hidden">
                        Read full description
                        <ChevronDown size={16} className="transition group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[#626c62]">
                        The open-concept layout creates a welcoming atmosphere,
                        while large windows bring natural light throughout the home.
                        The modern kitchen, beautiful bedrooms and outdoor living
                        space make this property a wonderful place to call home.
                    </p>
                </details>
            </div>
        </section>
    );
}
