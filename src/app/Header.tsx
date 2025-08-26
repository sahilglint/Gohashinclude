"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/Link.png";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { SiJirasoftware, SiPython } from "react-icons/si";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { TbDeviceImacCode } from "react-icons/tb";
import { MdComment } from "react-icons/md";
import { HiRectangleStack } from "react-icons/hi2";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { FaSalesforce } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";

import {
  FaRobot,
  FaBrain,
 // FaChartLine,
  FaLanguage,
  //FaPalette,
  //FaPencilRuler,
  FaBrush,
  FaObjectGroup,
  FaCode,
  FaMobile,
  FaCloud,
  FaServer,

} from "react-icons/fa";

const navLinks = [
  { name: "About Us", href: "/about" },
  {
    name: "Core Capabilities",
    dropdown: [
      [
        { name: "AI Development", href: "/core-capabilities/ai", icon: AiFillCodeSandboxCircle  },
        { name: "Low Code Development", href: "/core-capabilities/low-code-development", icon:TbDeviceImacCode},
        { name: "Software Development", href: "/core-capabilities/software-development", icon: SiJirasoftware },
        { name: "Ecommerce Development", href: "/core-capabilities/ecommerce-development", icon: MdComment }
      ],
      [
        { name: "SaleForce Development", href: "/core-capabilities/saleforce-development", icon: FaSalesforce },
        { name: "Mobile App Development", href: "/core-capabilities/mobile-development", icon: GrAppsRounded },
        { name: "Python Development", href: "/core-capabilities/python-development", icon: SiPython},

      ],
      [
        { name: "Product Development", href: "/core-capabilities/product-development", icon: AiFillProduct  },
        { name: "Web Design & Development", href: "/core-capabilities/web-development", icon: PiWebhooksLogoBold },
        { name: "Hire Dedicated Resources", href: "/core-capabilities/hire-dedicated-resource", icon: HiRectangleStack },
   
      ]
    ]
  },
  { name: "Our Team", href: "/team", },
  { name: "Careers", href: "/careers", },
  { name: "Blog", href: "/blog", },
  { name: "Case Study", href: "/case-study", },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(null); 
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setDropdownOpenIndex(null);
      }

      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMobileDropdown = (index: number) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
  };

  const toggleDesktopDropdown = (index: number) => {
    setDesktopDropdownOpen(desktopDropdownOpen === index ? null : index);
  };

  const closeAllDropdowns = () => {
    setDesktopDropdownOpen(null);
    setDropdownOpenIndex(null);
  };

  const quickNavigate = (e: React.MouseEvent, href: string) => {
    if (
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();
      closeAllDropdowns();
      router.push(href);
    }
  };

  return (
    <header className="bg-white dark:bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-2 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={logo}
            alt="GOHASHINCLUDE Logo"
            width={180}
            height={60}
            priority
            className="w-55 sm:w-65 md:w-70 lg:w-70 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (link.dropdown && link.dropdown.some(column =>
                column.some((d) => pathname === d.href)
              ));

            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group font-medium"
                  ref={desktopDropdownRef}
                >
                  {/* Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleDesktopDropdown(index)}
                    className={`flex items-center relative before:absolute before:bottom-0 before:left-0 before:top-5 before:h-[3px] before:bg-[#0271B1] before:transition-all before:duration-300 ${isActive || desktopDropdownOpen === index
                        ? "before:w-full text-[#0271B1]"
                        : "before:w-0 group-hover:before:w-full text-gray-800 dark:text-gray-800"
                      }`}
                    aria-haspopup="true"
                    aria-expanded={desktopDropdownOpen === index}
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${desktopDropdownOpen === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                <div
  className={`fixed left-1/2 -translate-x-1/2 mt-5
    w-[1250px] max-w-[95vw] bg-white dark:bg-white shadow-xl rounded-b-2xl p-5
    border border-gray-100 transition-all duration-300 z-50 
    grid grid-cols-3 gap-5 scale-95 
    ${desktopDropdownOpen === index
      ? "opacity-100 visible translate-y-0"
      : "opacity-0 invisible -translate-y-2"}`}
  role="menu"
>
  {link.dropdown.map((column, colIndex) => (
    <div key={colIndex} className="space-y-3">
      {column.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              closeAllDropdowns();
              router.push(item.href);
            }}
            className={`flex items-center px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-100 transition-all duration-200 rounded-md 
              ${pathname === item.href
                ? "font-semibold text-[#0271B1] bg-blue-50"
                : "text-gray-700 dark:text-gray-700"
              }`}
            role="menuitem"
          >
            {IconComponent && <IconComponent className="mr-3 text-[#0271B1]" />}
            {item.name}
          </Link>
        );
      })}
    </div>
  ))}
</div>

                </div>
              );
            }

            const IconComponent = link;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center relative before:absolute before:bottom-0 before:left-0 before:top-5 before:h-[3px] before:bg-[#0271B1] before:transition-all before:duration-300 ${isActive
                    ? "before:w-full text-[#0271B1]"
                    : "before:w-0 hover:before:w-full text-gray-800 text-md font-medium dark:text-gray-800"
                  }`}
              >

                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="ml-3 px-4 py-2 bg-[#0271B1] text-white rounded-md hover:bg-[#025e94] transition-colors shadow-sm text-sm sm:text-base"
            onClick={closeAllDropdowns}
          >
            Book Free Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-2xl text-gray-800 dark:text-gray-800"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-100 z-40 pt-4 overflow-y-auto transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Mobile Header */}
        <div className="px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-gray-300 flex justify-between items-center">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              closeAllDropdowns();
              router.push("/");
              setMenuOpen(false);
            }}
            className="flex items-center space-x-2"
          >
            <Image
              src={logo}
              alt="GOHASHINCLUDE Logo"
              width={200}
              height={70}
              priority
              className="w-60 sm:w-62 h-auto"
            />
          </Link>
          <FaTimes
            className="w-6 h-6 text-gray-800 dark:text-gray-800 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Mobile Menu Links */}
        <div className="px-4 sm:px-6 py-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => {
              const isActive =
                pathname === link.href ||
                (link.dropdown && link.dropdown.some(column =>
                  column.some((d) => pathname === d.href)
                ));

              const IconComponent = link;

              if (link.dropdown) {
                return (
                  <div key={link.name} className="border-b border-gray-200 dark:border-gray-300">
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className={`w-full px-4 py-3 flex justify-between items-center text-left ${isActive
                          ? "text-[#0271B1] font-semibold"
                          : "text-gray-800 dark:text-gray-800"
                        }`}
                    >
                      <span className="flex items-center">

                        {link.name}
                      </span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${dropdownOpenIndex === index ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownOpenIndex === index && (
                      <div className="pl-6 pb-2 space-y-1">
                        {link.dropdown.map((column, colIndex) => (
                          <div key={colIndex}>
                            {column.map((item) => {
                              const ItemIconComponent = item.icon;
                              return (
                                <button
                                  key={item.name}
                                  onClick={() => {
                                    closeAllDropdowns();
                                    router.push(item.href);
                                    setMenuOpen(false);
                                  }}
                                  className={`w-full text-left flex items-center px-4 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-200 ${pathname === item.href
                                      ? "text-[#0271B1] font-semibold"
                                      : "text-gray-800 dark:text-gray-800"
                                    }`}
                                >
                                  {ItemIconComponent && <ItemIconComponent className="mr-2 text-[#0271B1]" />}
                                  {item.name}
                                </button>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => {
                    closeAllDropdowns();
                    router.push(link.href);
                    setMenuOpen(false);
                  }}
                  className={`text-left flex items-center w-full px-4 py-3 border-b border-gray-200 dark:border-gray-300 ${isActive
                      ? "text-[#0271B1] font-semibold"
                      : "text-gray-800 dark:text-gray-800 hover:text-[#0271B1]"
                    }`}
                >

                  {link.name}
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                closeAllDropdowns();
                router.push("/contact");
                setMenuOpen(false);
              }}
              className="block w-full text-center px-4 py-3 bg-[#0271B1] text-white rounded-md hover:bg-[#025e94] transition-colors shadow-sm"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}