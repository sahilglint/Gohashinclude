"use client";
import { useRef, useEffect, useState, useMemo, ReactNode } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";
import {
  FaLaptopCode,
  FaHospital,
  FaShoppingCart,
  FaMoneyBillWave,
  FaTruck,
  FaBook
} from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  FaRobot,
  FaBrain,
  FaLanguage,
  FaEye,
  FaCogs,
  FaDatabase,
  FaChartBar,
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
    title: "Retail and Ecommerce",
    icon: <FaLaptopCode className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "We specialize in improving the functionality of Salesforce that can be leveraged to increase online sales, better customer experience, and inventory management for retail and eCommerce companies.",
  },
  {
    title: "Agency",
    icon: <FaHospital className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "By implementing Salesforce, we have optimized agency operations by specifying the ClientPRO payroll system to include follow-ups after client presentations, simplifying the document tracking process with native Salesforce workflows, and configuring Salesforce as the client and project management tool to meet agencies’ needs.",
  },
  {
    title: "Healthcare",
    icon: <FaShoppingCart className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "By implementing Salesforce in our practice, we have successfully managed patients safely through efficient systems and adhere to the existing guidelines in the sphere, thus promoting better services and operations.",
  },
  {
    title: "Banking",
    icon: <FaMoneyBillWave className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "Our team has developed apps to perform transactions, check balances, pay bills, manage personal expenses, and enable biometrics with fraud detection features.",
  },
  {
    title: "Solutions",
    icon: <FaTruck className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "We’ve developed mobile apps to help solutions and clients book hotels and flights, provide round-the-clock support with chatbots, and assist travelers with language barriers.",
  },
  {
    title: "Travel & Transportation",
    icon: <FaBook className="text-3xl sm:text-4xl text-[#0271B1]" />,
    desc: "Travel & transportation services have always been highly prominent and there is great amount of scope in this sector.",
  },
];

const services = [
  {
    title: "Salesforce Consulting",
    desc: "Our dedicated professional CRM experts offer customized consultation services to help your organization advance marketing, sales, and cloud capabilities, primarily by aligning the software with business requirements for productivity.",
    icon: <FaRobot className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Force.com Development",
    desc: "Build sustainable utility applications on the Force. com platform because it is designed to fit your business needs while also accommodating your company’s growth potential.",
    icon: <FaBrain className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Salesforce Mobile App Development",
    desc: "Our Salesforce mobile application solutions are developed to provide your team with the tailor-made functionality of Salesforce at their disposal, aimed at increasing efficiency and convenience.",
    icon: <FaLanguage className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Salesforce Lightning Development",
    desc: "Deliver clean and modern UI experiences for your users with Salesforce Lightning; complement this with accessibility to promote usage across the enterprise.",
    icon: <FaEye className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Salesforce Integration",
    desc: "Easily and quickly integrate Salesforce with any cloud or on-premises system like ERP, Marketing Automation Platforms, and Order Management Systems to optimize complex information flow.",
    icon: <FaCogs className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "AppExchange Development",
    desc: "Looking for white-label product development for AppExchange? Gohash will help you create new applications and work closely for you with end-to-end AppExchange development services.",
    icon: <FaChartBar className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Salesforce Package Development",
    desc: "Our experts work closely with you to develop manage and unmanaged app packages for your new or existing products. We help you build from scratch – Planning to publishing app on AppExchange for high security.",
    icon: <FaProjectDiagram className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Salesforce Implementation",
    desc: "With our Salesforce implementation services, you can be sure that the right planning is done to ensure you achieve a successful deployment that is pertinent to your company’s goals and the potential of the platform.",
    icon: <FaDatabase className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
  {
    title: "Salesforce Support & Maintenance",
    desc: "Ongoing monitoring, troubleshooting, and optimization of your Salesforce environment to ensure peak performance, security, and seamless adoption across your organization.",
    icon: <FaChartBar className="text-4xl sm:text-5xl text-[#2071B1]" />,
  },
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
      title: "Market Dominance",
      desc: "Salesforce holds approximately 19.8% of the global CRM market share, making it the leading CRM provider worldwide.",
    },
    {
      title: "Revenue Growth",
      desc: "Salesforce reported a revenue of $26.49 billion for the fiscal year 2023, showcasing significant growth and market demand for its services.",
    },
    {
      title: "User Adoption",
      desc: "Over 150,000 companies globally use Salesforce, highlighting its widespread adoption and trust across diverse industries.",
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
                Salesforce <span className="text-[#0271B1]">Development</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-3 max-w-xl mx-auto md:mx-0">
                {" "}
                {/*<span className="font-semibold text-[#0271B1]">
                  GOHASHINCLUDE
                </span>*/}
                One of the top-rated salesforce development companies, Gohash
                transforms your salesforce investments into profits by
                developing high-end scalable, bug-free applications and
                functionalities leveraging the Salesforce CRM to build your
                business. Be it a sales Cloud, MarComm cloud, service cloud, or
                any other, we’re here to maximize your ROI.
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
            Salesforce Development Services
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
                Salesforce Solution For Industries
              </h2>
              <p
                className="text-gray-600 mb-6 text-sm sm:text-base"
                data-aos="zoom-in"
              >
                Known as one of the best Salesforce Service providers, our
                Salesforce app developers have garnered a decade-long
                industry-wide experience on niche-based project requirements
                leveraging the latest technologies.
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
                Why Choose GOHASHINCLUDE for Salesforce Development?
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
                Benefits of our Salesforce Development
              </h2>
              <p className="mt-2 mb-10 lg:mb-2 text-gray-600 text-sm sm:text-base">
                Salesforce development helps you benefit your business reach the
                next best level. Our Salesforce Implementation and Salesforce
                Consulting Services offer selected solutions that can improve
                performance levels, increase the business, and offer CRM
                solutions. Realize your business advantage through inherent
                integration, security, and modularity for efficient business
                outcomes.
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
                      Enhanced Productivity
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Eliminate repetitive work through bespoke Salesforce
                      interfaces, optimizing productivity for teams throughout
                      your enterprise.
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
                      Scalable Solutions
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Salesforce applications that we develop evolve as your
                      enterprise develops, thus, highlighting the issue of
                      continuity in its effectiveness.
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
                      Improved Customer Engagement
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Engage buyer journeys integrated with Salesforce to build
                      deeper relationships and increase customer lifetime value.
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
                      Data-Driven Decisions
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Availability of real-time analytics and ability to aspire
                      to precisely make the right strategic decisions in
                      business advancement.
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
                      Seamless Integration
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Improve connectivity with other business systems,
                      maximizing synchronous and harmonization in the execution
                      of business processes.
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
                      Automation of Business Processes
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">
                      Automating routine tasks such as lead tracking, reporting,
                      and customer support, helping increase productivity and
                      reduce manual workloads.
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
