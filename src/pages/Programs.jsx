import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Programs = () => {
  const applicationLink = "https://forms.gle/X1dbz4QjQ8Z5oXkH9";

  const programs = [
    {
      title: "Filmmaking and Television Production",
      description: "Immerse yourself in storytelling, cinematography, and production.",
      image: "D10.jpg",
    },
    {
      title: "Photography and Graphic Design",
      description: "Learn the technical and artistic sides of photography and design.",
      image: "D8.jpg",
    },
    {
      title: "3D Animation and Visual Effects",
      description: "Create captivating animations and VFX for film and television.",
      image: "5.jpeg",
    },
    {
      title: "Acting for Film and Television",
      description: "Enhance your skills as an actor and perform for the screen.",
      image: "acting.jpg",
    },
    {
      title: "Music Audio Production",
      description: "Learn how to compose and produce music for films, games, and media.",
      image: "D4.jpg",
    },
    {
      title: "Programming and Software Development",
      description: "Build modern applications with industry-standard tools and practices.",
      image: "D7.jpg",
    },
  ];

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

  const videos = [
    "https://www.youtube.com/embed/wVbB9yU1mzE",
    "https://www.youtube.com/embed/7DyXN3oRpwg",
    "https://www.youtube.com/embed/jFNsJ7Wj9Lg",
  ];

  const iframeRefs = useRef([]);

  const stopAllVideos = (activeIndex) => {
    iframeRefs.current.forEach((iframe, i) => {
      if (iframe && i !== activeIndex) {
        const src = iframe.src;
        iframe.src = src;
      }
    });
  };


  const internshipForStudents = [
    "Film & Television Production",
    "Multimedia & Digital Arts",
    "Business & Marketing",
    "Social Sciences",
    "Business Management",
    "Anthropology",
    "Music",
    "Other related disciplines",
  ];

  const internshipBenefitsStudents = [
    "Work alongside industry professionals and experienced trainers",
    "Gain hands-on exposure to real projects in media and production",
    "Enhance your academic learning with practical skills",
    "Build a professional network in the African creative industry",
  ];

  const internshipForGraduates = [
    "Deepen your expertise in a specialized area",
    "Participate in advanced projects with measurable industry impact",
    "Strengthen your portfolio with professional work samples",
  ];

  const volunteeringRoles = [
    "Teaching & Mentorship – Supporting classes, workshops, and masterclasses",
    "Technical Support – Helping with equipment, editing, or production",
    "Creative Projects – Collaborating with students on films, photography, or digital media",
    "Community Outreach – Helping expand access to media education in underserved areas",
  ];

  const visitingActivities = [
    "Tour studios, classrooms, and production facilities",
    "Meet students and trainers in action",
    "Learn about Rwanda’s growing creative industry",
    "Conduct masterclasses or workshops",
  ];


  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#ff0000] mb-4">
          Find Your Right Program
        </h1>
        <p className="text-gray-800 text-lg sm:text-xl max-w-3xl mx-auto">
          Our trainers bring a wealth of experience and expertise, ensuring
          that you receive practical insights and real-world knowledge that
          will set you apart in your career.
        </p>
      </div>

      {/* Programs Grid */}
      <section className="py-12 px-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#ff0000] mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href={applicationLink}>
            <button className="bg-white border border-[#ff0000] text-[#ff0000] px-6 py-2 rounded-md text-lg font-semibold hover:text-white hover:bg-[#ff0000] transition">
              Apply Now
            </button>
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center bg-[#e6f4fa] py-16 px-6 lg:px-20 gap-10">
        {/* Video Slider */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={2}
            slidesPerView={1}
            loop
            autoplay={{ delay: 10000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => stopAllVideos(swiper.realIndex)}
          >
            {videos.map((video, i) => (
              <SwiperSlide key={i}>
                <iframe
                  ref={(el) => (iframeRefs.current[i] = el)}
                  className="w-full h-64 sm:h-80 lg:h-[400px]"
                  src={video}
                  title={`Why Choose Us Video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Content */}
        <AnimatedSection className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#ff0000]">
            Why Choose Us
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            We provide cutting-edge training with world-class facilities and
            expert mentorship. Our programs are designed to prepare you for
            real-world success while fostering creativity and innovation.
          </p>
          <p className="text-gray-800 leading-relaxed">
            By joining us, you gain access to global opportunities, personalized
            guidance, and a vibrant learning environment dedicated to helping
            you achieve your goals.
          </p>
        </AnimatedSection>
      </section>

      {/* Fees Section */}
      <div className="text-center pt-10 px-4 sm:px-10 lg:px-20">
        <h1 className="text-3xl font-bold text-[#ff0000] mb-4">
          Fees Structure
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-gray-700">
          Our comprehensive media arts programs offer immersive,
          industry-expert-led training across multiple disciplines. Each
          program blends technical skills, creative expression, and professional
          insights to prepare students for success in visual and audio
          storytelling.
        </p>
      </div>

      <div className="pt-12 mb-12 px-4 sm:px-10 lg:px-20 overflow-x-auto">
        <table className="min-w-full border border-[#ff0000] bg-white text-black text-left">
          <thead>
            <tr>
              <th className="px-6 py-4 text-xl font-bold">Program</th>
              <th className="px-6 py-4 text-xl font-bold">Duration</th>
              <th className="px-6 py-4 text-xl font-bold">Tuition Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-6 py-4">Short-Term (3 Months)</td>
              <td className="px-6 py-4">3 Months</td>
              <td className="px-6 py-4">300,000 RWF / 465 USD</td>
            </tr>
            <tr className="border-t">
              <td className="px-6 py-4">Short-Term (6 Months)</td>
              <td className="px-6 py-4">6 Months</td>
              <td className="px-6 py-4">770,000 RWF / 775 USD</td>
            </tr>
            <tr className="border-t">
              <td className="px-6 py-4">One-Year Program</td>
              <td className="px-6 py-4">1 Year</td>
              <td className="px-6 py-4">1,090,000 RWF / 1,100 USD</td>
            </tr>
          </tbody>
          <tfoot className="font-semibold border-t">
            <tr>
              <td colSpan="3" className="px-4 py-2 text-center text-lg">
                Registration fee: <b>150,000 RWF</b> (one-time payment)
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Scholarships / Funding Section */}
      <div className="text-center py-10 px-4 sm:px-10 lg:px-20">
       
        <p className="max-w-4xl mx-auto text-lg text-gray-700 mb-4">
          We understand that financing education can be challenging. Explore our
          available scholarships and funding opportunities to help you achieve your
          dreams without financial stress.
        </p>
        <a
          href="/scholarship"
          className="inline-block bg-[#ff0000] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#cc0000] transition"
        >
          read more....
        </a>
      </div>

      <section className="bg-[#f9f9f9] py-16 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#ff0000] mb-4">
          Internship, Volunteering & Visiting Opportunities
        </h2>
        <p className="text-gray-800 max-w-3xl mx-auto text-lg sm:text-xl">
          Learn, Share, and Grow in Africa’s Creative Hub. KFTV welcomes local
          and international interns, volunteers, and visitors who share our
          passion for film, media, and education.
        </p>
      </div>

      {/* Internship for Students */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#ff0000] mb-4">
            Internship Programs - Students
          </h3>
          <p className="text-gray-700 mb-3">
            For university & school students completing their studies in:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {internshipForStudents.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 font-semibold mb-2">
            Benefits:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            {internshipBenefitsStudents.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Internship for Graduates */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#ff0000] mb-4">
            Internship Programs - Graduates
          </h3>
          <p className="text-gray-700 mb-3">
            Tailored professional internships for graduates & professionals:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            {internshipForGraduates.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Volunteering & Visiting */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#ff0000] mb-4">
            Volunteering & Visiting
          </h3>
          <p className="text-gray-700 font-semibold mb-2">Volunteering Opportunities:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {volunteeringRoles.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-700 font-semibold mb-2">Visiting KFTV:</p>
          <ul className="list-disc list-inside text-gray-700">
            {visitingActivities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Programs;
