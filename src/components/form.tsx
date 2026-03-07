export default function Form() {
  return (
    <div className="bg-gray-100 px-4 py-10 md:p-20 flex flex-col justify-center">
      <div className="max-w-xl w-full mx-auto">
        <h2 className="md:text-3xl text-2xl font-bold text-[#1a0b3d] mb-2">
          Request Free Consultation
        </h2>
        <p className="text-gray-500 mb-10">
          Fill out the form below and our leadership team will reach out within
          24 hours.
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
                className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-(--secondary) transition-colors"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-(--secondary) transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Message
            </label>
            <textarea
              placeholder="Tell us about your journey..."
              className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-(--secondary) transition-colors resize-none"
            ></textarea>
          </div>
          {/* button */}
          <div>
            <button className="px-10 py-4 rounded-full hover:scale-105 active:scale-95  font-bold w-full text-md transition-all duration-500 text-white bg-[#581c87]">
              Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
