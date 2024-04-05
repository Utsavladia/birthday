import React, { useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import "./index.css";
import "./style.css";
import i from "./bg1.jpg";
import bgvdo from "./videos/cvdo.mp4";
import Imgcard from "./imgcard";
import i1 from "./images/i1.jpg";
import i2 from "./images/i2.jpg";
import i3 from "./images/i3.jpg";
import i4 from "./images/i4.jpg";
import i5 from "./images/i5.jpg";
import i6 from "./images/i6.jpg";
import glass from "./videos/glass.mp4";
import dance from "./videos/dancing.mp4";

const cards = [
  {
    image: i3,
    message: "Stop being cute.. cuz you r already enough!",
  },
  {
    image: i2,
    message: "Keep making these funny faces..",
  },
  {
    image: i1,
    message: "Thoda door rha kro gudgudi lg rha h..",
  },
  {
    image: i4,
    message: "Keep my dark secrets in dark.. as this pic !",
  },
  {
    image: i5,
    message:
      "Always keep some space in your small brain for memories we create..",
  },
  {
    image: i6,
    message: "You catch my double meaning jokes too quick",
  },
];

const H2 = () => {
  const [gift, setgift] = useState(false);
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const handlegift = () => {
    setgift((prev) => !prev);
  };
  const handlewish = () => {
    const s5 = document.getElementById("s3");
    if (s5) {
      s5.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleYes = () => {
    const section2 = document.getElementById("s2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlecelebrate = async () => {
    const s4 = document.getElementById("s4");
    if (s4) {
      s4.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlecake = () => {
    const sc = document.getElementById("sc");
    if (sc) {
      sc.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handlenext = () => {
    setgift((prev) => !prev);
    const s3 = document.getElementById("s5");
    if (s3) {
      s3.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handledance = () => {
    if (firstVideoRef.current) {
      firstVideoRef.current.pause();
    }
    // Play the second video
    if (secondVideoRef.current) {
      secondVideoRef.current.play();
    }
    // Scroll to the next section
    const nextSection = document.getElementById("s9");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-1vh w-1vw ">
      <section id="s1" className="relative">
        <video
          src={glass}
          className="inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="flex flex-col gap-8 justify-between items-center absolute top-0 left-0 w-screen h-full pt-20 pb-16 ">
          <h1 className="text-white text-2xl  text-shadow-pink font-semibold w-lvw">
            Am i your favourate.. ??
          </h1>
          <div className="flex justify-center w-1vw items-center gap-6">
            <button className="bg-purple-500 py-2 px-4 rounded-lg bg-opacity-50 font-semibold roundfont border border-purple-500 text-xl text-white  text-shadow mt-8">
              No
            </button>
            <button
              onClick={handleYes}
              className="bg-purple-500 py-2 px-4 rounded-lg bg-opacity-50 font-semibold roundfont border border-purple-500 text-xl text-white  text-shadow mt-8"
            >
              Yes
            </button>
          </div>
        </div>
      </section>
      <section id="s2">
        <div
          className={`min-h-screen ${
            gift ? "bg1" : "bg-black"
          } flex flex-col items-center justify-between py-24 relative transition-all duration-1000`}
        >
          {!gift && (
            <h1 className="font-semibold roundfont  text-2xl text-white  text-shadow p-4 mt-8 ">
              {/* "Just because you chose me <br /> as your favorite..." <br /> */}
              <Typewriter
                options={{
                  strings: ["Just because you chose me as your favorite..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          )}
          {gift && (
            <h1 className="font-semibold roundfont  text-2xl  text-white  text-shadow  p-4 ">
              "You deserve all these flowers from me"
            </h1>
          )}
          {!gift && (
            <button
              className="bg-orange-500 py-2 px-4 rounded-lg bg-opacity-50 font-semibold roundfont border border-orange-500 text-xl text-white  text-shadow mt-4"
              onClick={handlegift}
            >
              Tap for your gift
            </button>
          )}
          {gift && (
            <button
              onClick={handlecake}
              className="bg-orange-500 py-2 px-4 rounded-lg bg-opacity-50 font-semibold roundfont border border-orange-500 text-xl text-white  text-shadow mt-4"
            >
              Next ⇩
            </button>
          )}
        </div>
      </section>
      <section id="sc">
        <div className="min-h-screen h-screen flex flex-col justify-between pt-20 pb-16 items-center bggirl">
          <h1 className="text-xl text-white text-shadow-pink bg-black bg-opacity-30 backdrop-blur-lg w-full py-2">
            "You are as sweet as your cake..
            <br />
            But cake is tastier than you.."
          </h1>
          <button
            onClick={handlenext}
            className="bg-purple-500 py-2 px-4 rounded-lg bg-opacity-50 font-semibold roundfont border border-purple-500 text-xl text-white  text-shadow mt-8"
          >
            Next ⇩
          </button>
        </div>
      </section>
      <section id="s5">
        <div className="bg2 min-h-screen relative w-screen flex flex-col justify-between  ">
          <div className=" font-extrabold  text-4xl text-white mt-12 text-shadow-black backdrop-blur-lg">
            <h1 className="cursive text-5xl">
              Happist
              <br /> Birthday
            </h1>
            <div className="text-2xl flex gap-2 font-bold roundfont items-center justify-center noshadow mt-4">
              <h1 className="font-bold">My</h1>
              <div className="text-purple-900 font-bold">
                <Typewriter
                  options={{
                    strings: ["Cutie", "Paglii", "Pyari", "Gadhi", "Puchhi"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <span className="font-bold">Sakshi</span>
            </div>
          </div>
          <div className="flex overflow-x-auto  w-auto">
            {cards.map((card) => (
              <Imgcard image={card.image} message={card.message} />
            ))}
          </div>
          <button
            onClick={handlewish}
            className="bg-purple-500 w-28 ml-auto mr-auto mb-10 py-2 px-4 rounded-lg bg-opacity-50 font-semibold roundfont border border-orange-500 text-xl text-white  text-shadow mt-4"
          >
            Next ⇩
          </button>
        </div>
      </section>
      <section id="s3">
        <div className="min-h-screen w-screen bg3 pt-20  flex flex-col justify-end pb-20 items-center">
          <h1 className="font-semibold roundfont  text-2xl text-white  text-shadow-pink p-4  ">
            "Wanna celebrate your Birthday..?"
          </h1>
          <button
            onClick={handlecelebrate}
            className="font-semibold roundfont text-xl mt-10  px-4 py-2 rounded-lg border border-pink-500 bg-pink-700 bg-opacity-40 text-white "
          >
            ⌲ Tap here
          </button>
        </div>
      </section>

      <section id="s4">
        <div className="min-h-screen flex justify-center relative w-screen">
          <video
            ref={firstVideoRef}
            src={bgvdo}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            playsInline
          ></video>
          <button
            onClick={handledance}
            className="absolute bottom-10 text-shadow-pink font-semibold roundfont text-xl mt-10  px-4 py-2 rounded-lg border border-pink-500 bg-pink-700 bg-opacity-40 text-white "
          >
            ⌲ Let's Dance
          </button>
        </div>
      </section>

      <section id="s9">
        <div className="min-h-screen relative w-screen">
          <video
            ref={secondVideoRef}
            src={dance}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            playsInline
          ></video>
        </div>
      </section>
      <section className="flex justify-start flex-col min-h-screen bgme bg-black text-white text-shadow-pink items-center">
        <h1 className="text-xl mt-10 mb-2">Happist Birthday Cutie</h1>
        <p>Enjoyyy your dayyy...</p>
      </section>
    </div>
  );
};

export default H2;
