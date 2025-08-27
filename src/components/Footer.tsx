"use client";
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-2 px-8 tracking-wide mt-8">
            <div className="relative max-w-screen-2xl mx-auto">
                {/* <div className="bg-[#003B92] gap-3 rounded-3xl flex flex-wrap items-center justify-between sm:px-8 max-sm:px-6 py-2 min-h-[100px] absolute top-[-76px] w-full">
                    <h6 className="text-white text-xl font-medium">
                        Kickstart Your Career Today
                    </h6>
                    <a href="/careers">
                        <button
                            type="button"
                            className="px-6 py-3 text-sm rounded-full text-white hover:bg-white hover:text-[#0271B1] gap-2 bg-[#0271B1] cursor-pointer"
                        >
                            Get Started
                        </button>
                    </a>
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-20">
                    <div className="lg:col-span-2 max-w-sm">
                        <h4 className="text-lg font-medium mb-6 text-slate-100">
                            GOHASHINCLUDE
                        </h4>
                        <p className="text-slate-400 text-base leading-relaxed mb-4">
                            Since 2008 — consulting, design and engineering for enterprise clients. We build AI-first,
                            scalable platforms that drive measurable value.
                        </p>

                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6 text-slate-100">
                            Quick Links
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="/" className="text-slate-400 hover:text-slate-200 text-base">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-slate-400 hover:text-slate-200 text-base">
                                    About US
                                </a>
                            </li>
                            <li>
                                <a href="/core-capabilities/ai" className="text-slate-400 hover:text-slate-200 text-base">
                                    Core Capabilities
                                </a>
                            </li>
                            {/* <li>
                                <a href="/team" className="text-slate-400 hover:text-slate-200 text-base">
                                    Our Team
                                </a>
                            </li> */}
                            <li>
                                <a href="/careers" className="text-slate-400 hover:text-slate-200 text-base">
                                    Careers
                                </a>
                            </li>
                            {/* <li>
                                <a href="/project" className="text-slate-400 hover:text-slate-200 text-base">
                                    Our Projects
                                </a>
                            </li> */}
                            <li>
                                <a href="/contact" className="text-slate-400 hover:text-slate-200 text-base">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-lg font-medium mb-6 text-slate-100">
                            Follow Us
                        </h4>
                        <ul className="flex flex-wrap gap-4">
                            <li>
                                <a href="https://www.facebook.com/gohashinclude.1" target="_blank" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#0271B1] w-8 h-8" viewBox="0 0 49.652 49.652">
                                        <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/gohashinclude-pvt-ltd/">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
                                        <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" />
                                        <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/lifeatgohashinclude/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
                                        <defs>
                                            <linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#fae100" />
                                                <stop offset=".15" stopColor="#fcb720" />
                                                <stop offset=".3" stopColor="#ff7950" />
                                                <stop offset=".5" stopColor="#ff1c74" />
                                                <stop offset="1" stopColor="#6c1cd1" />
                                            </linearGradient>
                                        </defs>
                                        <rect width="152" height="152" fill="url(#a)" rx="76" />
                                        <path fill="#fff" d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z" />
                                        <circle cx="76" cy="76" r="13.56" fill="#fff" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/gohashinclude" target="_blank" className="text-blue-500 hover:text-blue-700 transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
               1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195
               -.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917
               0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161
               c-.427.734-.666 1.587-.666 2.497 0 1.724.87 3.247 2.188 4.138
               -.807-.026-1.566-.248-2.229-.616v.061c0 2.404 1.693 4.407 3.946 4.86
               -.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086
               .627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.809 2.104-6.115 2.104
               -.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212
               9.054 0 14.001-7.496 14.001-13.986 0-.21 0-.42-.015-.63
               .961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                                    </svg>
                                </a>
                            </li>

                            {/* <li className="text-slate-400 text-base">IT Team</li> */}
                            <li className="text-slate-400 text-base">
                                <a href="mailto:hr@gohashinclude.com" className="hover:underline">
                                    hr@gohashinclude.com
                                </a>

                            </li>
                            <li className="text-slate-400 text-base">
                                <a href="mailto:info@gohashinclude.com" className="hover:underline">
                                    info@gohashinclude.com
                                </a>

                            </li>
                            {/* <li className="text-slate-400 text-base">
                                <a href="tel:+919828099744" className="hover:underline">
                                    +91 98280 99744
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium mb-6 text-slate-100">
                            Office Address
                        </h4>
                        <ul>
                            <li className="text-slate-400 text-base">Nimran Nagar E, P.No.-31 1st Floor</li>
                            <li className="text-slate-400 text-base">Shree Krishna Tower, Ajmer Rd, opp.</li>
                            <li className="text-slate-400 text-base">Asopa Hospital, Jaipur, Rajasthan</li>
                            <li className="text-slate-400 text-base">302024</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-b-2 border-blue-200 max-w-7xl mx-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)] mt-10"></div>
            <div className="py-4 px-4 -mx-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <p className="text-slate-400 text-sm">
                        © GOHASHINCLUDE Pvt. Ltd. 2008 — Present
                    </p>


                    <div className="flex space-x-4">
                        <a href="/privacy" className="text-slate-400 text-sm hover:text-white">
                            Privacy
                        </a>
                        <a href="/terms" className="text-slate-400 text-sm hover:text-white">
                            Terms
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer