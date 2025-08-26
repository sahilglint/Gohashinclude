"use client";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const team = [
  { name: "Sanjay Orlop", role: "Lead Product", image: "/teammember1.png", twitter: "#", linkedin: "#", dribbble: "#" },
  { name: "Rignal Lee", role: "Lead Product", image: "/teammember2.png", twitter: "#", linkedin: "#", dribbble: "#" },
  { name: "Ove Stingle", role: "Lead Product", image: "/teammember3.png", twitter: "#", linkedin: "#", dribbble: "#" },
  { name: "Maci Mart", role: "Lead Product", image: "/teammember4.png", twitter: "#", linkedin: "#", dribbble: "#" },
  { name: "Hatrick Ruler", role: "Lead Product", image: "/teammember5.png", twitter: "#", linkedin: "#", dribbble: "#" },
  { name: "Eva Yangi", role: "Lead Product", image: "/teammember6.png", twitter: "#", linkedin: "#", dribbble: "#" },
  { name: "Rahen Mohan", role: "Lead Product", image: "/teammember7.png", twitter: "#", linkedin: "#", dribbble: "#" },
  { name: "Amari Chauves", role: "Lead Product", image: "/teammember8.png", twitter: "#", linkedin: "#", dribbble: "#" },
  { name: "Roland Yangi", role: "Lead Product", image: "/teammember9.png", twitter: "#", linkedin: "#", dribbble: "#" },
];

export default function TeamSection() {
  const [showAll, setShowAll] = useState(false);
  const [colCount, setColCount] = useState(3);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
    AOS.refresh();

    const updateColCount = () => {
      const width = window.innerWidth;
      if (width < 640) setColCount(1);
      else if (width < 1024) setColCount(2);
      else setColCount(3);
    };

    updateColCount();
    window.addEventListener("resize", updateColCount);
    return () => window.removeEventListener("resize", updateColCount);
  }, []);

  const isMobile = colCount === 1;
  const defaultItemsToShow = isMobile ? 3 : colCount * 2;
  const visibleMembers = showAll ? team : team.slice(0, defaultItemsToShow);

  return (
    <>
      <section className="relative px-6 md:px-[120px] bg-gradient-to-b  from-[#FFFFFF] to-[#D6EAF8]">
        <div className="min-h-screen  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="text-center md:text-left"

          >
            <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-gray-900 mb-4"
              data-aos="fade-up"
            >
              Our Team Members
            </h2>
            <p className="text-[#6B6B6B] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed"
              data-aos="zoom-in"
            >
              Our team leverages the power of talented and ambitious professionals to create scalable,
              result-driven solutions. They are trained by global enterprises to deliver secure,
              high-performance outcomes, intelligent systems, and seamless integrations.
            </p>
          </div>

          <div
      className="flex justify-center"
      data-aos="fade-down"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/user-group.png"
            alt="Team Members"
            width={350}
            height={350}
            className="rounded-full object-cover w-[250px] sm:w-[300px] md:w-[400px] h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleMembers.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="group bg-white rounded-lg shadow transition overflow-hidden"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={600}
                  className="w-full h-80 object-cover"
                />
                <div className="p-2">
                  <div className="items-center justify-between">
                    <h3 className="text-lg font-medium text-[#333333]">{member.name}</h3>
                    <div className="flex float-right space-x-3">
                      <a href={member.twitter} className="text-[#9497A1] hover:text-[#0271B1] transition">
                        <FaTwitter size={18} />
                      </a>
                      <a href={member.linkedin} className="text-[#9497A1] hover:text-[#0271B1] transition">
                        <FaLinkedin size={18} />
                      </a>
                      <a href={member.dribbble} className="text-[#9497A1] hover:text-[#0271B1] transition">
                        <FaFacebook size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-[#9497A1] mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {team.length > defaultItemsToShow && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 bg-[#0271B1] text-white rounded-md transition cursor-pointer"
              >
                {showAll ? "Show Less" : "Load More"}
              </button>
            </div>
          )}
        </div>

       <div className="mt-16 max-w-6xl mx-auto bg-gradient-to-l to-[#0271B1] from-[#003B92] rounded-lg py-10 px-6 flex flex-col items-center justify-center text-center animate-pulse-light">
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
    className="flex flex-col sm:flex-row gap-4 justify-center"
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
