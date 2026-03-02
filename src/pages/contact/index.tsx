import { Link } from "react-router-dom";
import Button from "../../components/button";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white font-sans overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="relative lg:w-5/12 bg-[linear-gradient(to_right,rgba(126,34,206,0.7),rgba(49,46,129),rgba(37,99,235))] text-white p-4 md:p-10 flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <svg
              viewBox="0 0 500 800"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full opacity-20"
            >
              <path
                d="M500 0H200C300 150 450 300 150 450C50 500 150 700 300 800H500V0Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col">
            {/* Logo on top */}
            <div className="mb-10">
              <Link to="/" className="text-xl font-bold text-white">
                Logo
              </Link>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter">
              Start Your 
              Financial 
              Leadership 
              Journey Today
            </h1>

            {/* Contact Info */}
            <div className="space-y-8 py-12">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                  <FaPhoneAlt/>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest opacity-60 text-white font-bold mb-2">
                    Call Us
                  </p>
                  <p className="md:text-xl text-md font-semibold">1-800-403-9357</p>
                  <p className="md:text-xl text-md font-semibold">1-443-599-3748</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1a0b3d]" />
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div className="lg:w-7/12 bg-[#fdfcf0]/30 px-4 py-10 md:p-20 flex flex-col justify-center">
          <div className="max-w-xl w-full mx-auto">
            <h2 className="md:text-3xl text-2xl font-bold text-[#1a0b3d] mb-2">
              Request Free Consultation
            </h2>
            <p className="text-gray-500 mb-10">
              Fill out the form below and our leadership team will reach out
              within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-white border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#6332d1] transition-colors"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-white border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#6332d1] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your journey..."
                  className="bg-white border-b-2 border-gray-200 py-3 focus:outline-none focus:border-[#6332d1] transition-colors resize-none"
                ></textarea>
              </div>
              {/* button */}
              <Button
                type="button"
                text="Send Request"
                className="bg-purple-600 text-white py-3 px-12 w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
