import React, { useState } from "react";

interface VideoCarouselProps {
  sources: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ sources }) => {
  const [current, setCurrent] = useState(0);
  const total = sources.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex justify-center mb-2">
        <video
          className="w-full h-auto aspect-video rounded-lg"
          src={sources[current]}
          controls
          autoPlay
          muted
          loop
        />
      </div>
      <div className="flex gap-4 items-center">
        <button
          onClick={prev}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          ◀
        </button>
        <span>
          {current + 1} / {total}
        </span>
        <button
          onClick={next}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel; 