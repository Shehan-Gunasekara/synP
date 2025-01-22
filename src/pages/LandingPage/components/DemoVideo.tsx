import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
const demoVideos = [
  {
    id: 1,
    url: "/samples/black_girl.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 2,
    url: "/samples/speaker.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 3,
    url: "/samples/iPhone_selfie.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 4,
    url: "/samples/lady_in_a_bikini.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 5,
    url: "/samples/medical_student.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 6,
    url: "/samples/podcast_lady.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 7,
    url: "/samples/straight_to_cam.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 8,
    url: "/samples/white_lady_at_the_beach.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 9,
    url: "/samples/black_girl.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 10,
    url: "/samples/speaker.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 11,
    url: "/samples/iPhone_selfie.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 12,
    url: "/samples/lady_in_a_bikini.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 13,
    url: "/samples/medical_student.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 14,
    url: "/samples/podcast_lady.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 15,
    url: "/samples/straight_to_cam.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
  {
    id: 16,
    url: "/samples/white_lady_at_the_beach.mp4",
    title: "See AI Actors in Action",
    description: "Watch how our technology creates lifelike digital humans",
  },
];

export function DemoVideo() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Create a tripled array for seamless looping
  const loopedVideos = [...demoVideos];

  // useEffect(() => {
  //   // Start all videos playing
  //   videoRefs.current.forEach((video) => {
  //     if (video) {
  //       video.play();
  //       video.loop = true;
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const videoWidth = 280 + 16; // Video width (280px) + margin (8px each side)
    const totalVideos = demoVideos.length;
    const totalScrollWidth = videoWidth * totalVideos;

    let currentX = 0;

    const animate = () => {
      currentX -= 1.5; // Adjust scrolling speed

      if (Math.abs(currentX) >= totalScrollWidth) {
        currentX = 0; // Reset back to start after all videos are scrolled
      }

      scrollContainer.style.transform = `translateX(${currentX}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden -mx-6">
      <div ref={scrollRef} className="flex px-6">
        {loopedVideos.map((video, index) => (
          <div
            key={`${video.id}-${index}`}
            className="flex-shrink-0 w-[280px] mx-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] bg-black/5">
              {/* <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.url}
                className="absolute inset-0 w-full h-full object-cover"
                preload="auto"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              /> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
        <video

          loop
          muted
          autoplay
          playsinline
          src=${video.url}
          class="absolute inset-0 w-full h-full object-cover"
        />,
      `,
                }}
              ></div>

              {/* <ReactPlayer
                url={video.url}
                className="absolute inset-0 w-full h-full object-cover"
                playing={true}
                muted
                loop={true}
                playsinline
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Watermark */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/30 backdrop-blur-sm rounded-full">
                <p className="text-xs font-medium text-white">
                  Entirely AI Generated
                </p>
              </div>

              {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-medium">{video.title}</p>
                <p className="text-white/80">{video.description}</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
