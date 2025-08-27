"use client";
import { useState, useEffect } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import letter from "../../assets/letter.png";
import Ellipse from "../../assets/Ellipse 793.png";
// import TwitterIcon from "../../assets/grp1.png";
import InstagramIcon from "../../assets/grp2.png";
import ChatIcon from "../../assets/grp3.png";
import Footer from "@/components/Footer";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";

// Toast notification component
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
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
  countryCode: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();
  const formValues = watch();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
    AOS.refresh();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const payload = {
        fullName: `${data.firstName} ${data.lastName}`,
        emailAddress: data.email,
        phoneNumber: `+${data.phone}`,
        subject: "Contact Form Submission",
        message: data.message,
      };

      const res = await fetch(
        "https://api.team.gohashinclude.com/api/front/submit-contact-us",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (res.ok) {
        setToast({
          message: "Your message has been sent successfully!",
          type: "success",
        });
        reset();
      } else {
        console.error("API Error Response:", result);
        setToast({
          message:
            result?.message ||
            "There was a problem sending your message. Please check your data.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Network or server error:", error);
      setToast({
        message: "There was a problem sending your message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-[#0271B1] text-center">
          Contact Us
        </h2>
        <p className="text-gray-500 font-medium text-center mt-2 mb-8">
          Any question or remarks? Just write us a message!
        </p>

        <div
          className="bg-white rounded-xl m-6 shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-visible"
          data-aos="zoom-in"
        >
          {/* Left side - contact info */}
          <div className="bg-[#0271B1] text-white md:w-2/5 p-8 flex flex-col rounded-xl justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="mb-10 text-sm text-gray-200">
                Say something to start a live chat!
              </p>
              <div className="space-y-8 lg:mt-20">
                <div className="flex items-center gap-4 lg:mb-16">
                  <FaPhoneAlt className="text-white text-2xl" />
                  <a href="tel:+91 9636922144">+91 9636922144</a>
                </div>
                <div className="flex items-center gap-4 lg:mb-16">
                  <FaEnvelope className="text-white text-2xl" />
                  <a href="mailto:hr@gohashinclude.com">
                    hr@gohashinclude.com info@gohashinclude.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-white text-5xl -mt-4" />
                  <span>
                    Nirman Nagar E, P.No. 31 ist Floor, Since Krishna Tower,
                    Ajmer Rd, opp. Asopa Hospital, Jaipur, Rajanthan 302024
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-10">
              <div className="flex gap-4 z-10 relative">
                <a
                  href="https://www.instagram.com/lifeatgohashinclude/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="https://x.com/gohashinclude"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={ChatIcon} alt="Chat" width={40} height={40} />
                </a>

                <a href="https://www.facebook.com/gohashinclude.1" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-10 h-10" viewBox="0 0 49.652 49.652">
                    <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/gohashinclude-pvt-ltd/" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" className=" fill-white w-10 h-10" viewBox="0 0 112.196 112.196">
                    <circle cx="56.098" cy="56.097" r="56.098" fill="#007AB9" />
                    <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" />
                  </svg>
                </a>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-50 pointer-events-none">
                <Image
                  src={Ellipse}
                  alt="Ellipse Design"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="flex-1 p-6">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-2">
                {/* First Name */}
                <div className="relative">
                  <input
                    id="firstName"
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="peer w-full text-gray-900 font-medium border-b-2 border-[#04152E] focus:border-[#0271B1] outline-none py-2"
                  />
                  <label
                    htmlFor="firstName"
                    className={`absolute left-0 text-[#04152E] transition-all duration-300 ${formValues.firstName
                      ? "-top-4 text-sm text-[#0271B1]"
                      : "top-2"
                      } peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1] ${errors.firstName ? "text-red-500" : ""
                      }`}
                  >
                    First Name
                  </label>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="relative">
                  <input
                    id="lastName"
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="peer w-full text-gray-900 font-medium border-b-2 border-[#04152E] focus:border-[#0271B1] outline-none py-2"
                  />
                  <label
                    htmlFor="lastName"
                    className={`absolute left-0 text-[#04152E] transition-all duration-300 ${formValues.lastName
                      ? "-top-4 text-sm text-[#0271B1]"
                      : "top-2"
                      } peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1] ${errors.lastName ? "text-red-500" : ""
                      }`}
                  >
                    Last Name
                  </label>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-6">
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="peer w-full text-gray-900 font-medium border-b-2 border-[#04152E] focus:border-[#0271B1] outline-none py-2"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 text-[#04152E] transition-all duration-300 ${formValues.email
                      ? "-top-4 text-sm text-[#0271B1]"
                      : "top-2"
                      } peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1] ${errors.email ? "text-red-500" : ""
                      }`}
                  >
                    Email
                  </label>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-full max-w-md mx-auto">
                  <label className="block text-xs text-gray-900 mb-[-8px]">
                    Phone Number
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        country={"in"} // default country India
                        enableSearch
                        value={field.value || ""}
                        onChange={(phone) => field.onChange(phone)}
                        inputStyle={{
                          width: "100%",
                          border: "none",
                          borderBottom: errors.phone ? "2px solid red" : "2px solid #04152E",
                          background: "transparent",
                          outline: "none",
                          color: "black", // phone number color
                          fontSize: "1rem",
                          transition: "border-color 0.3s",
                        }}
                        buttonStyle={{
                          border: "none",
                          background: "transparent",
                          color: "black", // dropdown arrow color
                        }}
                        dropdownStyle={{
                          color: "black", // dropdown list text color
                        }}
                        containerStyle={{
                          width: "100%",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderBottom = "2px solid #0271B1";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderBottom = errors.phone
                            ? "2px solid red"
                            : "2px solid #04152E";
                        }}
                      />
                    )}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="relative p-2">
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className="peer w-full border-b-2 text-gray-900 font-medium border-[#04152E] focus:border-blue-500 outline-none py-2 resize-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-0 p-2 text-[#04152E] transition-all duration-300 ${formValues.message
                    ? "-top-4 text-sm text-[#0271B1]"
                    : "top-2"
                    } peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#0271B1] ${errors.message ? "text-red-500" : ""
                    }`}
                >
                  Write your message..
                </label>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* ReCAPTCHA commented out for now */}
              {/* <div className="inline-block scale-90 sm:scale-100 transform origin-left">
                <ReCAPTCHA
                  sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div> */}

              {/* Submit button */}
              <div className="relative flex flex-col items-end">
  <button
    type="submit"
    disabled={isSubmitting}
    className="bg-[#0271B1] text-white cursor-pointer px-12 py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed z-10"
  >
    {isSubmitting ? "Sending..." : "Send Message"}
  </button>
  <div className="-mt-8 pointer-events-none">
    <Image
      src={letter}
      alt="Letter icon"
      className="-ml-20 w-70 h-40"
    />
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
