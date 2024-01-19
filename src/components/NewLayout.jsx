import React from "react";
import YouTube from "react-youtube";

const NewLayout = () => {
  const handleButtonClick = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  const videoOptions = {
    width: 425,
    height: 315,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      showinfo: 0,
      loop: 1,
    },
  };

  return (
    <div className="mx-4 mt-32">
      <div className="text-4xl text-center font-bold mb-16">
        {" "}
        Safety Tips / Guidelines
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12 mb-8 bg-gray-200 py-16 px-12 rounded-2xl">
        <div>
          <div className="mb-6 text-2xl font-bold text-center">
            Fire in Building
          </div>
          <YouTube videoId="0MO2ohX2Iao" opts={videoOptions} />
        </div>
        <div className="">
          <div className="mb-6 text-2xl font-bold text-center">
            Building Collapse
          </div>
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/7MwazSAKcIw?si=gKwhyteswG5Y81d9&amp;start=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="mb-6 text-2xl font-bold text-center">
            Bombing in Public Place
          </div>
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/xg_YC0tHdKA?si=kG4RnU5XVBJGmNk7&amp;start=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          {" "}
          <div className="mb-6 text-2xl font-bold text-center">
            Fire in Slum
          </div>
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/2z3ntqbdruc?si=-NZrmX1T2CT2JjeG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="mb-6 text-2xl font-bold text-center">
            Chemical Hazard
          </div>
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/0tSLfrMRM3c?si=kh-kYoEGDvsl290I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="mb-6 text-2xl font-bold text-center">
            Water Logging Due to Rain
          </div>
          <iframe
            width="425"
            height="315"
            src="https://www.youtube.com/embed/3H_EbUdQ7_0?si=OZz4zim3ohX9uJ96"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="mb-6 text-2xl font-bold text-center">
            Drowning in Sea
          </div>
          <YouTube videoId="ix-ox5fn02A" opts={videoOptions} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12 mb-8 bg-gray-200 py-16 px-12 rounded-2xl">
        <div className="pb-4 border bg-white rounded-lg">
          <img
            src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/cyclone-stages-formation-impact.jpg"
            className="w-[300px] h-[250px] rounded-t-lg "
          />

          <div className="flex items-center justify-between mt-4">
            <div className="font-semibold text-xl ml-4">Cyclone</div>
            <button
              onClick={() =>
                handleButtonClick("public/dm.mcgm.gov.in_dos_and_donts.png")
              }
              className="mr-4 bg-[rgb(30,67,86)] text-white hover:border hover:border-[rgb(30,67,86)] "
            >
              Open
            </button>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NewLayout;
