import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BiBarChartSquare, BiAlbum, BiPlus } from "react-icons/bi";
import Graphics from "../assets/Graphicsdesign.png";
import Graphicsdesign from "../assets/Graphicsdesign.png";
import Hi from "../assets/Hi.JPG";

import { Link } from "react-router-dom";

export const Discover = () => {
  return (
    <div className="bg-purply min-h-screen overflow-auto bg-scroll relative font-poppins">
      <Header />
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:mb-4">
        <div className="md:ml-32">
          <h1 className="text-3xl text-white text-center mb-8">
            Discover New Music
          </h1>
          <div className="flex justify-center items-center mx-2 my-10">
            <div className="flex flex-col justify-center items-center bg-black rounded-md p-4 w-2/6 mr-2 md:mr-6 text-white text-center">
              <BiBarChartSquare className="text-2xl md:text-4xl" />
              <h4>Charts</h4>
            </div>

            <div className="flex flex-col justify-center items-center bg-black rounded-md p-4 w-2/6 mr-2 md:mr-6 text-white text-center">
              <BiAlbum className="text-2xl md:text-4xl" />
              <h4>Community</h4>
            </div>

            <div className="flex flex-col justify-center items-center bg-black rounded-md p-4 w-2/6 text-white text-center">
              <BiPlus className="text-2xl md:text-4xl" />
              <h4>More</h4>
            </div>
          </div>

          <h2 className="hidden md:block text-white text-center p-3 text-lg">
            By{" "}
            <Link to="/join">
              <span className="text-pink-700">join</span>
            </Link>
            ing you benefit by connecting with amzing talents
          </h2>
        </div>

        <div>
          <div className="mb-4 md:md-0">
            <div className="flex justify-center items-center p-4 mr-2 text-white">
              <img src={Hi} alt="img" className="w-3/6 md:w-2/6" />
              <img src={Graphicsdesign} alt="img" className="w-3/6 md:w-2/6" />
            </div>

            <div className="flex justify-center items-center p-4 mr-2 -mt-8">
              <img src={Graphics} alt="img" className="w-3/6 md:w-2/6" />
              <img src={Graphics} alt="img" className="w-3/6 md:w-2/6" />
            </div>
          </div>
          <h2 className="md:hidden text-white text-center p-3 text-xl mb-8">
            By{" "}
            <Link to="/join">
              <span className="text-pink-700">join</span>
            </Link>
            ing you benefit by connecting with amazing talent
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};



