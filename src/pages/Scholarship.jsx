import React from 'react';
import { NavLink } from 'react-router-dom';

const Scholarship = () => {
  return (
    <div className="bg-[#D9D9D9] text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
      
        {/* Programs Description */}
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <section className="text-center">
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
              Our <strong className="text-[#ff0000]">Short-Term Training Programs</strong> are designed for individuals looking for a fast and focused learning experience. These programs offer hands-on training in various fields, providing a practical and immersive education in a short period of time. For those seeking a deeper, more comprehensive understanding, the <strong className="text-[#009EEF]">One-Year Comprehensive Program</strong> offers an intensive curriculum. This program combines theoretical knowledge with practical experience, allowing students to fully develop their skills and gain valuable industry insights over the course of the year.
            </p>
          </section>
        </div>

        {/* Scholarship Description */}
        <div className="bg-white p-8 rounded-lg shadow-xl mt-10">
          <h2 className="text-3xl font-bold text-[#ff0000] mb-4">Partial Scholarship Program</h2>
          <p className="text-lg text-gray-800 mb-4">
            We believe talent should never be hindered by financial constraints. Our Partial Scholarship Program is designed to support individuals passionate about film and multimedia but facing financial challenges.
          </p>
          <h3 className="text-xl font-semibold text-[#ff0000] mb-4">Who Qualifies?</h3>
          <p className="text-lg text-gray-800 mb-4">
            If you have a strong desire to explore filmmaking, photography, animation, acting, or music audio production, we invite you to apply. We focus on passion and potential, ensuring that financial constraints do not stand in the way of your dreams.
          </p>
          <h3 className="text-xl font-semibold text-[#ff0000] mb-4">How to Apply</h3>
          <p className="text-lg text-gray-800 mb-4">
            To apply for the scholarship, submit a passion statement and complete the application form at: 
            <a href="https://forms.gle/DGNgaJQ1MajVFmwFA" className="text-[#009EEF] font-semibold ml-1">Apply for Scholarship</a>
          </p>
          <h3 className="text-xl font-semibold text-[#ff0000] mb-4">Benefits of the Scholarship</h3>
          <ul className="text-lg text-gray-800 mb-4 list-disc pl-6">
            <li>Reduced Tuition (up to 80%)</li>
            <li>Mentorship Opportunities from Industry Experts</li>
            <li>Networking with Leading Professionals</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-[#ff0000] mb-4">Contact Us for More Information</h3>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
