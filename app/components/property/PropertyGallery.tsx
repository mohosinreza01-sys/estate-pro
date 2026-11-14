"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera, Heart, Share2, X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop",
];

const address = "4430 Brighton Ct, Harrisburg, PA 17112";

export default function PropertyGallery() {
  const [isSaved, setIsSaved] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const photoDialog = useRef<HTMLDialogElement>(null);

  async function shareListing() {
    const shareData = {
      title: "4430 Brighton Ct | Zenvia Real Estate",
      text: `Take a look at this home at ${address}.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage("Listing shared.");
        return;
      }

      await navigator.clipboard.writeText(shareData.url);
      setShareMessage("Listing link copied.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
      setShareMessage("Unable to share the listing. Please copy the page URL.");
    }
  }

  return (
    <section aria-label="Property photos">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          Home <span className="px-1 text-gray-300">/</span> For Sale
          <span className="px-1 text-gray-300">/</span> Pennsylvania
          <span className="px-1 text-gray-300">/</span> Harrisburg
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-pressed={isSaved}
            onClick={() => setIsSaved((saved) => !saved)}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-[#084477] hover:text-[#084477] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
          >
            <Heart
              size={16}
              fill={isSaved ? "currentColor" : "none"}
              aria-hidden="true"
            />
            {isSaved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            onClick={shareListing}
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 transition hover:border-[#084477] hover:text-[#084477] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084477]"
          >
            <Share2 size={16} aria-hidden="true" />
            Share
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {shareMessage}
      </p>

      <div className="grid h-[320px] grid-cols-2 grid-rows-2 gap-2 overflow-hidden rounded-2xl bg-gray-100 sm:h-[400px] sm:grid-cols-4">
        <div className="relative col-span-2 row-span-1 overflow-hidden sm:row-span-2">
          <Image
            src={images[0]}
            alt="Bright, open living room in the featured property"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 66vw"
            className="object-cover transition duration-500 hover:scale-[1.03]"
          />
          <button
            type="button"
            onClick={() => photoDialog.current?.showModal()}
            className="absolute bottom-3 right-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-white/95 px-3 text-sm font-semibold text-gray-800 shadow-md backdrop-blur transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Camera size={16} aria-hidden="true" />
            View {images.length} photos
          </button>
        </div>

        {images.slice(1).map((image, index) => (
          <div
            key={image}
            className={`relative overflow-hidden ${index > 1 ? "hidden sm:block" : ""}`}
          >
            <Image
              src={image}
              alt={`Property interior photo ${index + 2}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      <dialog
        ref={photoDialog}
        aria-label="Property photo gallery"
        className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-[1000px] overflow-y-auto rounded-2xl p-0 shadow-2xl backdrop:bg-black/70"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4">
          <div>
            <h2 className="font-semibold text-gray-900">Property photos</h2>
            <p className="mt-0.5 text-xs text-gray-500">
              {images.length} photos
            </p>
          </div>
          <form method="dialog">
            <button
              type="submit"
              aria-label="Close photo gallery"
              className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#084477]"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </form>
        </div>
        <div className="grid gap-3 bg-gray-50 p-4 sm:grid-cols-2 sm:p-6">
          {images.map((image, index) => (
            <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={`Property photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </dialog>
    </section>
  );
}
