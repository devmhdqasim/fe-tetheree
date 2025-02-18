import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi'; // Arrow up icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scroll position and toggle visibility of the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Show button if scrolled more than 300px
      } else {
        setIsVisible(false); // Hide button if less than 300px
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      aria-label="Scroll to top"
    >
      <FiArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;