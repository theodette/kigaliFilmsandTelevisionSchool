
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
const Contact = () => {
 
    return (
<section className="bg-[#e6f4fa] text-black py-16 px-6 sm:px-10 lg:px-20">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#ff0000]">Contact Us</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {/* Phone */}
      <div className="flex flex-col items-center bg-white text-black rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
        <HiOutlinePhone className="text-3xl text-[#ff0000] mb-4" />
        <p className="font-semibold">Phone</p>
        <p className="text-gray-700 mt-1 text-center">
          (+250) 788 363 732 <br />
          (+250) 722 306 000
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col items-center bg-white text-black rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
        <HiOutlineMail className="text-3xl text-[#ff0000] mb-4" />
        <p className="font-semibold">Email</p>
        <p className="text-gray-700 mt-1 text-center">kftvschool@gmail.com</p>
      </div>

      {/* Location */}
      <div className="flex flex-col items-center bg-white text-black rounded-xl p-6 shadow-md hover:scale-105 transform transition duration-300">
        <HiOutlineLocationMarker className="text-3xl text-[#ff0000] mb-4" />
        <p className="font-semibold">Location</p>
        <p className="text-gray-700 mt-1 text-center">
          Kigali, Rwanda <br /> KN77 St 535 Near CHUK
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
