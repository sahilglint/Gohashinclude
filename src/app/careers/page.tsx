"use client";

import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function VisionSection() {
    const [jobRole, setJobRole] = useState("fulltime");

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
        });
        AOS.refresh();
      }, []);
  return (
    <>
    <section className="bg-gradient-to-r from-[#FFFFFF] to-[#D6EAF8] py-20 px-4 sm:px-6 lg:px-20">
      <div className="w-full lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:p-6">
        
        <div className="flex flex-col justify-center">
          <span className="bg-[#0271B1] text-white text-sm font-medium px-4 py-2 rounded-full mb-4 w-fit"
          data-aos="fade-up"
          >
            GOHASHINCLUDE Vision 2008
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug dark:text-black"
          data-aos="fade-up"
          >
            Build the Future with Us at GOHASHINCLUDE
          </h2>
          <p className="text-[#4A5565] text-sm md:text-base mb-6 leading-relaxed"
          data-aos="zoom-in"
          >
            At GOHASHINCLUDE, we don’t just build software — we create transformative
            digital experiences that enable businesses to grow faster, smarter, and
            stronger in an ever-evolving world. Since 2008, we’ve been committed to
            innovation and excellence, delivering solutions that are not only technically
            superior but also strategically aligned with our clients’ long-term success.
          </p>
          <a href="/about"> 
             <button className="bg-[#0271B1] text-white px-4 py-2 rounded-md cursor-pointer text-sm md:text-md w-fit"
          data-aos="zoom-in"
          >
            Learn More
          </button>
          </a>
         
        </div>

       <div data-aos="fade-down" className="flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="overflow-hidden rounded-lg w-full max-w-[500px]"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/teamcollaborating.png"
            alt="Team meeting"
            width={540}
            height={420}
            className="object-cover w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
      </div>
    </section>

 
    
    <section className="bg-white py-10 px-4 sm:px-8 lg:px-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-16 items-center">
    
    <div className="lg:col-span-3">
      <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-6 text-gray-900"
      data-aos="fade-up"
      >
        Introducing GOHASHINCLUDE
      </h2>
     <p className="font-bold text-[20px] text-[#0271B1] mb-2"
     data-aos="zoom-in"
     >
        Join the Digital Evolution with GoHashInclude
        </p>
     <ul className="space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base">

  <li data-aos="zoom-in">
    <span className="font-medium"></span>{" "}
    At <span className="font-bold text-black">GOHASHINCLUDE</span>, we’re more than an IT solutions provider — 
    we are catalysts for transformation. For over 13 years, we have partnered with businesses 
    across the globe, enabling them to leverage cutting-edge technologies to accelerate growth, 
    streamline operations, and explore new horizons. From building AI-driven platforms for ambitious 
    startups to engineering enterprise-grade systems for global brands, our journey has been fueled 
    by a single mission: to harness the power of innovation and make it work for people. <br />
    <span className="text-gray-700 font-semibold">
        We believe the best solutions are born from collaboration, respect, and openness. 
    Our workplace is driven by: 
    </span>
    
    <br />
    <span className="block ml-3 mb-2 mt-2"><span className="font-semibold">Integrity</span> – Doing what’s right, always.</span>
    <span className="block ml-3 mb-2"><span className="font-semibold">Collaboration</span> – Working as one team with our clients and each other.</span>
    <span className="block ml-3 mb-2"><span className="font-semibold">Learning</span> – Staying curious and committed to continuous growth.</span>
    <span className="block ml-3"><span className="font-semibold">Impact</span> – Building solutions that matter in the real world.</span>
  </li>
</ul>

    </div>

    <div className="lg:col-span-2 flex justify-center lg:justify-end"
   
    >
  <div className="w-full max-w-[350px] rounded-2xl sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] overflow-hidden"
   data-aos="fade-down"
  >
    <Image
      src="/teammeeting.png"
      alt="Team collaboration"
      width={800}
      height={800}
      className="object-cover  w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[550px]"
      priority
    />
  </div>
</div>


  </div>
    </section>
       <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-8 dark:text-white"
      data-aos="fade-up"
      >
        Empowering Your Next Career Move
      </h2>

      <form className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        data-aos="zoom-in"
        >
          <div className="relative">
            <input
              type="text"
              id="firstName"
              className="peer w-full border-b-2 dark:border-white border-gray-800 focus:border-[#0271B1] outline-none py-2 bg-transparent placeholder-transparent"
              placeholder="First Name"
            />
            <label
              htmlFor="firstName"
              className="absolute left-0 -top-3.5 text-gray-800 dark:peer-placeholder-shown:text-white font-medium text-sm transition-all peer-placeholder-shown:text-gray-800 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0271B1]"
            >
              First Name
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="lastName"
              className="peer w-full border-b-2 dark:border-white border-gray-800 focus:border-[#0271B1] outline-none py-2 bg-transparent placeholder-transparent"
              placeholder="Last Name"
            />
            <label
              htmlFor="lastName"
              className="absolute left-0 -top-3.5 text-gray-800 font-medium text-sm transition-all dark:peer-placeholder-shown:text-white peer-placeholder-shown:text-gray-800 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0271B1]"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        data-aos="zoom-in"
        >
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full border-b-2 dark:border-white border-gray-800 focus:border-[#0271B1] outline-none py-2 bg-transparent placeholder-transparent"
              placeholder="Email Address"
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-800 font-medium text-sm transition-all dark:peer-placeholder-shown:text-white peer-placeholder-shown:text-gray-800 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0271B1]"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="relative"
          >
            <input
              type="tel"
              id="phone"
              className="peer w-full border-b-2 border-gray-800 dark:border-white focus:border-[#0271B1] outline-none py-2 bg-transparent placeholder-transparent"
              placeholder="Phone Number"
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-3.5 text-gray-800 text-sm transition-all font-medium dark:peer-placeholder-shown:text-white peer-placeholder-shown:text-gray-800 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0271B1]"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
          </div>
        </div>

        <div className="relative"
        data-aos="zoom-in"
        >
          <textarea
            id="message"
            rows={3}
            className="peer w-full border-b-2 border-gray-800 dark:border-white focus:border-[#0271B1] outline-none py-2 bg-transparent placeholder-transparent resize-none"
            placeholder="Write your message..."
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-3.5 font-medium text-gray-800 text-sm transition-all dark:peer-placeholder-shown:text-white peer-placeholder-shown:text-gray-800 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0271B1]"
          >
            Message
          </label>
        </div>

        <div
        data-aos="zoom-in"
        >
          <p className="text-sm font-medium text-gray-700 mb-3 dark:text-white">Select Job Role?</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="fulltime"
                checked={jobRole === "fulltime"}
                onChange={(e) => setJobRole(e.target.value)}
                className="w-4 h-4 text-black border-gray-300 focus:ring-black"
              />
              <span className="text-gray-700 dark:text-white">Full Time</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                value="internship"
                checked={jobRole === "internship"}
                onChange={(e) => setJobRole(e.target.value)}
                className="w-4 h-4 text-black border-gray-300 focus:ring-black"
              />
              <span className="text-gray-700 dark:text-white">Internship</span>
            </label>
          </div>
        </div>
        <div className="flex justify-center"
        data-aos="zoom-in"
        >
        <button
          type="submit"
          className="w-1/3 px-6 py-3 bg-[#0271B1] text-lg cursor-pointer text-white font-medium rounded-md shadow hover:bg-[#08a0f8] transition"
        >
          Submit
        </button>
        </div>
      </form>


<div className="mt-16 w-full bg-gradient-to-l to-[#0271B1] from-[#003B92] rounded-lg py-10 px-6 flex flex-col items-center text-center animate-pulse-light">
  <h2
    className="text-white text-xl md:text-2xl font-semibold mb-2"
    data-aos="fade-up"
  >
    Ready to transform your digital plane?
  </h2>
  <p
    className="text-blue-100 max-w-2xl mb-6 text-sm md:text-base"
    data-aos="fade-up"
  >
    Book a free strategy call and discover how our Digital Core
    Capabilities can deliver measurable business outcomes.
  </p>

  <div
    className="flex flex-col sm:flex-row gap-4"
    data-aos="zoom-in"
  >
    <a href="/contact">
      <button className="text-gray-900 font-bold border-2 cursor-pointer hover:bg-[#0271B1] hover:text-white border-white px-6 py-3 rounded-lg bg-white transition hover:scale-105 hover:shadow-lg">
        Book Free Consultation
      </button>
    </a>
  </div>
</div>

    </section>
  
  <Footer />
    </>
  );
}