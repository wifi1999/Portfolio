"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Brain from "../components/brain";

const AboutPage = () => {
   const containerRef = useRef();

   const { scrollYProgress } = useScroll({ container: containerRef });

   const skillRef = useRef();
   // const isSkillRefInView = useInView(skillRef, {once:true});
   const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

   const experienceRef = useRef();
   const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

   return (
      <motion.div
         className="h-full"
         initial={{ y: "-200vh" }}
         animate={{ y: "0%" }}
         transition={{ duration: 1 }}
      >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
         {/* TEXT CONTAINER */}
         <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
            {/* BIOGRAPHY CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
               src="/portfolio.png"
               alt=""
               width={170}
               height={170}
               className="w-44 h-44 rounded-full object-cover mr-2"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-3xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-2xl">
               I'm Peter Li, a Frontend Engineer specializing in React, Angular, TypeScript, and JavaScript.<br /><br />
               Currently, I work as a Frontend Engineer at RockBook LLC, where I build UI features for a social media platform serving 2M+ daily users. Previously, I interned at Antra Inc as a Frontend Engineer, developing the UI for a real-time chatting platform that supports 10,000+ concurrent users. <br /><br />
               I’m passionate about giving back to the community. At Tails Adoption, a nonprofit focused on pet adoption, I led the migration from legacy code to modern UI frameworks, boosting user adoption efficiency by 30%. Additionally, I’ve contributed to open-source projects, such as CodeSandbox, where I refactored and optimized components to enhance the user experience for thousands of developers.<br /><br />
               I’m always eager to learn new technologies and improve my skills. Feel free to connect with me on LinkedIn or GitHub.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic"></span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end"></div>
            {/* BIOGRAPHY SCROLL SVG */}

            <motion.svg
               initial={{ opacity: 0.2, y: 0 }}
               animate={{ opacity: 1, y: "10px" }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               width={50}
               height={50}
            >
               <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
               ></path>
               <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
               <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
               ></path>
            </motion.svg>
            </div>
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
               initial={{ x: "-300px" }}
               animate={isSkillRefInView ? { x: 0 } : {}}
               transition={{ delay: 0.2 }}
               className="font-bold text-2xl"
            >
               SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
               initial={{ x: "-300px" }}
               animate={isSkillRefInView ? { x: 0 } : {}}
               className="flex gap-4 flex-wrap"
            >
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  HTML
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  CSS
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  TypeScript
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React.js
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React Native
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Redux
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Next.js
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Angular
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  SCSS
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Tailwind CSS
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Styled-Components
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Node.js
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Express.js
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  GraphQL
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  RESTful API
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MongoDB
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  PostgreSQL
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MySQL
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Babel
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Webpack
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Vite
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  AWS
               </div>
               <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Git
               </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
               initial={{ opacity: 0.2, y: 0 }}
               animate={{ opacity: 1, y: "10px" }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               width={50}
               height={50}
            >
               <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
               ></path>
               <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
               <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
               ></path>
            </motion.svg>
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
            >
            {/* EXPERIENCE TITLE */}
            <motion.h1
               initial={{ x: "-300px" }}
               animate={isExperienceRefInView ? { x: "0" } : {}}
               transition={{ delay: 0.2 }}
               className="font-bold text-2xl"
            >
               EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
               initial={{ x: "-300px" }}
               animate={isExperienceRefInView ? { x: "0" } : {}}
               className=""
            >
               {/* EXPERIENCE LIST ITEM */}
               <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                     Frontend Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                     I implemented user interfaces for the social media platform{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                     2024/06 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                     RockBook LLC
                  </div>
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                     {/* LINE CIRCLE */}
                     <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 "></div>
               </div>
               {/* EXPERIENCE LIST ITEM */}
               <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3 "></div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                     {/* LINE CIRCLE */}
                     <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                     Frontend Engineer Intern
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                     I implemented user interfaces for the live chatting platform{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                     2024/01 - 2024/06{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                     Antra Inc
                  </div>
                  </div>
               </div>
               {/* EXPERIENCE LIST ITEM */}
               <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                     Frontend Engineer Volunteer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                     I implemented user interfaces for the pet adoption platform
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                     2023/06 - Present
                  </div>
                     {/* JOB COMPANY */}
                     <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                     Tails Adoption
                  </div>
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                     {/* LINE CIRCLE */}
                     <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 "></div>
               </div>
            </motion.div>
            </div>
         </div>
         {/* SVG CONTAINER */}
         <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
            <Brain scrollYProgress={scrollYProgress} />
         </div>
      </div>
      </motion.div>
   );
};

export default AboutPage;