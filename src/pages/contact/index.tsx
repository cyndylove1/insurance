import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Form from "../../components/form";
import Svg from "../../components/svg";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white font-sans overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="relative lg:w-5/12 bg-[linear-gradient(to_right,rgba(126,34,206,0.7),rgba(49,46,129),rgba(37,99,235))] text-white p-4 md:p-10 flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
           <Svg/>
          </div>

          <div className="relative z-10 flex flex-col">
            {/* Logo on top */}
            <div className="mb-10">
              <Link to="/" className="text-xl font-bold text-white">
                Logo
              </Link>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter lg:max-w-2xl max-w-md">
              Start Your Financial Leadership Journey Today
            </h1>

            {/* Contact Info */}
            <div className="space-y-8 py-12">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest opacity-60 text-white font-bold mb-2">
                    Call Us
                  </p>
                  <p className="md:text-xl text-md font-semibold">
                    1-800-403-9357
                  </p>
                  <p className="md:text-xl text-md font-semibold">
                    1-443-599-3748
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1a0b3d]" />
        </div>

        {/* Contact Form */}
        <Form />
      </div>
    </section>
  );
}
