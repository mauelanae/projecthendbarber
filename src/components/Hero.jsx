import React from 'react';
import Navbar from './Navbar';
import icon1 from '../assets/iconcut.svg';
import svg1 from '../assets/svg1.svg';
import svg2 from '../assets/svg2.svg';
import svg3 from '../assets/svg3.svg';
import svg4 from '../assets/svg4.svg';
import svg5 from '../assets/svg5.svg';

function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Flayer */}
      <div className="bg-[#593D2B] w-[90%] max-w-[330px] h-[180px] mx-auto p-4 rounded-3xl relative mt-6">
        <h1 className="absolute bottom-4 left-5 text-3xl md:text-4xl font-black text-white">
          Gaya Keren <br /> Dimulai di Sini!
        </h1>
        <img
          src={icon1}
          className="absolute top-3 right-5 w-12 h-12 md:w-14 md:h-14"
          alt="Icon"
        />
      </div>

      {/* Portfolio */}
      <div className="mx-auto mt-10">
        <h1 className="font-bold text-sm md:text-base text-gray-800">
          Portofolio Haircut
        </h1>
      </div>

      <div className="mx-6 mt-3">
        <div className="flex items-center justify-center gap-4">
          <img
            src={svg4}
            alt="gambar 4"
            className="w-[155px] h-[155px] md:w-24 md:h-24 rounded-lg"
          />
          <img
            src={svg5}
            alt="gambar 5"
            className="w-[155px] h-[155px] md:w-24 md:h-24 rounded-lg"
          />
        </div>
        <div className="flex items-center justify-center gap-3 mt-3">
          <img
            src={svg1}
            alt="gambar 1"
            className="w-[100px] h-[100px] md:w-20 md:h-20 rounded-lg"
          />
          <img
            src={svg2}
            alt="gambar 2"
            className="w-[100px] h-[100px] md:w-20 md:h-20 rounded-lg"
          />
          <img
            src={svg3}
            alt="gambar 3"
            className="w-[100px] h-[100px] md:w-20 md:h-20 rounded-lg"
          />
        </div>
      </div>

      {/* Navbar */}
      <div className="mt-auto">
        <Navbar />
      </div>
    </div>
  );
}

export default Hero;
