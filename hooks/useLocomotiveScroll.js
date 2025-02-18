import { useEffect, useRef, useState } from "react";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR errors
    if (!scrollRef.current) return; // Ensure the element exists

    import("locomotive-scroll").then((module) => {
      const LocomotiveScroll = module.default;

      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1.5, // Adjust scroll speed
      });

      setScrollInstance(scroll);
    });

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  return { scrollRef, scrollInstance };
};