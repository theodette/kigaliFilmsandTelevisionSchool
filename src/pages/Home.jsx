import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React, { useState, useRef ,useEffect} from "react";
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  const applicationLink = "https://forms.gle/X1dbz4QjQ8Z5oXkH9";
const homeYoutube = "https://www.youtube.com/embed/mDjFvKQeybA?autoplay=1&mute=1";

  const [muted, setMuted] = useState(true);
  const iframeRef = useRef(null);

  // Toggle mute/unmute
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

// Number counting animation
const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold text-blue-600">
      {count.toLocaleString()}
    </span>
  );
};

 const programs = [
    "Filmmaking & TV Production",
    "Photography & Graphic Design",
    "3D Animation & VFX",
    "Music & Audio Production",
    "Acting for Film & TV",
    "Programming & Software Dev",
    "Digital Marketing",
  ];

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div className="relative w-full h-[70vh] sm:h-screen overflow-hidden">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          speed={800}
          pagination={{ clickable: true }}
          className="absolute inset-0 z-0"
        >
          <SwiperSlide>
            <img src="./D2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./D1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./D3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 grid place-items-center px-4 sm:px-6 text-center text-white">
          <div className="max-w-3xl">
            <p className="text-base sm:text-lg md:text-xl tracking-wide text-gray-200 mb-4">
              Bring Your Creative Ideas to Life With
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Kigali Film & Television School
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
              Empowering the next generation of storytellers through hands-on training,
              expert mentorship, and world-class facilities.
            </p>
            <a
              href="/programs"
              className="inline-block bg-[#ff0000] hover:bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Image */}
          <div className="rounded-b-2xl  ">
            <img
              src="./D2.jpg"
              alt="Kigali Film and Television School Studio"
              className="w-full h-full object-cover animate-zoom-slow"
            />
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent"></div>
          </div>

          {/* Text */}
          <AnimatedSection
            className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md p-6"
           
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-6">
              About Kigali Film & Television School
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              We are the first and leading professional film school in Rwanda. Our 
              teaching method is grounded in <span className="font-semibold">hands-on training</span>, 
              ensuring our students become active, creative, and highly skilled 
              professionals equipped with real-world practical knowledge.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
              Our studio is equipped with the latest, high-quality film production tools, 
              professional-grade music and audio recording systems, industry-standard 
              software, powerful computers, and much more—giving you everything you need 
              to bring your creative visions to life.
            </p>
            <a
              href="/about"
              className="inline-block bg-[#ff0000] hover:bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              Learn More 
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* VIDEO + TEXT SECTION */}
      <section className="flex flex-col lg:flex-row justify-around items-center bg-[#e6f4fa] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 gap-10">
        {/* Text */}
        <AnimatedSection
        
        >
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
              You Can Learn to Do the Same
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6">
              Master the skills you need to succeed in today’s world.
              Our programs are designed to give you hands-on experience,
              industry insights, and the confidence to achieve your goals.
            </p>
            <Link
              to="/programs"
              className="inline-block bg-[#ff0000] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-black transition"
            >
              Explore Our Programs
            </Link>
          </div>
        </AnimatedSection>

        {/* Video */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-xl max-w-xl w-full">
          <video
            className="w-full aspect-video object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* PROGRAM SECTION */}
<div className="w-full py-20 px-4 bg-white">

  {/* Section Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Programs</h2>
    <p className="mt-2 text-gray-600 max-w-xl mx-auto">
      Explore our wide range of courses and find the perfect path to kickstart your career.
    </p>
  </div>

  {/* Programs Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {programs.map((program, index) => (
      <div
        key={index}
        className="bg-white px-6 py-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition transform cursor-pointer text-gray-800 font-semibold text-center"
      >
        {program}
      </div>
    ))}
  </div>

  {/* Call-to-Action */}
  <div className="mt-12 text-center">
    <a
      href="https://forms.gle/rfV8eDv7XmWoyVgM9"
      className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-black transition"
    >
      Apply Now
    </a>
  </div>

</div>



 {/* Impact / Stats Section */}
  <AnimatedSection className="bg-gradient-to-r from-[#ff0000] via-[#ff7f50] to-black py-16 px-4 sm:px-6 lg:px-8 rounded-xl shadow-lg">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    <div className="bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
         <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium">
        Plus
      </p>
      <div className="text-4xl sm:text-5xl font-extrabold text-[#ff0000]">
        <Counter target={1000} />
      </div>
         <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium">
        Alumni Worldwide
      </p>
   
    </div>



    <div className="bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
      <div className="text-4xl sm:text-5xl font-extrabold text-[#ffd700]">
        <Counter target={7} />
      </div>
      <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium">
        Countries Represented
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
      <div className="text-4xl sm:text-5xl font-extrabold text-[#00bfff]">
        <Counter target={7} />
      </div>
      <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium">
        Programs Offered
      </p>
    </div>
  </div>
</AnimatedSection>

      {/* FINAL CTA SECTION */}
    <section className="py-12 sm:py-16 bg-[#e6f4fa]">
  <div className="container mx-auto px-4 sm:px-6 text-center mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff0000]">
      Unlock Your Potential with Kigali Film Academy
    </h2>
    <p className="text-sm sm:text-base md:text-lg font-sans font-medium mt-4 text-gray-600 max-w-4xl mx-auto">
      Contact us today to learn more about our programs, admission process...
    </p>
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    {/* YouTube Video */}
    <div className="mb-12 relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
     <iframe
  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
  src={homeYoutube}
  title="Kigali Film Academy Overview"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

    </div>

    {/* Links to Student Life & Media */}
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-center">
      <a
        href="/Life"
        className="bg-red-600 hover:bg-black transition text-white rounded-xl p-8 flex flex-col justify-center items-center shadow-lg"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Student Life</h3>
        <p className="text-sm sm:text-base">
          Explore vibrant student experiences, campus life, and support services.
        </p>
      </a>

      <a
        href="/media"
        className="bg-red-600 hover:bg-black transition text-white rounded-xl p-8 flex flex-col justify-center items-center shadow-lg"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Media</h3>
        <p className="text-sm sm:text-base">
          Discover our students’ creative projects, films, and media events.
        </p>
      </a>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
