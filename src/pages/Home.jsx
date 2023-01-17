import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import TUX from "../resources/Tux_Mono_2.svg.png";
import CV from "../resources/CV_EdwinGeul.pdf";

const Home = () => {
  const [AboutMe, setAboutMe] = useState(<p></p>);
  const [textAboutme, settextAboutme] = useState("About me");

  function showAboutme() {
    if (textAboutme !== "Hide") {
      setAboutMe(
        <p className="font-mono text-white ">
          <div className="border-b border-double mb-4 border-red-50 w-full" />
          <span style={{ color: "#77c980" }}>Name: </span>Edwin Salvador Geul
          Discua <br />
          <span style={{ color: "#77c980" }}>Age: </span> 22 <br />
          <br />
          Hi there I am actually a stundent to the carrer of informatic
        </p>
      );
      settextAboutme("Hide");
    } else {
      setAboutMe(<p className="font-mono text-white "></p>);
      settextAboutme("About Me");
    }
  }

  return (
    <div className="w-[80%] ml-[10%] flex flex-row flex-wrap justify-center items-center pb-20">

     <img src={TUX} alt="" className="w-[200px] mt-40 lg:block hidden" />
        
      <div
        className="mt-40 lg:ml-10  border-double border-[10px] p-10 
            w-[100%] lg:w-[50%]
             min-h-60 h-auto rounded-sm "

      >
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="duration-300"
        >
          <p className="text-[#71e39d] MonospaceTypewriterFont">
            #Hola Bienvenidos a mi portfolio , donde compatire un poco sobre mis: <br />
          </p>
            <span className="text-red-400 text-2xl">
              <Typewriter
                options={{
                  strings: [
                    "Desarrollos",
                    "Estudios Realizados",
                    "Avances personales ",
                  ],
                  delay: 100,
                  loop: true,
                  autoStart: true,
                }}
              />
            </span>
          <br />
          <br />
          {AboutMe}

          <div className="flex justify-center relative bottom-0 mt-10">
            <button
              className="bg-orange-500 text-white p-2 px-4 rounded-lg opacity-40 hover:opacity-100 duration-200"
              onClick={() => {
                showAboutme();
              }}
            >
              {textAboutme}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex justify-center">
        <div className="text-white mt-4 border-dotted border p-4">
            <p>
            Si necesitas descargar mi CV , puedes hacerlo desde
            <a
                href={CV}
                download="CV_EdwinGeul.pdf"
                className="underline text-red-500"
                >
                {" "}
                Aqui{" "}
            </a>
            </p>
        </div>
    </div>
    </div>
  );
};

export default Home;
