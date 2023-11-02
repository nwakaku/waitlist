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
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=gESc_lJPPhw"
            title="Selman(ext) product review"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96 lg:h-[400px] xl:h-[500px]"
          ></iframe>
        </div>
        <div className="text-center">
          {/* <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Welcome to Our Waitlist</h1> */}
          <p className="text-gray-600 mb-4">
            "Join our waitlist today to become one of the pioneers in breaking
            down language barriers on the internet, creating a more connected
            and inclusive online world."
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
