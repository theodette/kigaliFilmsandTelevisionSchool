import React, { useState, useEffect , useRef } from 'react';

//import { useSpring, animated } from '@react-spring/web';
import { NavLink } from 'react-router-dom';
import { motion,AnimatePresence,useInView   } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import SendMessage from './SendMessage'

const Index = ({  interval = 3000 }) => {

  const applicationLink = "https://forms.gle/X1dbz4QjQ8Z5oXkH9";
    const [muted, setMuted] = useState(true);
    const iframeRef = useRef(null);
  
 const toggleMute = () => {
    if (!iframeRef.current) return;
    const command = muted ? 'unMute' : 'mute';
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: command, args: [] }),
      '*'
    );
    setMuted(!muted);
  };

  // YouTube iframe URL with JS API enabled
  const videoId = "CzKGi3lmCtY";
  const srcUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&enablejsapi=1`;

 const AnimatedSection = ({ children, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100, rotateX: 90 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ transformOrigin: "top", perspective: "1000px" }}
      {...props}
    >
      {children}
    </motion.div>
    
  );
};


  return (
    <div className="relative h-full   w-full bg-white flex flex-col items-center justify-center  text-[#D9D9D9] overflow-hidden">
  

  {/* SCHOLARSHIP SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Video */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden">
            <iframe
              ref={iframeRef}
              className="w-full aspect-video object-cover"
              src={srcUrl}
              title="Scholarship Opportunities at Kigali Film School"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            {/* Unmute button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-[#ff0000] text-white px-3 py-2 rounded-full font-semibold shadow-lg hover:bg-[#a00000] transition"
            >
              {muted ? "🔈 Unmute" : "🔊 Mute"}
            </button>
          </div>

          {/* Text */}
          <AnimatedSection
           
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ff0000] mb-6">
                Open Programs
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold mb-6">
                Unlock Your Talent — We Help You Make It Happen!
              </p>
              <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                At Kigali Film and Television School (KFTV), we believe that talent should never be limited by financial constraints...
              </p>
              <a
                href={applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ff0000] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-[#0077b6] transition"
              >
                Apply
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
 </div>
  );
};


export default Index;
