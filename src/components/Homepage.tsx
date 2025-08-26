"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import software from '../../public/icons/icons8-software-development.gif'
import web from '../../public/icons/icons8-web.gif'
import python from "../../public/icons/icons8-python.gif"
import sectionimg1 from "../assets/image/sectionimg1.png";
import sectionimg2 from "../assets/image/sectionimg2.png";
import Background from "../../public/icons/artificial-intelligence.gif";
import Clouds from "../../public/icons/dedicated-server.gif";
import Cyber from "../../public/icons/presentation.gif";
import resource from "../../public/icons/resource.gif";
import Digital from "../../public/icons/smartphone-coding.gif";
import Low from "../../public/icons/icons8-mind-map.gif";
import aboutImg from "../assets/image/about.png";
import { SiTensorflow, SiFirebase, SiMysql } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";

import { Brain, Database, Server, Layout, Cloud, Wrench } from "lucide-react";

// import { FaRobot, FaBrain, FaCloud, FaCogs, FaDesktop, FaLanguage } from "react-icons/fa";

const tabsData = [
  {
    id: 1,
    title: "Generative AI",
    img: "/icons/generateai.jpg",
    icon: (
      <Image
        src="/icons/ai-voice-generator.gif"
        alt="NLP Icon"
        width={70}
        height={70}
        className="rounded-lg"
      />
    ),
    heading: "Generative AI",
    paragraph: `Generative AI is also a new and fast-growing branch of AI in which the machine is created to generate new patterns such as images, writing, and music from the set of data. With the help of GPT-3, GPT-4, Midjourney, and DALL-E models, generative AI can create something completely new that would be hardly possible for a human.

At Gohash, we are pioneering the generation of new AI Generative development and have years of experience doing so.

Some of our generative AI applications include but are not limited to; generating engaging content for marketing and advertising purposes, developing and inventing exceptional products, developing lifelike simulations, and fostering artists’ creativity.

Using generative AI technology we assist companies in positioning themselves in the market and standing out from the competition.

That is why we are focused on the opportunities of using this potential, offering clients solutions that can be described as revolutionary. Welcome to the world of generative AI, become our partner and see how it can boost your company.`,
  },
  {
    id: 2,
    title: "AI Agent / Co-Pilot",
    img: "/icons/aiaas.jpg",
    icon: (
      <Image
        src="/icons/icons8-artificial-intelligence.gif"
        alt="NLP Icon"
        width={70}
        height={70}
        className="rounded-lg"
      />
    ),
    heading: "AI Agent / Co-Pilot",
    paragraph: `AI Agents and Co-Pilots are considered the fourth generation of artificial intelligence that will be interacting with human beings to help in decision-making, enhance the productivity of work processes, and do away with time-consuming tasks.

At Gohash, we nurture precise and advanced AI agents alongside AI co-pilot solutions through modern pieces such as Gemini and GPT4 -4. These systems can comprehend context, self-learn from the conversation, and can produce intelligent recommendations.

Our AI agents are effective in such activities as scheduling, correspondence, and data analysis and are specifically optimized to become an influential part of your work.

The AI agents can be designed according to the business requirements of the organization. They can be used in customer support to attend to customers’ queries, in the finance section to prepare the financial statements, or in project management to monitor the achievements and due dates.

Thus, we are devoted to the development of smart solutions that not only help but also enhance your business performance. Let us create AI agents that will revolutionize your work processes.`,
  },
  {
    id: 3,
    title: "AI-as-a-Service (AIaas)",
    img: "/icons/services.jpg",
    icon: (
      <Image
        src="/icons/artificial-intelligence.gif"
        alt="NLP Icon"
        width={70}
        height={70}
        className="rounded-lg"
      />
    ),
    heading: "AI-as-a-Service",
    paragraph: `AI as a Service (AIaaS) presents businesses with the capability of artificial ability from a service provider without the obligations in acquisitive hardware or strong specialty in artificial ability on the side of a business. AIaaS offers services such as data analytics, analysis, and incorporation of an exclusive AI model on a cloud, which allows companies to benefit from AI functions without complications.

With AIaaS from Gohash, you can get every capability you need for AI in business right from us and grow a strong AI-driven business.

Some services are Data Science, Machine Learning Model Hosting, NLP, Computer Vision, and others. AIaaS transformed it into an easy-to-deploy model that can immediately jumpstart companies concerning innovation through Artificial Intelligence.

We take care of the application’s development and support, which means that you get the models for your organization once they are fully ready for integration. This lowers the cost and time to deploy AI and also the risk that is involved in the whole process of implementing AI.

Reliance on us for the achievement of the desired strategic AI solutions for your business needs through convenient and affordable service delivery.`,
  },
  {
    id: 4,
    title: "Machine Learning (ML)",
    img: "/icons/machine.jpg",
    icon: (
      <Image
        src="/icons/ml.gif"
        alt="NLP Icon"
        width={70}
        height={70}
        className="rounded-lg"
      />
    ),
    heading: "Machine Learning (ML)",
    paragraph: `Machine Learning (ML) is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.

ML algorithms use statistical techniques to identify patterns in data, make predictions, and continuously evolve as more data becomes available. This capability makes ML a powerful tool for solving complex problems across various industries.

At Gohash, we specialize in developing machine-learning solutions that help businesses harness the power of their data. Our services include building predictive models, implementing recommendation systems, and developing custom algorithms tailored to your specific needs. We apply ML to a wide range of applications, from predicting customer behavior and optimizing supply chains to detecting fraud and enhancing cybersecurity.

Our team of experts uses the latest ML techniques, including supervised and unsupervised learning, reinforcement learning, and neural networks, to deliver high-performance solutions.

Partner with us to build intelligent systems that learn, adapt, and transform your business operations.`,
  },
  {
    id: 5,
    title: "RPA(Robotic Process Automation)",
    img: "/icons/robot.jpg",
    icon: (
      <Image
        src="/icons/robotics.gif"
        alt="NLP Icon"
        width={70}
        height={70}
        className="rounded-lg"
      />
    ),
    heading: "Robotic Process Automation",
    paragraph: `Robotic Process Automation (RPA) defines a new way of managing business processes by using technologies and automating many time-consuming activities. Thus, RPA refers to the employment of software automation tools called bots undertaking repetitive tasks or transactions characterized by predetermined rules.

These bots engage with applications in a similar manner to human beings but they work much faster and they do not make mistakes, thus cutting down on expenses.

At Gohash you can find everything related to RPA, from the basic consultation to fully customized solutions for your business. The first step is to analyze the process to establish which tasks can be automated, making sure that processes suitable for RPA are chosen.

Our expert team then creates and implements specific business bots that would want to fit perfectly into your environment. Rely on Gohash for the modern, effective RPA services that optimize enterprise activities and help increase profits.`,
  },
  {
    id: 6,
    title: "Computer Vision",
    img: "/icons/vision.jpg",
    icon: (
      <Image
        src="/icons/interface.gif"
        alt="NLP Icon"
        width={70}
        height={70}
        className="rounded-lg"
      />
    ),
    heading: "Computer Vision",
    paragraph: `Computer Vision is one of the subdivisions of Artificial Intelligence – deals with the usage of algorithms and computer programs to analyze visual data from the surrounding environment. It entails the commitment of defining a way to teach computers how to analyze videos and images, to make machines able to see in the same way human beings do.

At Gohash, we boast outstanding Computer Vision solutions that are at the frontier of technological advancement. We design and implement new methods for different purposes: image analysis, face identification, video surveillance, and object detection.

Our solution should be accurate and fast to allow working with a significant amount of visual data and provide real-time results.

You are guaranteed that we will always strive to advance ourselves and our capabilities to deliver that extra inch to the client’s expectation. Become our partner to start and apply the opportunities of computer vision in your business.`,
  },
  {
    id: 7,
    title: "NLP",
    img: "/icons/nlp.jpg",
    icon: (
      <Image
        src="/icons/image-text.gif"
        alt="NLP Icon"
        width={70}
        height={70}
        className="rounded-lg"
      />
    ),
    heading: "Natural Language Processing",
    paragraph: `Now, let’s define what Natural Language Processing (NLP) means and imply deep industrial connections with artificial intelligence. NLP allows machines to process the natural language of people and know how to handle it in a way that is relevant and useful. It forms the basis of many applications we currently use in our day-to-day activities such as virtual personal assistants such as Siri, Alexa, and many more, text analytics, and mining among others.

At Gohash, when we use NLP, our focus is to create smart business applications that give companies a new way of doing things. The NLP applications we offer for customers are chatbots to offer support, the tools to measure the sentiment of customers, and the categorization of content to make information flow easier.

Thus, using NLP in the structure of your company’s operations will lead to the achievement of greater efficiency in decision-making and improved client satisfaction. Count on Gohash for high-quality NLP solutions that integrate your business with a better future.`,
  },
];
const slides = [
  {
    icon: <Brain className="w-8 h-8 text-[#0271B1]" />,
    title: "LLM & AI Engineering",
    description:
      "LangChain, OpenAI GPT-4, LLaMA2/3, Mixtral, Hugging Face Transformers, Prompt Engineering, RAG,Pinecone, FAISS, ChromaDB, Zilliz, Vector DBs, Embedding Models, Sentence Transformers, Prompt Injection Defense",
  },
  {
    icon: <Database className="w-8 h-8 text-[#0271B1]" />,
    title: "AI/ML & NLP",
    description:
      "Text Classification, Entity Extraction, Conversational AI, Fine-Tuning, Chatbot Systems, Zero/Few-Shot Learning, Anomaly Detection, Predictive Modeling, Scikit-learn, TensorFlow, PyTorch",
  },
  {
    icon: <Server className="w-8 h-8 text-[#0271B1]" />,
    title: "Backend & APIs",
    description:
      "Python, FastAPI, Flask, REST APIs, Celery, Kafka, Redis, PostgreSQL, MongoDB, DynamoDB, RabbitMQ",
  },
  {
    icon: <Layout className="w-8 h-8 text-[#0271B1]" />,
    title: "Frontend & Integration",
    description:
      "React.JS, Angular, Node.JS, Next.JS, Redux, Builder.io, JavaScript, TypeScript, Bootstrap, Material UI, SCSS, Tailwind CSS, API integration, Vue.JS.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-[#0271B1]" />,
    title: "Cloud & DevOps",
    description:
      "AWS (EC2, S3, Lambda, RDS, Bedrock, SageMaker), GCP, Docker, Kubernetes, Git, GitLab, CI/CD Pipelines.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#0271B1]" />,
    title: "Supporting Tools",
    description:
      "Swagger, Postman, Sentry, Prometheus, Grafana, Kubeflow, Power BI.",
  },
];
const testimonials = [
  {
    name: "Liam Brown",
    role: "Software Engineer, TechStartup Innovations",
    review:
      "The 24/7 access and secure facilities have been incredibly convenient for my team's flexible schedules. We absolutely love the modern and inspiring GOHASHINCLUDE workspace environment!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Michael Rodriguez",
    role: " Creative Director, DesignCraft Studio",
    review:
      "The aesthetics of GOHASHINCLUDE are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Michael Thompson",
    role: "Graphic Designer, DesignCo",
    review:
      "As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Alex Nguyen",
    role: "Marketing Consultant, Maverick Marketing",
    review:
      "The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business, fostering growth and strong professional connections.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "David Wilson",
    role: "Project Manager, SoftwareSolutions LLC",
    review:
      "The GOHASHINCLUDE space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed, boosting productivity and overall team satisfaction daily.",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Nurul C.",
    role: "USA (AI & MERN Stack Project)",
    review:
      "We partnered with GOHASHINCLUDE PVT. LTD. for our AI-powered digital platform, and I must say the experience was exceptional. The teamshowcased deep technical knowledge in AI and MERN stack development, delivered every milestone on time, and kept communicationclear throughout the project. What I appreciated most was their ability totransform our ideas into scalable, production-ready solutions. It’s rare to find such dedication and professionalism—I would gladly recommend them to anyone looking for high-quality development support.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    name: "Juan Cruz P.",
    role: "Argentina (Full-Stack App Development)",
    review:
      "Although we faced a small challenge during our collaboration due to a resource issue, I truly appreciated the honesty and transparency from GOHASHINCLUDE’s side. They took ownership, communicated openly, and offered solutions for moving forward. To me, this shows strong integrity, and I believe with their growing team, they’ll continue to be a reliable development partner.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nurul C.",
    role: "USA (AI-Based Product Platform)",
    review:
      "One of the standout aspects of GOHASHINCLUDE is their ability to merge innovation with execution. On our AI-based product platform, they didn’t just deliver code—they gave us a well-thought-out solution that was future-proof, scalable, and easy to maintain. Their turnaround times were impressive, and their flexibility made them a joy to work with. We’ve already planned our next project together.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Vishal S.",
    role: "Freelancer",
    review:
      "They are one of the best companies in India for sure. They have a great team of expert developers and designers that think out of the box to deliver your product beyond your expectation and...",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Arijita D.",
    role: "Freelancer",
    review:
      "GOHASH team is expert in FLUTTER DEVELOPMENT and they delivered exactly what I needed. I recommend the team GOHASH and would love to work with them again for future projects.",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Nurul C.",
    role: "USA (Python Development)",
    review:
      "This is not my first project with GOHASHINCLUDE, and certainly not the last. Their Python expertise and problem-solving approach made the whole process smooth and stress-free. They consistently deliver quality code, are quick to respond to queries, and maintain a very professional work ethic. It’s comforting to know that whenever I have a complex requirement, their team is ready to step in and get it done right.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Vasu Dhingra",
    role: "Google",
    review:
      "It’s been a great pleasure working with GOHASH. I was searching for a team having excellent experience in Python with Lambda function & AWS. These guys have exceeded my expectations...",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  },

];
import {
  FaDocker,
  FaNodeJs,
  FaPython,
  FaDatabase
} from "react-icons/fa";

import Footer from "./Footer";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Autoplay, Pagination } from "swiper/modules";


const techStack = [
  { name: "Docker", icon: <FaDocker className="text-5xl text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-5xl text-yellow-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-5xl text-orange-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-5xl text-yellow-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-5xl text-sky-600" /> },


];

const industries = [
  { name: "Logistic Industry", icon: "/icons/forklift.gif", active: true },
  { name: "Real Estate Industry", icon: "/icons/3d-printing.gif" },
  { name: "E-Commerce Industry", icon: "/icons/shopping-cart.gif" },
  { name: "Media & Entertainment", icon: "/icons/clapperboard.gif" },
  { name: "Education Industry", icon: "/icons/mortarboard.gif" },
  { name: "Travel & Tourism Industry", icon: "/icons/airplane.gif" },
  { name: "Hospitality Industry", icon: "/icons/hypoallergenic.gif" },
  { name: "Food & Restaurant (edited)", icon: "/icons/cutlery.gif" },
];

const caseStudies = [
  {
    title: "AI Chatbot for E-commerce",
    description:
      "Handled 4,000+ daily inquiries with 95% accuracy, saving $300K per year and improving CSAT by 40%.",
    image: "https://images.pexels.com/photos/5407212/pexels-photo-5407212.jpeg",
    stats: [
      { value: "$300K", label: "Annual Savings" },
      { value: "80%", label: "Tickets Eliminated" },
      { value: "40%", label: "CSAT Lift" },
    ],
  },
  {
    title: "Salesforce Optimization",
    description:
      "Full CRM overhaul increased deal closures by 180% and reduced sales cycle from 6 months to 2 months.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
    stats: [
      { value: "180%", label: "Deals Closed" },
      { value: "67%", label: "Faster Cycle" },
      { value: "250%", label: "ROI (6 months)" },
    ],
  },
  {
    title: "Telemedicine Platform",
    description:
      "Scaled to 500K users, generating $2M+ monthly revenue with a 4.9★ app rating. improving CSAT by 40%.",
    image:
      "https://images.pexels.com/photos/6632410/pexels-photo-6632410.jpeg",
    stats: [
      { value: "500K+", label: "Active Users" },
      { value: "$2M+", label: "Monthly Revenue" },
      { value: "4.9★", label: "App Rating" },
    ],
  },
];

const Homepage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [expanded, setExpanded] = useState(
    new Array(testimonials.length).fill(false)
  );

  // Toggle expand/collapse
  const toggleExpand = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  // Limit text to 25 words
  const getPreview = (text: string, index: number) => {
    const words = text.split(" ");
    if (words.length <= 30) return text;
    return expanded[index] ? text : words.slice(0, 30).join(" ") + "...";
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(tabsData?.[0]?.id || null);
  const currentTab =
    tabsData?.find((tab) => tab.id === activeTab) || tabsData?.[0];

  if (!currentTab) return null;

  const swiperRef = useRef<any>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const cards = [
    {
      icon: (
        <Image
          src={Background}
          alt="AI"
        />
      ),
      title: "AI Development",
      desc: "Transform your business with our artificial intelligence software development services. Leverage our state-of-the-art Generative AI solutions for innovation and growth an....",
      link: "/core-capabilities/ai",
    linkText: "Read More", 
    },
    {
      icon: (
        <Image
          src={Clouds}
          alt="cloud"
        />
      ),
      title: "Salesforce Development",
      desc: "One of the top-rated salesforce development companies, Gohash transforms your salesforce investments into profits by developing high-end...",
     link: "/core-capabilities/saleforce-development",
    linkText: "Read More",
    },
    {
      icon: (
        <Image
          src={Cyber}
          alt="cyber"
        />
      ),
      title: "Product Development",
      desc: "As a trusted product development company, we help our clients build innovative & market-winning software faster that is business-centric...",
      link: "/core-capabilities/product-development",
    linkText: "Read More",
    },
    {
      icon: (
        <Image
          src={Low}
          alt="enterprise"
        />
      ),
      title: "Low Code Development",
      desc: "As a trusted low-code development company, we help our clients create, deploy, and adapt cutting-edge applications to revolutionize...",
      link: "/core-capabilities/low-code-development",
    linkText: "Read More",
    },
    {
      icon: (
        <Image
          src={Digital}
          alt="digital"
        />
      ),
      title: "Mobile-App Development",
      desc: "As a trusted mobile app development company, we specialize in delivering top-notch mobile app services utilizing the next-gen technologies an...",
      link: "/core-capabilities/mobile-development",
    linkText: "Read More",
    },
    {
      icon: (
        <Image
          src={web}
          alt="web"
        />
      ),
      title: "Web Development",
      desc: "Looking for a trusted website development company for your business? Our expert team of web developers helps client...",
      link: "/core-capabilities/web-development",
    linkText: "Read More",
    },
    {
      icon: (
        <Image
          src={software}
          alt="software"
        />
      ),
      title: "Software Development",
      desc: "As a trusted software development company, we deliver strategic outcomes to clients for startups, and enterprise-size...",
     link: "/core-capabilities/software-development",
    linkText: "Read More",
    },
    {
      icon: (
        <Image
          src={python}
          alt="python"
        />
      ),
      title: "Python Development",
      desc: "As a trusted Python Development Company, we help our clients craft innovative applications with the most powerful, versatile, and flexible..",
      link: "/core-capabilities/python-development",
    linkText: "Read More",
    },
    {
      icon: (
        <Image
          src={resource}
          alt="resource"
        />
      ),
      title: "Hire Dedicated Resources",
      desc: "As a prominent AI solutions company, our AI development services are designed to unleash the potential of large volumes of data to drive...",
      link: "/core-capabilities/hire-dedicated-resource",
    linkText: "Read More",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 lg:-mt-2  px-4 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start gap-10">

          <div className="flex-1 space-y-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <div className="inline-block px-4 py-3 bg-[#0271B1] lg:mt-0 mt-10 text-white text-sm font-semibold rounded-full"
                data-aos="fade-up"
              >
                Trusted IT & AI Partner
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight"
                data-aos="fade-up"
              >
                Elevate Your <span className="text-[#0271B1]">Business</span><br />
                With <span className="text-[#0271B1]">GOHASHINCLUDE</span>
              </h1>
            </div>

            <p className="text-gray-600 text-base sm:text-md text-justify lg:w-full"
              data-aos="zoom-in"
            >
              We harness the power of AI, cloud, and advanced engineering to create scalable, results-driven solutions.
              Global enterprises trust us to deliver secure, high-performance software, intelligent systems, and seamless
              integrations. We focus on innovation that drives real business impact. From concept to deployment, we ensure
              every solution is built for growth and reliability.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-center lg:text-left"
              data-aos="zoom-in"
            >
              {[
                { value: "200+", label: "Projects Delivered" },
                { value: "70+", label: "Happy Clients" },
                { value: "13+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg shadow p-4 w-full sm:w-40">
                  <p className="text-[#0271B1] font-bold text-xl">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col mb-4 sm:flex-row justify-center lg:justify-start gap-4 w-full"

            >
              <button
                onClick={() => {
                  document.getElementById("capabilities")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="w-full sm:w-auto text-md cursor-pointer inline-flex justify-center bg-[#0271B1] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-150"
              >
                Explore Our Capabilities
              </button>
              <a href="/contact">
                <button
                  className="w-full sm:w-auto cursor-pointer text-md inline-flex justify-center border-2 border-[#0271B1] 
             hover:bg-[#0271B1] hover:text-white 
             text-gray-900 dark:text-black 
             font-bold py-2 px-6 rounded-md transition-colors duration-150"
                >
                  Book a Consultation
                </button>
              </a>

            </div>
          </div>

          <div
            className="flex-1 flex justify-center lg:justify-end"
            data-aos="fade-down"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mb-10"
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
                  alt="Hero"
                  className="
              rounded-xl object-cover
              w-64 h-64
              sm:w-80 sm:h-80
              md:w-96 md:h-[420px]
              lg:w-[550px] lg:h-[500px]
            "
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </main>

      <section
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-300"
      >
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="lg:text-3xl text-2xl font-bold mb-4"
              data-aos="fade-up"
            >Meet GOHASHINCLUDE</h2>
            <p className="text-gray-600 text-[16px] mb-6 leading-relaxed dark:text-white"
              data-aos="zoom-in"
            >
              Welcome to our IT Solutions company, where we specialize in delivering
              cutting-edge technology services tailored to businesses across the DC,
              Maryland, and Virginia area. We understand that navigating the digital
              landscape can be challenging, which is why we're here to provide smart,
              reliable, and cost-effective solutions—from cloud computing and
              cybersecurity to software development and IT support—to help your
              business thrive.
            </p>
            <div className="flex justify-center sm:justify-start gap-4"
              data-aos="zoom-in"
            >
              <a href="/about">
                <button className="px-5 cursor-pointer py-2 border-2 border-[#0271B1] text-blue-600 rounded hover:bg-[#0271B1] hover:text-white transition">
                  Read More
                </button>
              </a>

              <a href="/contact">
                <button className="px-5 py-2 bg-[#0271B1] cursor-pointer text-white rounded transition">
                  Contact us today
                </button>
              </a>

            </div>
          </div>

          <div className="w-full sm:w-1/2 relative flex justify-center sm:justify-end overflow-visible">
            <div
              data-aos="fade-up"
              className="relative w-[16rem] sm:w-[22rem] h-[22rem] sm:h-[32rem]
              rounded-lg overflow-hidden
              "
            >
              <Image
                src={sectionimg1}
                alt="Back image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div
              data-aos="fade-down"
              className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-12
              w-48 sm:w-80 h-52 sm:h-80 rounded-xl 
              overflow-hidden"
            >
              <Image
                src={sectionimg2}
                alt="free"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>



      <div className="border-b border-blue-200 max-w-7xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>

      <section
        id="capabilities"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2 className="text-[28px] font-bold mb-2"
          data-aos="fade-up"
        >Core Capabilities</h2>
        <p className="text-gray-600 mb-8 max-w-4xl dark:text-white"
          data-aos="zoom-in"
        >
          Modular services designed for rapid impact — from AI and data to
          cloud-native platforms and secure operations.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => {
            const isActive = activeIndex === idx;
            const isHovered = hoverIndex === idx;

            return (
              <div
                key={idx}
                data-aos="fade-up"
                className={`
    group relative rounded-xl overflow-hidden p-10 cursor-pointer
    transition-all duration-300
    ${isActive || isHovered ? "bg-[#0271B1] text-white" : "bg-[#0271B1] text-gray-900"}
    shadow-lg hover:shadow-2xl
  `}
              >
                <div
                  className="absolute inset-0 translate-y-2 bg-white rounded-xl -z-10 
    transition-all duration-300 ease-in-out
    group-hover:bg-[#0271B1] group-hover:translate-y-2"
                ></div>

                <div
                  className={`w-15 h-15 flex items-center justify-center rounded-lg mb-4 text-lg
      ${isActive || isHovered ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"}
    `}
                >
                  {card.icon}
                </div>

                <h3
                  className={`text-lg font-semibold mb-2 ${isActive || isHovered ? "text-white" : "text-gray-900"}
      group-hover:text-white
      `}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${isActive || isHovered ? "text-white" : "text-gray-600"}
      group-hover:text-white
      `}
                >
                  {card.desc}
                </p>

                <a
                  href={card.link} // dynamic link from card object
                  className={`
    text-md flex items-center gap-2 font-semibold transition-all duration-300
    ${isActive || isHovered ? "text-white" : "text-[#0271B1]"}
    group-hover:text-white
  `}
                >
                  {card.linkText || "Read More"}
                  <FaArrowRight
                    className={`
      inline-block transform transition-transform duration-300
      ${isActive || isHovered ? "rotate-45 text-white" : "rotate-0 text-[#0271B1]"}
      group-hover:rotate-45 group-hover:text-white
    `}
                  />
                </a>

              </div>

            );
          })}
        </div>
      </section>
      <div className="border-b-2 border-blue-200 max-w-7xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>

      <section className="max-w-[90%] mx-auto p-6 md:p-12">
        <div className="flex flex-col mb-12">
          <div className="mb-4"
            data-aos="zoom-in"
          >{currentTab.icon}</div>

          <h1 className="text-xl sm:text-2xl md:text-[28px] font-bold mb-2"
            data-aos="fade-up"
          >
            Our AI Development Services
          </h1>

          <p className="text-gray-600 max-w-7xl dark:text-white"
            data-aos="zoom-in"
          >
            From generative AI development services to overall AI application
            development services, we offer next-gen AI solutions to your enterprise
            to propel your business operations to greater heights. Our expert team
            specializes in AI app development, chatbot assistance, predictive
            analysis & image recognition. Explore our artificial intelligence
            services
          </p>
        </div>

        <div className=" scrollbar-hide w-full mb-7 border-b-2 border-gray-200">
          <div
            className="
      flex flex-nowrap
      overflow-x-auto lg:overflow-x-visible
      sm:scrollbar-thin lg:scrollbar-none
      sm:scrollbar-thin sm:scrollbar-thumb-blue-500 sm:scrollbar-track-gray-200
      sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full
      sm:hover:scrollbar-thumb-blue-600
    "
            data-aos="fade-up"
          >
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-none text-[13px] text-center px-6 py-2 font-medium cursor-pointer transition-all duration-300 ${activeTab === tab.id
                  ? "border-b-4 border-[#0271B1] text-[#0271B1]"
                  : "text-gray-600 dark:text-white"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${currentTab.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
          {/* Image */}
          <div
            className="w-full md:w-2/5 relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            data-aos="zoom-in"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentTab.img}
                src={currentTab.img}
                alt={currentTab.heading}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Text */}
          <div className="w-full md:w-3/5">
            <h2
              className="text-lg sm:text-[26px] md:text-[28px] font-bold mb-4"
              data-aos="zoom-in"
            >
              {currentTab.heading}
            </h2>
            <p
              className="text-gray-700 text-md dark:text-white"
              data-aos="zoom-in"
            >
              {currentTab.paragraph}
            </p>
          </div>
        </div>

      </section>








      <div className="border-b-2 border-blue-200 max-w-7xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-[28px] font-bold mb-2"
          data-aos="fade-up"
        >Our Tech Stack</h2>
        <p className="text-gray-600 mb-8 max-w-7xl dark:text-white"
          data-aos="zoom-in"
        >
          A robust blend of cutting-edge tools and technologies, chosen to deliver scalable, secure,
          and high-performance solutions that help your projects run faster, smarter, and more efficiently.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="flex items-center justify-center gap-4 border-4 border-[#0271B1] rounded-lg px-4 py-3 
                       transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white"
            >
              {tech.icon}
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="w-full py-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full text-[#0271B1]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center px-6 text-center">
                  {/* Heading + Icon */}
                  <div
                    className="flex items-center gap-3 mb-4 cursor-pointer"
                    data-aos="fade-up"
                    onClick={toggleAutoplay}
                  >
                    {slide.icon}
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 dark:text-white">
                      {slide.title}
                    </h2>
                  </div>

                  {/* Paragraph */}
                  <p
                    className="text-base md:text-lg text-gray-600 dark:text-white max-w-3xl mb-6 cursor-pointer"
                    data-aos="zoom-in"
                    onClick={toggleAutoplay}
                  >
                    {slide.description}
                  </p>

                  {/* Pagination dots */}
                  <div className="swiper-pagination !static mt-4"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="border-b-2 border-blue-200 max-w-7xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <h2 className="text-[28px] font-bold mb-2"
          data-aos="fade-up"
        >
          AI in Action: Industries We’ve Transformed
        </h2>
        <p className="text-gray-600 mb-8 max-w-7xl dark:text-white"
          data-aos="zoom-in"
        >
          From disruptive startups to global enterprises, we empower industries with
          innovation-led solutions. Our versatility ensures every sector benefits
          from technology that drives growth and transformation.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center p-4 justify-center rounded-lg border border-gray-200 bg-white cursor-pointer transition-all duration-300 hover:bg-[#0271B1]"

              data-aos="zoom-in"
            >
              <div className="w-full flex items-center justify-center p-12 rounded-lg bg-gray-200 group-hover:bg-gray-200">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={60}
                  height={60}
                  className="transition-all rounded-xl duration-300
               h-[40px] w-[70]  
               sm:w-[60px] sm:h-[60px] 
              "
                />
              </div>

              <p className="text-md font-medium py-2  w-full text-[#0271B1] transition-all duration-300 group-hover:text-white">
                {industry.name}
              </p>
            </div>
          ))}
        </div>
      </section>


      <div className="border-b-2 border-blue-200 max-w-7xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>


      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-[28px] font-bold mb-2"
          data-aos="fade-up"
        >Selected Case Studies</h2>
        <p className="text-gray-600 mb-8 dark:text-white"
          data-aos="zoom-in"
        >
          Real companies. Real impact. Measurable ROI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-40 object-cover"
              />

              <div className="bg-blue-100 dark:bg-gray-800 p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {study.description}
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {study.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex-1 min-w-[90px] bg-white dark:bg-gray-700 border-0 rounded-lg px-4 py-2 text-center
     transition-all duration-300 cursor-pointer hover:bg-[#0271B1] group"
                    >
                      <div className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white">
                        {stat.label}
                      </div>
                    </div>

                  ))}
                </div>
              </div>
            </div>
          ))}


        </div>
        <a href="/case-study">
          <div className="flex justify-center py-10">
            <button className=" px-8 py-3 cursor-pointer bg-[#0271B1] hover:text-gray-900 font-medium text-white rounded-md hover:bg-[#0692e2] transition">
              Read More
            </button>
          </div>
        </a>

      </section>

      <div className="border-b-2 border-blue-200 max-w-7xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Heading */}
        <h2
          className="text-[28px] font-bold mb-2 text-center"
          data-aos="fade-up"
        >
          Trusted By Businesses Worldwide
        </h2>
        {/* <p
          className="text-gray-600 mb-10 max-w-3xl mx-auto text-center dark:text-white"
          data-aos="zoom-in"
        >
          From startups to global enterprises, our clients share how
          <span className="font-semibold text-[#0271B1]"> GOHASHINCLUDE </span>
          delivers innovation, reliability, and results they can count on.
        </p> */}

        <section className="py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-8">
              {/* Left Section */}
              <div className="w-full lg:w-2/5">
                <h1
                  className="text-3xl text-gray-500 font-medium mb-4 block"
                  data-aos="fade-up"
                >
                  Reviews
                </h1>
                {/* Removed the 23k+ Customers Feedback heading */}

                <p
                  className="text-gray-600 max-w-xl text-base md:text-lg mb-6"
                  data-aos="fade-up"
                >
                  From startups to global enterprises, our clients share how{" "}
                  <span className="font-semibold text-[#0271B1]">GOHASHINCLUDE</span> delivers
                  innovation, reliability, and results they can count on.
                </p>


                <div className="flex gap-4 mt-4" data-aos="zoom-in">
                  <button
                    ref={prevRef}
                    className="group flex justify-center items-center border cursor-pointer border-[#5ac8fa] w-12 h-12 rounded-lg hover:bg-[#0271B1] transition"
                  >
                    <svg
                      className="h-6 w-6 text-[#0271B1] group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    ref={nextRef}
                    className="group flex justify-center hover:bg-[#0271B1] cursor-pointer items-center border border-[#5ac8fa] w-12 h-12 rounded-lg transition"
                  >
                    <svg
                      className="h-6 w-6 text-[#0271B1]  group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-3/5" data-aos="zoom-in">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                  }}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  onInit={(swiper) => {
                    if (
                      swiper.params.navigation &&
                      typeof swiper.params.navigation !== "boolean"
                    ) {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                  }}
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className={`group border-none rounded-2xl p-6 transition flex flex-col justify-between ${index === 0
                        ? "bg-[#D6EAF8]"
                        : "bg-[#F1F1F1] hover:bg-[#D6EAF8]"
                        }`}
                      style={{ minHeight: "300px" }}
                    >
                      <div>
                        <div className="flex items-center gap-5 mb-4">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h5
                              className={`font-medium ${index === 0
                                ? "text-gray-900"
                                : "text-gray-900 group-hover:text-gray-800"
                                }`}
                            >
                              {item.name}
                            </h5>
                            <span
                              className={`text-sm ${index === 0
                                ? "text-gray-500"
                                : "text-gray-500 group-hover:text-gray-800"
                                }`}
                            >
                              {item.role}
                            </span>
                          </div>
                        </div>

                        <p
                          className={`text-sm ${index === 0
                            ? "text-gray-700"
                            : "text-gray-500 group-hover:text-gray-800"
                            }`}
                        >
                          {getPreview(item.review, index)}
                        </p>
                      </div>

                      {item.review.split(" ").length > 40 && (
                        <button
                          className="text-blue-500 cursor-pointer underline mt-2 self-start"
                          onClick={() => toggleExpand(index)}
                        >
                          {expanded[index] ? "Show Less" : "Read More"}
                        </button>
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

          <div className="flex flex-col sm:flex-row gap-4" data-aos="zoom-in">
            <a href="/contact">
              <button className="text-gray-900 font-bold border-2 cursor-pointer hover:bg-[#0271B1] hover:text-white border-white px-6 py-3 rounded-lg bg-white transition hover:scale-105 hover:shadow-lg">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>



      <div className="border-b-2 border-blue-200 max-w-7xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)]"></div>
      <Footer />
    </>
  );
};

export default Homepage;
