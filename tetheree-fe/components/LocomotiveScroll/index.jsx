'use client'; // For Next.js 13+ app directory

import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollComponent = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Check if we are running in the browser
    if (typeof window === 'undefined') return;

    // Initialize Locomotive Scroll
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

  // Ensure the body doesn't have overflow: hidden
  document.body.style.overflow = 'visible';

  return () => {
    locomotiveScroll.destroy();
    document.body.style.overflow = ''; // Restore default overflow on cleanup
  };
  }, []);

  return (
    <div
      data-scroll-container
      ref={scrollContainerRef}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

export default LocomotiveScrollComponent;