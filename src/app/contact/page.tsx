"use client";
import { useState, useEffect, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Image from "next/image";
import letter from "../../assets/letter.png";
import Ellipse from "../../assets/Ellipse 793.png";
import TwitterIcon from "../../assets/grp1.png";
import InstagramIcon from "../../assets/grp2.png";
import ChatIcon from "../../assets/grp3.png";
import Footer from "@/components/Footer";

// Toast notification component
const Toast = ({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-lg transition-all duration-500 ease-in-out transform translate-x-0 opacity-100
      ${type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}
    >
      <div className="flex justify-between items-center">
        <p>{message}</p>
        <button onClick={onClose} className="ml-4 text-white font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  // Watch form fields to determine if labels should stay at top
  const formValues = watch();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setToast({ message: "Your message has been sent successfully!", type: "success" });
        reset();
      } else {
        setToast({ message: "There was a problem sending your message. Please try again.", type: "error" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setToast({ message: "There was a problem sending your message. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-[#0271B1] text-center">Contact Us</h2>
        <p className="text-gray-500 font-medium text-center mt-2 mb-8">Any question or remarks? Just write us a message!</p>

        <div
          className="bg-white rounded-xl m-6 shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-visible"
          data-aos="zoom-in"
        >
          {/* Left side - contact info */}
          <div className="bg-[#0271B1] text-white md:w-2/5 p-8 flex flex-col rounded-xl justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="mb-10 text-sm text-gray-200">Say something to start a live chat!</p>
              <div className="space-y-8 lg:mt-20">
                <div className="flex items-center gap-4 lg:mb-16">
                  <FaPhoneAlt className="text-white text-2xl" />
                  <a href="tel:+91 9636922144" className="">
                    +91 9636922144
                  </a>
                </div>
                <div className="flex items-center gap-4 lg:mb-16">
                  <FaEnvelope className="text-white text-2xl" />
                  <a href="mailto:hr@gohashinclude.com" className="">
                    hr@gohashinclude.com
                    info@gohashinclude.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-white text-5xl -mt-4" />
                  <span>
                    Nirman Nagar E, P.No. 31 ist Floor, Since Krishna Tower, Ajmer Rd, opp. Asopa Hospital, Jaipur,
                    Rajanthan 302024
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-10">
              <div className="flex gap-4 z-10 relative">
                <a href="https://www.instagram.com/lifeatgohashinclude" target="_blank" rel="noopener noreferrer">
                  <Image src={InstagramIcon} alt="Instagram" width={40} height={40} />
                </a>
                <a href="https://t.me/yourchatlink" target="_blank" rel="noopener noreferrer">
                  <Image src={ChatIcon} alt="Chat" width={40} height={40} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <Image src={TwitterIcon} alt="Twitter" width={40} height={40} />
                </a>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-50 pointer-events-none">
                <Image src={Ellipse} alt="Ellipse Design" width={150} height={150} />
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="flex-1 p-6">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-2">
                <div className="relative">
                  <input
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    className="peer w-full border-b-2 border-[#04152E] focus:border-[#0271B1] outline-none py-2"
                  />
                  <label
                    className={`absolute left-0 text-[#04152E] transition-all duration-300
                      ${formValues.firstName ? "-top-4 text-sm text-[#0271B1]" : "top-2"} 
                      peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1]
                      ${errors.firstName ? "text-red-500" : ""}`}
                  >
                    First Name
                  </label>
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    className="peer w-full border-b-2 border-[#04152E] focus:border-[#0271B1] outline-none py-2"
                  />
                  <label
                    className={`absolute left-0 text-[#04152E] transition-all duration-300
                      ${formValues.lastName ? "-top-4 text-sm text-[#0271B1]" : "top-2"} 
                      peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1]
                      ${errors.lastName ? "text-red-500" : ""}`}
                  >
                    Last Name
                  </label>
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-6">
                <div className="relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="peer w-full border-b-2 border-[#04152E] focus:border-[#0271B1] outline-none py-2"
                  />
                  <label
                    className={`absolute left-0 text-[#04152E] transition-all duration-300
                      ${formValues.email ? "-top-4 text-sm text-[#0271B1]" : "top-2"} 
                      peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1]
                      ${errors.email ? "text-red-500" : ""}`}
                  >
                    Email
                  </label>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    maxLength={20}
                    {...register("phone", {
                      pattern: {
                        value: /^[+]?[0-9\s\-()]{6,20}$/,
                        message: "Invalid phone number format",
                      },
                      maxLength: {
                        value: 20,
                        message: "Phone number cannot exceed 20 digits",
                      },
                    })}
                    className="peer w-full border-b-2 border-[#04152E] focus:border-[#0271B1] outline-none py-2"
                  />
                  <label
                    className={`absolute left-0 text-[#04152E] transition-all duration-300
                      ${formValues.phone ? "-top-4 text-sm text-[#0271B1]" : "top-2"} 
                      peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1]
                      ${errors.phone ? "text-red-500" : ""}`}
                  >
                    Phone Number
                  </label>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="relative p-2">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="peer w-full border-b-2 border-[#04152E] focus:border-blue-500 outline-none py-2 resize-none"
                ></textarea>
                <label
                  className={`absolute left-0 p-2 text-[#04152E] transition-all duration-300
                    ${formValues.message ? "-top-4 text-sm text-[#0271B1]" : "top-2"} 
                    peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1]
                    ${errors.message ? "text-red-500" : ""}`}
                >
                  Write your message..
                </label>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              {/* ReCAPTCHA commented out for now */}
              {/* <div className="inline-block scale-90 sm:scale-100 transform origin-left">
                <ReCAPTCHA
                  sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div> */}

              <div className="relative flex flex-col items-end ">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0271B1] text-white cursor-pointer px-12 py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <div className="-mt-8">
                  <Image src={letter} alt="Letter icon" className="-ml-20 w-70 h-40" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
