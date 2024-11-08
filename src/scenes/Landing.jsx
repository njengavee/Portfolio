import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Wanjiru from "../assets/wanjiru.jpeg";
import SocialMediaIcons from "../components/SocialMediaIcons";

const onButtonClick = () => {
  fetch("Simon's Resume.pdf").then((response) => {
    response.blob().then((blob) => {
      const fireURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fireURL;
      alink.download = "Simon's Resume.pdf";
      alink.click();
    });
  });
};

export default function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 md:mt-12"
    >
      {/* image section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              src={Wanjiru}
              alt="profile"
              className="transform animate-updown hover:filter hover:saturate-200 transition duration-500 z-10  max-w-[400px] md:max-w-[600px] h-[300px] w-[350px] rounded-t-[400px]"
            />
          </div>
        ) : (
          <img
            src={Wanjiru}
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] h-[300px] rounded-t-[400px]"
          />
        )}
      </div>
      {/* main section */}
      <div className="z-30 basis-2/5 mt-8 md:mt-12 md:ml-32">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start md:ml-[-35px]">
            WANJIRU {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              NJENGA
            </span>
          </p>
          <p className="md:mx-0 mt-10 mb-7 text-sm text-center md:text-start">
            Hello 👋🏾👋🏾 I’m a FullStack developer with expertise in PHP, Laravel,
            MySQL, Node.js, Express, React, and Redux. I focus on delivering
            high-quality, scalable solutions by blending powerful backend
            architectures with responsive, intuitive frontend experiences. I’m
            passionate about innovation and continuous improvement, expanding my
            skills through self-assessment and learning from others.
            Problem-solving is at the core of my work , and I find fulfillment
            in creating impactful solutions that serve and uplift communities.
          </p>
        </motion.div>
        {/* Call to action */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <button
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={onButtonClick}
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              RESUME
            </div>
          </button>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}
