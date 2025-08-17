import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Media() {
  return (
 <section className="bg-[#f8f9fa] space-y-20 py-12 px-4 sm:px-8 lg:px-20">
     <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        
        {/* Image Slider */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={20}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src="/am1.jpeg"
                alt="Ambassador visit"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/am2.jpeg"
                alt="Ambassador visit 2"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            The Israel Ambassador to Rwanda Visits Kigali Film and Television School
          </h1>
          <p className="text-gray-700 leading-relaxed">
            The Ambassador of Israel to Rwanda, Dr. Ron Adam, visited Kigali Film and Television School, 
            commended its work in training youth, and provided financial support to upgrade equipment 
            and sustain operations during COVID-19.
          </p>
          <button className="inline-block bg-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
            Read More
          </button>
        </div>

      </div>
        {/* part 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10 p-6  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
           
            {/* Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                Maison Shalom & KFTV Partner to Train Youth
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Maison Shalom has partnered with Kigali Film and Television School to train youth from Mahama Refugee Camp 
                in filmmaking, graphic design, and photography. Leaders encouraged the students to stay disciplined, 
                innovative, and committed to becoming future multimedia professionals.
              </p>
              <button className="inline-block bg-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
                Read More
              </button>
            </div>
             {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <img
                src="/am3.jpeg"
                alt="Maison Shalom partnership"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
       
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            DAMIAN KOCUR a filmmaker from Poland visited KIGALI FILM AND TELEVISION SCHOOL to conduct the masterclass
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Award-winning filmmaker Damian Kocur conducted a masterclass at Kigali Film and Television School, sharing his filmmaking process, screening his works,
             and giving students valuable insights into cinematography and production
          </p>
          <button className="inline-block bg-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
            Read More
          </button>
        </div>

   {/* Image Slider */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={20}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src="/am6.jpeg"
                alt="Ambassador visit"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/am7.jpeg"
                alt="Ambassador visit 2"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        
        {/* Image Slider */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={20}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src="/am8.jpeg"
                alt="Ambassador visit"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/am9.jpeg"
                alt="Ambassador visit 2"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
            Damola Ademola, a Nigerian professional filmmaker visited KFTV SCHOOL 
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Damola, executive producer and co-founder of Inkblot Productions,
             conducted a workshop at KFTV School, sharing his production process, project planning, pitching strategies, and practical filmmaking tips,
             while encouraging students to create using available resources
          </p>
          <button className="inline-block bg-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
            Read More
          </button>
        </div>

      </div>
       {/* part 2 */}
          <div className="flex flex-col md:flex-row items-center gap-10 p-6  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
           
            {/* Text */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug">
                Canon Central and North Africa collaborates with Kigali Film and Television 
School to support the development of the film and photography industries
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Canon partnered with Kigali Film and Television School to deliver a 
                week-long photography and filmmaking workshop, providing practical 
                training and exposure to the latest Canon technology. The initiative, part of Canon’s Miraisha Programme, empowers 
                participants with skills to advance in Rwanda’s creative arts industry
              </p>
              <button className="inline-block bg-red-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300">
                Read More
              </button>
            </div>
             {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <img
                src="/am10.jpeg"
                alt="Maison Shalom partnership"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
       
    </section>

  );
}
