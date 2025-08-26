"use client";
import { useRef, useEffect, useState, useMemo, ReactNode } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";
import {
  FaLightbulb,
  FaCheckCircle,
  FaSyncAlt,
  FaRunning,
  FaChartLine,
  FaTools,
  FaUsers,
  FaServer,
  FaTruck,
  FaCar,
  FaMobileAlt,
  FaCreditCard,
  FaGraduationCap
} from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import { 
  FaProjectDiagram,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import Network from "@/components/Network";

type Card = {
  title: string;
  icon: ReactNode;
  desc: string;
};

const cardsData: Card[] = [
  {
    title: "Automotive",
    icon: <FaCar className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "We’ve worked in the automotive sector to meet diverse automotive product development needs, advanced vehicles that are safer, perform better, and are more fuel efficient by implementing the latest technology in autonomous and electric vehicles",
  },
  {
    title: "Consumer Electronics",
    icon: <FaMobileAlt className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "Our team has helped clients meet their consumer electronics product development needs, advanced gadgets, and smart devices to improve the quality of everyday life.lum",
  },
  {
    title: "Financial Technology",
    icon: <FaCreditCard className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "We have served clients with financial technology product development needs, innovative solutions, and next-generation technologies for banking, payments, and financial management that will provide secure and improved user experiences on digital transactions.",
  },
  {
    title: "Education Technology (EdTech)",
    icon: <FaGraduationCap className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "We have developed learning through interactive platforms, adaptive learning systems, and digital tools to deliver seamless educational experiences for students and educators.",
  },
  {
    title: "E-commerce",
    icon: <FaTruck className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "We have served clients with E-commerce product development to meet diverse client needs for online shopping platforms, enhancing user experience, inventory management, and personalized marketing.",
  },
  //{
  //title: "Travel & Transportation",
  //icon: <FaBook className="text-3xl sm:text-4xl text-[#0271B1]" />,
  // desc: "Travel & transportation services have always been highly prominent and there is great amount of scope in this sector.",
  //},
];

const services = [
  {
    title: "MVP/Prototype Development",
    desc: "Gohash offers impeccable MVP and prototype development solutions to validate your product idea before making its market launch. With MVP services, we help you test the effectiveness of your product, predict potential market...",
    icon: <FaLightbulb className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Product Team Extension",
    desc: "Enhance your developers’ potential with Gohash – a product development agency. Outsourcing technical human resources ensures that you get to develop and refine your product. The above functions served by our offshore team extension...",
    icon: <FaUsers className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Product Architecture Design",
    desc: "We enlist a design team of experts who ensure your ideas are transformed into real products; added to which is the advantage of competitiveness, which should seal your success in the market. By focusing on usability and...",
    icon: <FaProjectDiagram className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Maintenance & Support",
    desc: "Get end-to-end support & product development consulting for the maintenance and upgrade with Gohash. The integration includes full services that entail maintenance, enhancement, and ticket resolution. The approach is aimed at maintaining the up-to-date technological stack of your product and its...",
    icon: <FaTools className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Product Modernization",
    desc: "Leveraging cutting-edge technologies like DevOps and agile development methodologies, we revamp your existing product and modernize legacy systems to improve responsiveness, bringing automation and agility while developing it.",
    icon: <FaSyncAlt className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Agile Development",
    desc: "We offer agile development including Strategy & Consulting, Enterprise Agile Strategy Implementation, Agile Coaching & Mentoring to make your product development lean, quick, and market-responsive.",
    icon: <FaRunning className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Product Testing",
    desc: "When you intend to launch into the market, our exclusive product testing services assure that your products are correctly tested, reliable, and ready for the market. We conduct strict Quality assurance testing to ensure that the...",
    icon: <FaCheckCircle className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Agile DevOps Services",
    desc: "Our services consist of DevOps planning and advisory, end-to-end DevOps for the enterprise, as well as key DevOps process integration with automation throughout the SDLC. Thus, when combined with agile and DevOps methodologies,...",
    icon: <FaServer className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Product Scaling & Performance Optimization",
    desc: "Ensure your product grows with your business. We specialize in scaling architecture, optimizing app performance, and ensuring seamless user experience under high traffic loads.",
    icon: <FaChartLine className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  //{
  //title: "Multi-Experience Development",
  //desc: "We help you deliver high-quality user experiences across various types of devices following a multi-experience development approach to offer seamless applications.",
  //icon: <FaChartBar className="text-4xl sm:text-5xl text-[#2071B1]" />,
  //},
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  exit: { opacity: 0, y: 40, scale: 0.95 },
};

const innerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AI() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const visibleServices = showAll ? services : services.slice(0, 3);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.3 });

  const ordered = useMemo(() => {
    return [...cardsData.slice(index), ...cardsData.slice(0, index)];
  }, [index]);

  const paginate = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return cardsData.length - 1;
      if (next >= cardsData.length) return 0;
      return next;
    });
  };

  const topCard = ordered[0];
  const stackBehind = ordered.slice(1, 5);

  const swipeVariants: Variants = {
    enter: (dir: 1 | -1) => ({
      x: dir > 0 ? (isMobile ? 180 : 280) : isMobile ? -180 : -280,
      rotate: dir > 0 ? 10 : -10,
      opacity: 0,
      scale: 0.95,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 240, damping: 22, mass: 0.7 },
    },
    exit: (dir: 1 | -1) => ({
      x: dir > 0 ? (isMobile ? -160 : -260) : isMobile ? 160 : 260,
      rotate: dir > 0 ? -10 : 10,
      opacity: 0,
      scale: 0.9,
      filter: "blur(6px)",
      transition: { type: "spring", stiffness: 200, damping: 24, mass: 0.7 },
    }),
  };

  const swipeConfidenceThreshold = 650;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const features = [
    {
      title: "High Failure Rate",
      desc: "A staggering 95% of new products fail within a year of their launch. This high failure rate underscores the challenges and complexities involved in successful product development (Harvard Business School)",
    },
    {
      title: "Speed to Market Advantage",
      desc: "Companies that can reduce their product development cycle time by six months can see a 33% increase in their market share, emphasizing the critical importance of efficient development processes (McKinsey & Company)",
    },
    {
      title: "Innovation Investment Returns",
      desc: "Firms that invest heavily in Research and Development (R&D) outperform their peers, with every dollar invested in R&D returning approximately $2.20 in increased market capitalization over five years (PwC's Global Innovation 1000 study)",
    },
  ];

  const industries = [
    "Retail & eCommerce",
    "Healthcare",
    "Banking & Finance",
    "Solutions",
    "Travel & Transportation",
    "Agency",
  ];

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <section className="relative w-full bg-gradient-to-r from-[#FFFFFF] to-[#D6EAF8] lg:py-22 px-4 sm:px-6 py-12 md:py-16 md:px-8 lg:px-12 overflow-hidden">
          <motion.div
            className="absolute top-20 -left-20 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 -right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6 text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Product <span className="text-[#0271B1]">Development</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 max-w-xl mx-auto md:mx-0">
                {" "}
                {/*<span className="font-semibold text-[#0271B1]">
                  GOHASHINCLUDE
                </span>*/}
                As a trusted product development company, we help our clients
                build innovative & market-winning software faster that is
                business-centric & and stable. From SaaS Modeling Tools, IoT,
                AI, and Cloud Computing to Social Technologies, we create value
                with our product engineering and development solutions. Looking
                for product development companies near me? Call us now!
              </p>
              <div className="pt-2">
                <a href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#0271B1] text-white px-6 py-3 cursor-pointer rounded-lg shadow-lg hover:shadow-xl hover:bg-[#05a3ff] transition-all text-sm sm:text-base"
                  >
                    Schedule a call
                  </motion.button>
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center mt-6 md:mt-0"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xs sm:max-w-sm md:max-w-md"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
              >
                <img
                  src="/ai.png"
                  alt="AI Graphic"
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
            Product Development Services
          </h1>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={`${service.title}-${i}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="p-4 md:p-6 rounded-xl border-2 border-gray-300 bg-[#F5F5F5] hover:bg-white shadow-sm hover:shadow-lg hover:border-[#0271B1] hover:border-2 cursor-pointer transition"
              >
                <motion.div
                  custom={i}
                  variants={innerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="flex items-center gap-3 mb-3 md:mb-4"
                >
                  {service.icon}
                  <h2 className="text-base md:text-lg font-semibold dark:text-gray-900">
                    {service.title}
                  </h2>
                </motion.div>

                <motion.p
                  custom={i}
                  variants={innerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="text-gray-600 text-sm md:text-md"
                >
                  {service.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* MOBILE VIEW */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <AnimatePresence>
                {visibleServices.map((service, i) => (
                  <motion.div
                    key={`${service.title}-${i}`}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ scale: 1.02 }}
                    className="p-4 sm:p-6 rounded-xl border-2 border-gray-300 bg-white shadow-sm hover:shadow-md hover:border-[#0271B1] hover:border-2 cursor-pointer transition"
                  >
                    <motion.div
                      custom={i}
                      variants={innerVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center gap-3 mb-3"
                    >
                      {service.icon}
                      <h2 className="text-base sm:text-lg font-semibold">
                        {service.title}
                      </h2>
                    </motion.div>

                    <motion.p
                      custom={i}
                      variants={innerVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-600 text-sm"
                    >
                      {service.desc}
                    </motion.p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700 transition text-sm"
              >
                {showAll ? "Show Less" : "View All Services"}
              </button>
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section
          ref={sectionRef}
          className="relative w-full bg-[#D6EAF8] py-12 md:py-16 overflow-hidden"
          style={{ perspective: 1000 }}
        >
          <Network />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-center md:text-left">
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-gray-900 font-bold mb-4 leading-snug"
                data-aos="fade-up"
              >
                Product Solution For Industries
              </h2>
              <p
                className="text-gray-600 mb-6 text-sm sm:text-base"
                data-aos="zoom-in"
              >
                Known as one of the best product development companies, our
                product developers have garnered a decade-long industry-wide
                experience on niche-based project requirements leveraging the
                latest technologies.
              </p>
              <button
                data-aos="zoom-in"
                onClick={() => paginate(1)}
                className="px-5 py-2.5 bg-[#0271B1] cursor-pointer text-white rounded-md shadow hover:bg-[#049cf4] transition text-sm sm:text-base"
              >
                Explore Industries
              </button>
            </div>

            <div className="relative flex justify-center items-center h-[320px] sm:h-[350px] md:h-[380px] lg:h-[400px] mt-4 md:mt-0 overflow-hidden">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                {stackBehind.map((card, i) => (
                  <motion.div
                    key={card.title}
                    layout
                    initial={false}
                    animate={
                      inView
                        ? {
                            y: (i + 1) * -12,
                            scale: 1 - (i + 1) * 0.03,
                            opacity: 1 - (i + 1) * 0.08,
                            zIndex: 1,
                            backgroundColor: `rgba(0, 115, 230, ${
                              0.8 - i * 0.15
                            })`,
                          }
                        : { opacity: 0, y: 20, scale: 0.98 }
                    }
                    transition={{ type: "spring", stiffness: 140, damping: 18 }}
                    className="absolute top-0 bottom-8 w-full p-4 sm:p-5 md:p-10 rounded-xl md:rounded-2xl shadow-lg text-white"
                  />
                ))}

                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={topCard.title}
                    custom={direction}
                    variants={swipeVariants}
                    initial="enter"
                    animate={inView ? "center" : "enter"}
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      const swipe = swipePower(info.offset.x, info.velocity.x);
                      if (swipe > swipeConfidenceThreshold) paginate(1);
                      else if (swipe < -swipeConfidenceThreshold) paginate(-1);
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.01,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }}
                    whileTap={{ scale: 0.99 }}
                    className="relative w-full rounded-xl md:rounded-2xl shadow-xl 
               p-4 sm:p-5 md:p-6 bg-white flex flex-col overflow-hidden"
                    style={{ zIndex: 2 }}
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  >
                    {/* Card Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl md:text-2xl">
                          {topCard.icon}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold dark:text-gray-900">
                          {topCard.title}
                        </h3>
                      </div>

                      <motion.p
                        key={`${topCard.title}-desc`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="text-gray-600 text-xs sm:text-sm md:text-base mb-4 md:mb-6"
                      >
                        {topCard.desc}
                      </motion.p>
                    </div>

                    {/* Arrow pinned at bottom-right as overlay */}
                    <button
                      onClick={() => paginate(1)}
                      className="absolute bottom-4 right-4 p-1.5 sm:p-2 rounded-full cursor-pointer 
                 bg-gray-500 text-white hover:bg-[#0271B1] transition"
                    >
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10"
                data-aos="fade-right"
              >
                Why Choose GOHASHINCLUDE for Product Development?
              </h2>
              <ul className="space-y-3 md:space-y-4 text-gray-700">
                {features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2"
                    data-aos="fade-up"
                    data-aos-delay={100 * (i + 1)}
                  >
                    <CheckCircle
                      className="text-[#0271B1] mt-0.5 sm:mt-1 flex-shrink-0 sm:w-5 sm:h-5"
                      size={16}
                    />
                    <span className="text-sm sm:text-base">
                      <span className="font-semibold text-[#0271B1]">
                        {feature.title}
                      </span>{" "}
                      — <span className="dark:text-white">{feature.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="flex justify-center mt-8 md:mt-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="bg-white shadow-lg md:shadow-xl rounded-xl overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-56 md:h-64 lg:h-80 flex justify-center items-center">
                <img
                  src="/ai.png"
                  alt="AI hand"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6"
              data-aos="fade-right"
            >
              Industries We Serve
            </h3>
            <div
              className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start"
              data-aos="fade-up"
            >
              {industries.map((industry, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-[#0271B1] font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="w-full bg-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 ">
            {/* Section Heading */}
            <div className="mt-6 md:mt-0 text-left" data-aos="fade-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Benefits of our Product Development
              </h2>
              <p className="mt-2 mb-10 lg:mb-2 text-gray-600 text-sm sm:text-base">
                We are the trusted product development platform that helps you
                with early-stage explorations, core product development, and
                software product engineering, and looks after overall quality
                and manufacturability. Explore how leveraging product
                development can benefit your business to the fullest-:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-10">
                <div
                  className="relative flex items-start gap-4"
                  data-aos="fade-right"
                >
                  <span className="absolute -top-6 -left-4 text-5xl md:text-7xl font-extrabold text-orange-100 opacity-30 select-none pointer-events-none">
                    01
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-orange-500 relative z-10">
                    01
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                      End-to-End Development
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Comprehensive services from ideation to launch, ensuring a
                      smooth and cohesive product development lifecycle,
                      minimizing delays and maximizing quality.
                    </p>
                  </div>
                </div>

                <div
                  className="relative flex items-start gap-4"
                  data-aos="fade-left"
                >
                  <span className="absolute -top-6 -left-4 text-5xl md:text-7xl font-extrabold text-green-100 opacity-30 select-none pointer-events-none">
                    02
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-green-500 relative z-10">
                    02
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                      Innovative Solutions
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Leveraging cutting-edge technologies and creative
                      problem-solving to deliver unique and innovative products
                      that meet market demands and user expectations.
                    </p>
                  </div>
                </div>

                <div
                  className="relative flex items-start gap-4"
                  data-aos="zoom-in"
                >
                  <span className="absolute -top-6 -left-4 text-5xl md:text-7xl font-extrabold text-emerald-100 opacity-30 select-none pointer-events-none">
                    03
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-emerald-500 relative z-10">
                    03
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                      User-Centered Design
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Focus on designing products with a user-first approach,
                      ensuring that the final product is intuitive, functional,
                      and provides a great user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center lg:justify-end"
                data-aos="fade-left"
              >
                <img
                  src="/grp.png"
                  alt="Developer working"
                  className="w-full max-w-md lg:max-w-lg object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div
                className="hidden lg:flex justify-start items-center -translate-x-10"
                data-aos="fade-right"
              >
                <img
                  src="/grp.png"
                  alt="Developer working"
                  className="w-full max-w-md lg:max-w-lg object-contain"
                />
              </div>

              <div className="flex flex-col justify-center space-y-10">
                <div
                  className="relative flex items-start gap-4"
                  data-aos="zoom-in"
                >
                  <span className="absolute -top-6 -left-4 text-5xl md:text-7xl font-extrabold text-emerald-100 opacity-30 select-none pointer-events-none">
                    04
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-emerald-500 relative z-10">
                    04
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                      Faster Time to Market
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Streamlined processes, agile methodologies, and efficient
                      project management help bring products to market faster,
                      giving businesses a competitive edge.
                    </p>
                  </div>
                </div>

                <div
                  className="relative flex items-start gap-4"
                  data-aos="zoom-in"
                >
                  <span className="absolute -top-6 -left-4 text-5xl md:text-7xl font-extrabold text-emerald-100 opacity-30 select-none pointer-events-none">
                    05
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-emerald-500 relative z-10">
                    05
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                      Quality Assurance and Testing
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Rigorous testing and quality assurance processes ensure
                      that the product is reliable, secure, and performs
                      optimally in real-world scenarios.
                    </p>
                  </div>
                </div>

                <div
                  className="relative flex items-start gap-4"
                  data-aos="zoom-in"
                >
                  <span className="absolute -top-6 -left-4 text-5xl md:text-7xl font-extrabold text-emerald-100 opacity-30 select-none pointer-events-none">
                    06
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-emerald-500 relative z-10">
                    06
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                      Scalability and Integration
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Building products that can evolve with your business,
                      ensuring they can scale easily as user demand grows or as
                      market conditions change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA BOX */}
          <div className="mt-12 md:mt-16 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="w-full max-w-7xl mx-auto bg-gradient-to-l to-[#0271B1] from-[#003B92] rounded-lg py-8 px-4 sm:py-10 sm:px-6 flex flex-col items-center text-center animate-pulse-light">
              <h2
                className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2"
                data-aos="fade-up"
              >
                Ready to transform your digital plane?
              </h2>

              <p
                className="text-blue-100 max-w-2xl mb-4 sm:mb-6 text-xs sm:text-sm md:text-base"
                data-aos="fade-up"
              >
                Book a free strategy call and discover how our Digital Core
                Capabilities can deliver measurable business outcomes.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3"
                data-aos="zoom-in"
              >
                <a href="/contact">
                  <button className="text-gray-900 font-bold border-2 cursor-pointer hover:bg-[#0271B1] hover:text-white border-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-white transition hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                    Book Free Consultation
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
