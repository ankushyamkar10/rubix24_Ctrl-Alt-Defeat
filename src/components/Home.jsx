import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Weather from "./Weather";
import Marquee from "react-fast-marquee";
import Services from "./Services";
import Layout from "./layout.jsx";
import NGOList from "./NGOList.jsx";

const Home = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);
            setCoordinates({ latitude, longitude });
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser.");
      }
    };

    getLocation();
  }, []);
  return (
    <div className="overflow-hidden">
      <div>
        <div className="flex ">
          <div className="mr-auto p-3 text-white bg-red-500 w-[8rem] ">
            Contact Us
          </div>
          <Marquee className="ml-auto font-semibold bg-gray-200">
            <div>TELE/FAX NO. - 011-23438091, 011-23438136</div>
            <div className="ml-4"> EMAIL ID -hq.ndrf@nic.in</div>
          </Marquee>
        </div>

        <Hero />
      </div>

      <div class="flex items-center gap-8 justify-between bg-gray-100 mt-16 pb-8">
        <div class="w-1/2 ">
          <div class="p-4">
            <div className="relative">
              <div className="bg-gray-100 w-full h-[5.2rem] absolute z-10 flex items-center justify-center text-2xl font-bold">
                Seismology Index
              </div>
              <iframe
                className="w-full"
                height={500}
                src="https://riseq.seismo.gov.in/riseq/earthquake"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="p-4">
            <Weather />{" "}
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Home;
