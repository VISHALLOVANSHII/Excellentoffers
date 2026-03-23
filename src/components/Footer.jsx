import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex py-5 bg-cyan-950 m-auto text-white text-sm flex-col items-center border-t max-w-screen-xxl space-y-2">
        {/* Links Section */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/privacy-policy" className="hover:text-cyan-400 transition">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link
            to="/terms-of-service"
            className="hover:text-cyan-400 transition"
          >
            Terms of Service
          </Link>
          <span>|</span>
          <Link to="/registration" className="hover:text-cyan-400 transition">
            Newsletter Opt-In
          </Link>
        </div>

        {/* Copyright */}
        <p>© Copyright 2025 excellentoffers.com. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
