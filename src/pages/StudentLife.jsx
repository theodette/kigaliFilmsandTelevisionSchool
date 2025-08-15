
// Example images (update paths to your actual images)
//import StudentLife1 from "../assets/StudentLife1.jpeg";
//import StudentLife2 from "../assets/StudentLife2.jpeg";
//import StudentLife3 from "../assets/StudentLife3.jpeg";

const videos = [
  "https://www.youtube.com/embed/whq-ovRxML0",
  "https://www.youtube.com/embed/wVbB9yU1mzE",
  "https://www.youtube.com/embed/KCQ1nLQr4DU",
  "https://www.youtube.com/embed/JhvvTSyYhLw",
  "https://www.youtube.com/embed/xTuMzDIIXi0",
  "https://www.youtube.com/embed/9FXiWKisbT4",
  "https://www.youtube.com/embed/jFNsJ7Wj9Lg"
];

//const images = [StudentLife1, StudentLife2, StudentLife3];

const StudentLife = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Media Gallery
        </h2>

        {/* Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64 sm:h-56 lg:h-64"
                src={video}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Images */}
    
      </div>
    </section>
  );
};

export default StudentLife;
