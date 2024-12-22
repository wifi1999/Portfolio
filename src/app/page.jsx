"use client"
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from 'next/link';  

const Homepage = () => {
  return (
    <motion.div 
      className="h-full" 
      initial={{ y: "-200vh" }} 
      animate={{ y: "0%" }} 
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* IMAGE CONTAINER */}
        {/* <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div> */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/portfolio.png" alt="" fill className="object-contain mr-2" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-start justify-center ml-12">
          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl font-bold">Peter Li | Frontend Engineer</h1>
          {/* DESC */}
          <p className="md:text-xl">Create responsive and user-friendly user interfaces</p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
