
import { MapPin, BedDouble, Bath } from "lucide-react";
import Image from "next/image";

const homes = [
    {
        image: "photo-1600596542815-ffad4c1539a9",
        price: "$659,000",
        address: "Luxury Family Residence",
        beds: 4,
        baths: 3,
    },
    {
        image: "photo-1600607687939-ce8a6c25118c",
        price: "$650,000",
        address: "Modern Contemporary Home",
        beds: 3,
        baths: 3,
    },
    {
        image: "photo-1600607687920-4e2a09cf159d",
        price: "$661,900",
        address: "Elegant Modern Residence",
        beds: 4,
        baths: 4,
    },
];

export default function RecommendedProperties() {
    return (
        <section id="recommended-properties" className="scroll-mt-24 border-t border-gray-200 py-9 sm:py-10">
            <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                    <h2 className="text-xl font-bold tracking-tight">Recommended for you</h2>
                    <p className="mt-2 text-sm text-gray-500">Similar homes near Harrisburg, PA</p>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {homes.map((home) => (
                    <article
                        key={home.address}
                        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                            <Image
                                src={`https://images.unsplash.com/${home.image}?w=700`}
                                alt={home.address}
                                fill
                                sizes="(max-width: 640px) 100vw, 33vw"
                                loading="lazy"
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl font-bold">{home.price}</h3>
                            <p className="mt-1 text-sm font-semibold">{home.address}</p>
                            <p className="mt-2 flex items-center gap-1 text-xs text-gray-400">
                                <MapPin size={13} /> Harrisburg, Pennsylvania
                            </p>

                            <div className="mt-4 flex gap-4 border-t pt-3 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                    <BedDouble size={15} /> {home.beds} Beds
                                </span>
                                <span className="flex items-center gap-1">
                                    <Bath size={15} /> {home.baths} Baths
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
