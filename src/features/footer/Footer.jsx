import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import logoFooter from "../../assets/logo-footer.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="">
              <img src={logoFooter} alt="logo" className="w-7 h-7 " />
            </span>
            <h1 className="text-xl font-bold">Law.BD</h1>
          </div>
          <nav className="flex space-x-6 text-sm text-gray-300">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/bookings" className="hover:text-white">
              Bookings
            </a>
            <a href="/blogs" className="hover:text-white">
              Blogs
            </a>
            <a href="/contact" className="hover:text-white">
              Contact Us
            </a>
          </nav>
          <hr className="w-full border-dashed border-gray-700 my-6" />
          <div className="flex justify-center space-x-6 text-sm">
            <a
              href="https://www.facebook.com/profile.php?id=100080231865370" 
              target="_blank"
              className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full inline-flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/rajibahmed25032?t=s8z0nTRZz2tBHqQQBR9-Xg&s=09"
              target="_blank"
              className="bg-black hover:bg-gray-800 text-white p-2 rounded-full inline-flex items-center justify-center"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/rajib-ahmed-15997626a/"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-full inline-flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-full inline-flex items-center justify-center"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
