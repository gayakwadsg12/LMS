// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="self-stretch bg-slate-900 px-4 pb-8 pt-12 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center">
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/8khssezv_expires_30_days.png"}
            className="mr-3 h-10 w-10 object-fill sm:h-12 sm:w-12"
            alt="Logo"
          />
          <span className="text-2xl font-bold text-white sm:text-[32px]">LMS</span>
        </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link to="/about" className="text-sm text-white no-underline transition-colors hover:text-gray-300 sm:text-base">
              About Us
            </Link>
            <Link to="/contact" className="text-sm text-white no-underline transition-colors hover:text-gray-300 sm:text-base">
              Contact
            </Link>
            <span className="cursor-pointer text-sm text-white transition-colors hover:text-gray-300 sm:text-base">Privacy Policy</span>
            <span className="cursor-pointer text-sm text-white transition-colors hover:text-gray-300 sm:text-base">Terms</span>
          </div>
        </div>

        <div className="border-t border-white/15 pt-4 text-center">
          <span className="text-sm text-white/90">© 2025 EduKids Platform. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;