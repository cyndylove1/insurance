import { Link } from "react-router-dom";
import hero from "../assets/focused-employees-working-cafe.png";
import Button from "./button";

export default function Hero() {
  return (
    <section id="home" className="relative main text-white h-full py-14">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
        <div className="md:text-5xl text-3xl font-[600] pt-[8rem] px-4 md:px-6">
          <h2 className="tracking-tighter">
            Building Wealth. <br /> Securing Futures <br /> and Creating Legacy.
          </h2>
          <p className="max-w-lg md:text-lg text-sm italics md:text-sm my-6 font-[300]">
            At Eagle Leadership Development Inc, we help individuals, families,
            and business owners achieve financial clarity, protection, and
            growth through strategic planning and customized financial
            solutions.
          </p>
          {/* button */}
          <Link to="/contact">
            <Button
              type="button"
              text="Start Your Journey"
              className="bg-white text-purple-700 py-3 px-6"
            />
          </Link>
        </div>
        {/*hero img */}
        <div className="relative pt-10 lg:pt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95] via-[#312e81] to-[#1e3a8a] rounded-3xl blur-2xl opacity-20"></div>
          <img
            src={hero}
            alt="Eagle Leadership Development"
            className="relative rounded-3xl shadow-2xl w-full h-full md:h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
