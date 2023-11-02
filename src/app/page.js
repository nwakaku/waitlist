"use client"
import Image from 'next/image'

export default function Home() {

  const handleSubscribeClick = () => {
    window.location.href = "https://forms.gle/7mrEoRnGdGdv5DdU7";
  };

  return (
    <div className="bg-orange-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl p-4 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <iframe
           width="1430" 
           height="536" 
           src="https://www.youtube.com/embed/gESc_lJPPhw?&autoplay=1" 
           title="SelmanAi" 
           frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
            className="w-full h-64 md:h-96 lg:h-[400px] xl:h-[500px]"
          ></iframe>
        </div>
        <div className="text-center">
          {/* <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Welcome to Our Waitlist</h1> */}
          <p className="text-gray-600 mb-4">
          "Unveiling our masterpiece: an AI-powered browser extension and video player that transcends linguistic boundaries. Witness as it magically transforms any video into a universal treasure, offering real-time translations that preserve the authentic voice of the speaker. With seamless cross-platform compatibility and the power to eradicate the need for multiple video versions, this groundbreaking creation unlocks the true essence of content accessibility, join our quest, brings the world closer beyond Language 🌟"
          </p>

          <button
            onClick={handleSubscribeClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring focus:border-orange-300"
          >
            Early Access
          </button>
        </div>
      </div>
    </div>
  );
}
