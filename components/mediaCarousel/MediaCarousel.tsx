"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

export type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

// Thumbnail strip component
function ThumbnailStrip({
  items,
  current,
  onSelect,
}: {
  items: MediaItem[];
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide bg-gray-100 py-2">
      <div className="flex gap-2 px-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onSelect(index)}
            className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-200 ${
              current === index
                ? "border-blue-500 ring-2 ring-blue-200"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
              />
            ) : (
              <div className="w-full h-full relative">
                <video
                  src={item.src}
                  poster={item.poster}
                  className="w-full h-full object-contain"
                  muted
                />
                {/* Icône play en overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play size={14} className="text-white" />
                </div>
              </div>
            )}
            {current === index && (
              <div className="absolute inset-0 bg-blue-500/20" />
            )}
          </button>
        ))}
      </div>

      {/* style custom pour cacher scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default function MediaCarousel({ media }: { media: MediaItem[] }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const next = () => {
    pauseVideo();
    setCurrent((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    pauseVideo();
    setCurrent((prev) => (prev - 1 + media.length) % media.length);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const item = media[current];

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Media principal */}
      <div className="relative w-full aspect-video bg-black">
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
          />
        ) : (
          <video
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            className="w-full h-full object-contain"
            muted={isMuted}
            playsInline
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />
        )}

        {/* Overlay buttons (video only) */}
        {item.type === "video" && (
          <>
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-black/30 transition"
            >
              {!isPlaying && (
                <div className="bg-black/70 rounded-full p-4">
                  <Play size={32} className="text-white ml-1" />
                </div>
              )}
            </button>

            <button
              onClick={toggleMute}
              className="absolute bottom-4 left-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </>
        )}

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        >
          <ChevronRight size={20} />
        </button>

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-md text-xs">
          {current + 1} / {media.length}
        </div>
      </div>

      {/* Thumbnail strip component */}
      <ThumbnailStrip
        items={media}
        current={current}
        onSelect={(i) => {
          pauseVideo();
          setCurrent(i);
        }}
      />
    </div>
  );
}
