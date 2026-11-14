export type FeaturedProperty = {
  id: string;
  title: string;
  address: string;
  city: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
};

export const featuredProperties: FeaturedProperty[] = [
  {
    id: "brighton-ct",
    title: "Brighton Court Residence",
    address: "4430 Brighton Ct",
    city: "Harrisburg, PA",
    price: "$659,000",
    beds: 4,
    baths: 4,
    sqft: "3,824",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&auto=format&fit=crop",
  },
  {
    id: "willow-brook",
    title: "Willow Brook Modern",
    address: "1670 Willow Brook Dr",
    city: "Mechanicsburg, PA",
    price: "$489,000",
    beds: 3,
    baths: 2,
    sqft: "2,460",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop",
  },
  {
    id: "meadow-view",
    title: "Meadow View House",
    address: "82 Meadow View Ln",
    city: "Camp Hill, PA",
    price: "$575,000",
    beds: 4,
    baths: 3,
    sqft: "2,980",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop",
  },
];