import logo from "../assets/Mblogo.png";
import resume from "../assets/MadhuBResume.pdf";
import Leet from "../assets/leetcode.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOpacity } from "react-icons/md";
const handleLogoClick = () => {
  window.location.reload(); // Reloads the page
};

const Navbar = () => {
  return (
    <nav className=" ml-10 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="#" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" width={75} className="opacity-80" />
        </a>
      </div>
      <div className="m-8 items-center flex justify-center gap-8 text-3xl">
        <a
          href="https://www.linkedin.com/in/madhu-b-59ba08209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/madhuraj0705"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/MadhuRaj07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href={resume}
          download="Madhu_B_Resume.pdf"
          className="relative flex items-center justify-center text-3xl font-bold text-white opacity-75"
        >
          <div className="group relative flex items-center justify-center">
            <span className="text-3.5xl">R</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 hidden w-max max-w-xs px-2 py-1 text-sm text-white bg-black rounded group-hover:block">
              Download Resume
            </span>
          </div>
        </a>

        {/* <img src={Leet} alt="leetcode" width={30} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
