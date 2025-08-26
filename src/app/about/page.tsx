"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import AOS from "aos";
import img1 from "../../assets/image/img1.png"
import img2 from "../../assets/image/img2.png"
import img3 from "../../assets/image/img3.png"
import img4 from "../../assets/image/img4.png"
import icon1 from "../../assets/image/icon1.png";
import icon2 from "../../assets/image/icon2.png";
import "aos/dist/aos.css";
import aboutImg from "../../assets/image/about.png";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "LIAM BROWN",
    role: "Software Engineer, TechStartup Innovations",
    quote:
      "The 24/7 access and secure facilities have been incredibly convenient for my team's flexible schedules. We love the GOHASHINCLUDE space!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bg: "bg-[#0271B1] dark:text-white text-white",

  },
  {
    name: "MICHAEL RODRIGUEZ",
    role: "Creative Director, DesignCraft Studio",
    quote:
      "The aesthetics of GOHASHINCLUDE are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    bg: "bg-white",
  },
  {
    name: "MICHAEL THOMPSON",
    role: "Graphic Designer, DesignCo",
    quote:
      "As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work.",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    bg: "bg-white",
  },
  {
    name: "DAVID WILSON",
    role: "Project Manager, SoftwareSolutions LLC",
    quote:
      "The GOHASHINCLUDE space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed.",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    bg: "bg-white",
  },
  {
    name: "ALEX NGUYEN",
    role: "Marketing Consultant, Maverick Marketing",
    quote:
      "The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    bg: "bg-white",
  },
];


const features = [
  {
    icon: (
      <Image
        src={img1}
        alt="AI"
      />
    ),
    title: "Cross-Disciplinary Expertise",
    desc: "From web and mobile development to Salesforce, AI, ML, and cloud integration, our team brings decades of experience across disciplines. We transform complex challenges into elegant, scalable solutions grounded in real-world impact.",
  },
  {
    icon: (
      <Image
        src={img3}
        alt="AI"
      />
    ),
    title: "Agile, Transparent Collaboration",
    desc: "We believe the best outcomes come from shared vision. That’s why you remain fully engaged—receiving real-time updates, open communication, and seamless collaboration from the first sketch to final launch.",
  },
  {
    icon: (
      <Image
        src={img2}
        alt="AI"
      />
    ),
    title: "Curve with Emerging Technologies",
    desc: "At GoHashInclude, future-focused innovation isn’t optional—it’s essential. We harness Generative AI capabilities using GPT-4, advanced cloud frameworks, and modern development stacks ensuring your solutions stay ahead of the competition.",
  },
  {
    icon: (
      <Image
        src={img4}
        alt="AI"
      />
    ),
    title: "Tangible Results with Measurable Impact",
    desc: "Every deliverable is designed not just to function—but to perform. We ensure projects meet milestones, respect budgets, and drive measurable ROI—through enhanced efficiency, user growth, or business intelligence.",
  },
  {
    icon: (
      <Image
        src={img3}
        alt="AI"
      />
    ),
    title: "Enduring Partnership Beyond Launch",
    desc: "Our commitment extends past deployment. Through ongoing maintenance, dedicated support, and intelligent scaling strategies, we help your platform grow—and continue to thrive—as your business evolves.",
  },
  {
    icon: (
      <Image
        src={img3}
        alt="AI"
      />
    ),
    title: "Security and Compliance at the Core",
    desc: "We prioritize safeguarding your data and ensuring every solution meets industry-specific compliance standards. From secure coding practices to regulatory alignment, we build with trust and integrity.",
  },
];

export default function AboutPage() {
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
      <section className="bg-gradient-to-r from-white to-blue-50 py-18 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 lg:mt-10"
            data-aos="fade-up"
          >
            <span className=" text-gray-100 bg-[#0271B1] text-xs font-semibold px-5 py-3 rounded-3xl inline-block mb-4"
              data-aos="fade-up"
            >
              GOHASHINCLUDE Vision 2008
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-900"
              data-aos="fade-up"
            >
              Turning Ideas Into Digital <br className="hidden md:block" />
              Excellence Since 2008
            </h2>


            <p className="text-gray-600 text-lg mb-8 leading-relaxed"
              data-aos="zoom-in"
            >
              At GOHASHINCLUDE, we don’t just build software — we create transformative
              digital experiences that empower businesses to grow faster, smarter, and
              stronger in an ever-changing world.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0271B1] cursor-pointer text-white px-6 py-3 rounded-md transition">
                Our Programs
              </button>
              <button className="border cursor-pointer border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-[#0271B1] hover:text-white transition">
                Learn More
              </button>
            </div> */}
          </div>
         <div
      className="flex-1 flex justify-center"
      data-aos="fade-down"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={aboutImg}
            alt="About Us"
            width={550}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-25">
        <div className="flex-1"
          data-aos="zoom-in"
        >
          <h2 className="text-2xl font-bold mb-6">Meet GOHASHINCLUDE</h2>
          <ul className="space-y-4 text-gray-700 leading-relaxed list-disc pl-5 dark:text-white">
            <li>
             At GOHASHINCLUDE, we are more than just an IT solutions provider—we are your technology partner for sustainable digital success. With over 13 years of overall experience, including 6+ years of specialized expertise in AI/ML, we have been helping businesses of all sizes—from agile startups to global enterprises—leverage cutting-edge technology to unlock new opportunities, streamline operations, and achieve measurable growth.
            </li>
            <li>
              Our expertise spans web and mobile application development,
              AI/ML-powered solutions, cloud transformation, enterprise IT
              consulting, and custom software engineering. By combining deep
              industry knowledge with advanced technical capabilities, we craft
              secure, scalable, and future-ready solutions tailored to your
              unique business goals.
            </li>
            <li>
              Our team of passionate engineers, designers, and strategists
              specializes in Python, Node.js, React, Angular, Salesforce, AWS, and
              modern DevOps practices, ensuring that every solution is
              high-performing, user-centric, and built for long-term value.
              Whether you need to modernize legacy systems, build a robust digital
              platform, or integrate emerging technologies like AI and IoT, we
              have the expertise to turn your vision into reality.
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center relative" data-aos="fade-up">
          <div className="rounded-xl overflow-hidden w-full h-64 sm:h-80 md:h-[500px] relative">
            <Image
              src={aboutImg}
              alt="Experience Image 1"
              className="rounded-2xl w-full h-full object-cover"
            />

            <div
              className="absolute flex flex-col items-center justify-center animate-slideIn
             w-28 sm:w-36 md:w-65 h-28 sm:h-36 md:h-55
             right-[32%] bottom-[15%] sm:right-[15%] sm:bottom-[12%] md:right-[20%] md:bottom-[14%] lg:right-[25%] lg:bottom-[15%]"
              data-aos="zoom-in"
            >
              <div
                className="absolute 
             w-40 h-32    
             sm:w-52 sm:h-40
             md:w-85 md:h-80
             lg:w-85 lg:h-78
             xl:w-90 xl:h-78"
                style={{
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              ></div>


              <div
                className="relative bg-[#0271B1] text-white rounded-3xl px-6 py-4
               flex flex-col items-center justify-center border-5 border-white"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                data-aos="zoom-in"
              >
                <span className="text-3xl sm:text-7xl font-semibold mb-4 font-mono">13+</span>
                <span className="text-sm sm:text-2xl font-semibold">Experience</span>
              </div>
            </div>


          </div>
        </div>
      </section>





      <div className="flex flex-col md:flex-row gap-6 px-4 md:px-16 py-10 justify-center items-center">

        <div
          className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex-1 max-w-lg min-h-[280px] flex flex-col justify-between hover:shadow-lg transition relative"
          data-aos="zoom-in"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-[#0271B1] rounded-l-lg"></div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={icon2}
                alt="free"
                className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-extrabold text-[#0271B1]">Our Mission</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Our mission is to transform untapped business potential into digital
              excellence by crafting secure, responsive, and high-performance
              applications.
            </p>
            <p className="text-gray-600">
              We aim to deliver solutions that not only function but also inspire.
              By focusing on superior user experiences, robust security, and
              measurable business impact, we help organizations thrive in an
              increasingly digital-first world. Every line of code we write is
              driven by a commitment to innovation, precision, and tangible
              results.

            </p>
          </div>
        </div>

        <div
          className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex-1 max-w-lg min-h-[280px] flex flex-col justify-between hover:shadow-lg  transition relative"
          data-aos="zoom-in"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-[#0271B1] rounded-l-lg"></div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={icon1}
                alt="free"
                className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-extrabold text-[#0271B1]">Our Vision</h3>
            </div>
            <p className="text-gray-600 mb-2">
              Our vision is to be recognized worldwide as a leader in technology
              innovation, known for empowering businesses to shape a smarter, more
              connected, and sustainable future.
            </p>
            <p className="text-gray-600">
              We strive to create intelligent, purpose-driven solutions that
              bridge human creativity with the power of emerging technologies. By
              staying ahead of the curve in AI, cloud, and modern development
              frameworks, we aim to redefine how businesses innovate, scale, and
              succeed in the global digital economy.
              Our vision is to be recognized worldwide.

            </p>
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-white to-[#D6EAF8] mx-auto px-4 py-12">

        <h2 className="text-3xl lg:px-30 font-bold mb-2 dark:text-gray-900"
          data-aos="zoom-in"
        >Trusted By Businesses Worldwide</h2>
        <p className="text-gray-600 lg:px-30 mb-10"
          data-aos="zoom-in"
        >
          From startups to global enterprises, our clients share how GOHASHINCLUDE
          delivers innovation, reliability, and results they can count on.
        </p>

        <div
          className="flex  flex-wrap justify-center gap-20 mb-8"
          data-aos="fade-up"
        >
          {testimonials.slice(0, 3).map((t, idx) => (
            <div
              key={idx}
              className={`${t.bg} rounded-2xl p-8 dark:text-gray-600 text-center  max-w-xs flex flex-col items-center 
          transition-colors duration-300 hover:bg-[#0271B1] hover:text-gray-200`}
              style={{ marginTop: idx === 1 ? "40px" : "0px" }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full mb-4 object-cover"
              />
              <p className="text-sm mb-4 italic">"{t.quote}"</p>
              <h4 className="font-bold text-sm">{t.name}</h4>
              <p className="text-xs">{t.role}</p>
            </div>
          ))}
        </div>
        <div
          className="flex flex-wrap justify-center gap-8"
          data-aos="fade-up"
        >
          {testimonials.slice(3).map((t, idx) => (
            <div
              key={idx}
              className={`${t.bg} rounded-2xl dark:text-gray-600 p-10 text-center max-w-xs  flex flex-col items-center 
          transition-colors duration-300 hover:bg-[#0271B1] hover:text-gray-200`}
              style={{ marginTop: idx === 0 ? "20px" : "0px" }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full mb-4 object-cover"
              />
              <p className="text-sm mb-4 italic">"{t.quote}"</p>
              <h4 className="font-bold text-sm">{t.name}</h4>
              <p className="text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-30 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3"
          data-aos="fade-up"
        >
          What Sets Us Apart
        </h2>
        <p className="text-gray-600 max-w-3xl mb-10 dark:text-white"
          data-aos="zoom-in"
        >
          At GoHashInclude, it’s not just about executing projects; it’s about crafting experiences,
          engineering solutions, and forging partnerships that propel your ambitions forward.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-[#FAFAFA] hover:bg-[#D6EAF8] rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 aspect-square max-w-95"
            >
              <p className="mt-10">
                {feature.icon}
              </p>

              <h3 className="font-semibold mt-5 text-lg text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-3 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

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
    Book a free strategy call and discover how our Digital Core Capabilities
    can deliver measurable business outcomes.
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
