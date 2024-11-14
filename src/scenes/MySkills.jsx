import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export default function MySkills() {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-2 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-16 md:mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            As a Data Analyst, I bring expertise in:
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-12 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 h-[300px] w-full"
                src="/skills.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="/skills.jpg" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="sm:grid sm:grid-cols md:grid-cols-2 lg:grid-cols-3 mt-16 md:mt-0 gap-16">
        <motion.div
          className=" mt-10 p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">01</p>
              <p className="font-playfair font-semibold text-2xl mt-4">
                MySql
              </p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-yellow absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiMysql className="h-20 w-32" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" mt-10  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">02</p>
              <p className="font-playfair font-semibold text-2xl mt-3">MsSql</p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-red absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiMicrosoftsqlserver className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className=" mt-10  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">03</p>
              <p className="font-playfair font-semibold text-2xl mt-3">Postgresql</p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiPostgresql alt="" className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">04</p>
              <p className="font-playfair font-semibold text-2xl mt-3">Python</p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiPython alt="" className="h-20 w-32" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">05</p>
              <p className="font-playfair font-semibold text-2xl mt-3">PowerBI</p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-red absolute right-0 top-0 z-[-1] flex justify-center items-center">
              <SiPowerbi className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">06</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Tableau
              </p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-yellow absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiTableau alt="" className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0 p-2  rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">07</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Ms Excel
              </p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-red absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiMicrosoftexcel alt="" className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2  rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mt-0 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">8</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Mongodb
              </p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiMongodb className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mt-0 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">9</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Git & Github
              </p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-blue absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <img src="/merge.png" alt="" className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 md:mt-0  p-2 rounded-md cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md transition-shadow duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 md:mt-0 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">10</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Google Analytics
              </p>
            </div>
            <div className="w-1/2 md:w-3/8 h-32 bg-red absolute right-0 top-0 z-[-1] flex items-center justify-center">
              <SiGoogleanalytics className="h-20 w-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
